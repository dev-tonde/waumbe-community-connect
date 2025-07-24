import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, donor_name, donor_email, cause, message } = await req.json();

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get PayFast credentials
    const merchantId = Deno.env.get("PAYFAST_MERCHANT_ID");
    const merchantKey = Deno.env.get("PAYFAST_MERCHANT_KEY");

    if (!merchantId || !merchantKey) {
      throw new Error("PayFast credentials not configured");
    }

    // Create donation record
    const { data: donation, error: donationError } = await supabaseClient
      .from('donations')
      .insert({
        donor_name,
        donor_email,
        amount: parseFloat(amount),
        cause,
        message,
        merchant_id: merchantId,
        status: 'pending'
      })
      .select()
      .single();

    if (donationError) {
      console.error('Error creating donation:', donationError);
      throw new Error('Failed to create donation record');
    }

    // PayFast payment form data
    const paymentData = {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: `${req.headers.get("origin")}/donate?success=true`,
      cancel_url: `${req.headers.get("origin")}/donate?cancelled=true`,
      notify_url: `${Deno.env.get("SUPABASE_URL")}/functions/v1/payfast-webhook`,
      name_first: donor_name.split(' ')[0] || donor_name,
      name_last: donor_name.split(' ').slice(1).join(' ') || '',
      email_address: donor_email,
      m_payment_id: donation.id,
      amount: amount,
      item_name: `Donation to ${cause || 'Waumbe Foundation'}`,
      item_description: message || 'Donation to support our programs',
      custom_str1: cause || '',
      custom_str2: donation.id,
    };

    // Generate signature (basic implementation - in production use proper signature generation)
    const queryString = Object.entries(paymentData)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    const signature = await crypto.subtle.digest(
      'MD5', 
      new TextEncoder().encode(queryString + '&passphrase=' + merchantKey)
    );
    
    const signatureHex = Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    paymentData.signature = signatureHex;

    // PayFast sandbox/production URL
    const paymentUrl = `https://sandbox.payfast.co.za/eng/process`;

    return new Response(JSON.stringify({
      success: true,
      payment_url: paymentUrl,
      payment_data: paymentData,
      donation_id: donation.id
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('PayFast payment error:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Payment processing failed' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});