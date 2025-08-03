import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormEmailRequest {
  formType: string;
  formData: Record<string, any>;
  recipientEmail?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, formData, recipientEmail = "waumbedata@gmail.com" }: FormEmailRequest = await req.json();

    let subject = "";
    let htmlContent = "";

    switch (formType) {
      case "contact":
        subject = `New Contact Form Submission - ${formData.subject || 'General Inquiry'}`;
        htmlContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          <hr>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `;
        break;

      case "course_application":
        subject = `New Course Application - ${formData.selected_course}`;
        htmlContent = `
          <h2>New Course Application</h2>
          <p><strong>Name:</strong> ${formData.full_name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Selected Course:</strong> ${formData.selected_course}</p>
          <p><strong>Interest Reason:</strong></p>
          <p>${formData.interest_reason}</p>
          <hr>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `;
        break;

      case "learnership_application":
        subject = `New Learnership Application - ${formData.full_name}`;
        htmlContent = `
          <h2>New Learnership Application</h2>
          <p><strong>Name:</strong> ${formData.full_name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Age:</strong> ${formData.age}</p>
          <p><strong>Education Level:</strong> ${formData.education_level}</p>
          <p><strong>Program Interest:</strong> ${formData.program_interest}</p>
          <p><strong>Motivation:</strong></p>
          <p>${formData.motivation}</p>
          <p><strong>Previous Experience:</strong></p>
          <p>${formData.previous_experience}</p>
          <p><strong>Availability:</strong> ${formData.availability}</p>
          <p><strong>Emergency Contact:</strong> ${formData.emergency_contact}</p>
          <p><strong>Emergency Phone:</strong> ${formData.emergency_phone}</p>
          <hr>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `;
        break;

      case "partnership_request":
        subject = `New Partnership Request - ${formData.company_name}`;
        htmlContent = `
          <h2>New Partnership Request</h2>
          <p><strong>Company:</strong> ${formData.company_name}</p>
          <p><strong>Contact Person:</strong> ${formData.contact_person}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Company Size:</strong> ${formData.company_size}</p>
          <p><strong>Industry:</strong> ${formData.industry}</p>
          <p><strong>Partnership Type:</strong> ${formData.partnership_type}</p>
          <p><strong>Proposed Contribution:</strong></p>
          <p>${formData.proposed_contribution}</p>
          <p><strong>Goals:</strong></p>
          <p>${formData.goals}</p>
          <p><strong>Timeline:</strong> ${formData.timeline}</p>
          <p><strong>Budget Range:</strong> ${formData.budget_range}</p>
          <p><strong>Additional Info:</strong></p>
          <p>${formData.additional_info}</p>
          <hr>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `;
        break;

      case "testimonial":
        subject = `New Testimonial Submission - ${formData.full_name}`;
        htmlContent = `
          <h2>New Testimonial Submission</h2>
          <p><strong>Name:</strong> ${formData.full_name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Program:</strong> ${formData.program}</p>
          <p><strong>Year Participated:</strong> ${formData.year_participated}</p>
          <p><strong>Permission to Publish:</strong> ${formData.permission_to_publish}</p>
          <p><strong>Testimonial:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007cba; margin: 10px 0;">
            ${formData.testimonial.replace(/\n/g, '<br>')}
          </div>
          <hr>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `;
        break;

      case "newsletter":
        subject = `New Newsletter Subscription - ${formData.email}`;
        htmlContent = `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${formData.email}</p>
          <hr>
          <p><em>Subscribed on: ${new Date().toLocaleString()}</em></p>
        `;
        break;

      default:
        subject = "New Form Submission";
        htmlContent = `
          <h2>New Form Submission</h2>
          <pre>${JSON.stringify(formData, null, 2)}</pre>
          <hr>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `;
    }

    const emailResponse = await resend.emails.send({
      from: "Waumbe Foundation <noreply@resend.dev>",
      to: [recipientEmail],
      subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
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