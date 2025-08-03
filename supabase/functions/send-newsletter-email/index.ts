import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: NewsletterEmailRequest = await req.json();

    console.log("Sending newsletter signup confirmation to:", email);

    // Send welcome email to subscriber
    const emailResponse = await resend.emails.send({
      from: "Waumbe <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Waumbe Community!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #b794f6, #63b3ed); padding: 40px 20px; border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px; text-align: center;">
            <h1 style="color: #553c9a; margin-bottom: 20px;">Welcome to Waumbe!</h1>
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for joining our community! You're now part of a movement that's transforming communities through education, youth empowerment, and innovation.
            </p>
            <div style="background: #f7fafc; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #553c9a; margin-bottom: 15px;">What to expect:</h3>
              <ul style="color: #666; text-align: left; margin: 0; padding-left: 20px;">
                <li>Updates on our latest programs and initiatives</li>
                <li>Success stories from our community members</li>
                <li>Opportunities to get involved and make a difference</li>
                <li>Information about upcoming events and workshops</li>
              </ul>
            </div>
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              Together, we can create lasting positive change in communities across Cape Town and beyond.
            </p>
            <a href="https://waumbe.org" style="background: linear-gradient(135deg, #b794f6, #63b3ed); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
              Visit Our Website
            </a>
          </div>
          <p style="color: white; text-align: center; margin-top: 20px; font-size: 14px;">
            Waumbe Youth Development Centre<br>
            Empowering Communities Through Education & Innovation
          </p>
        </div>
      `,
    });

    // Send notification to admin
    await resend.emails.send({
      from: "Waumbe <onboarding@resend.dev>",
      to: ["waumbedata@gmail.com"],
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Newsletter emails sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-newsletter-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);