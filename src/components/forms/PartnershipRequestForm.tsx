import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Building, Users, DollarSign, Target } from "lucide-react";

const partnershipFormSchema = z.object({
  company_name: z.string().min(2, "Company name is required"),
  contact_person: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company_size: z.string().min(1, "Please select company size"),
  industry: z.string().min(1, "Please select your industry"),
  partnership_type: z.string().min(1, "Please select partnership type"),
  proposed_contribution: z.string().optional(),
  goals: z.string().min(50, "Please provide at least 50 characters describing your goals"),
  timeline: z.string().optional(),
  budget_range: z.string().optional(),
  additional_info: z.string().optional(),
});

type PartnershipFormData = z.infer<typeof partnershipFormSchema>;

export const PartnershipRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      company_name: "",
      contact_person: "",
      email: "",
      phone: "",
      company_size: "",
      industry: "",
      partnership_type: "",
      proposed_contribution: "",
      goals: "",
      timeline: "",
      budget_range: "",
      additional_info: "",
    },
  });

  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('partnership_requests')
        .insert({
          company_name: data.company_name,
          contact_person: data.contact_person,
          email: data.email,
          phone: data.phone,
          company_size: data.company_size,
          industry: data.industry,
          partnership_type: data.partnership_type,
          proposed_contribution: data.proposed_contribution,
          goals: data.goals,
          timeline: data.timeline,
          budget_range: data.budget_range,
          additional_info: data.additional_info,
          status: 'pending'
        });

      if (error) throw error;

      toast({
        title: "Partnership Request Submitted!",
        description: "Thank you for your interest in partnering with us. Our team will review your request and contact you soon.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting partnership request:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="w-6 h-6 text-primary" />
          Partnership Request
        </CardTitle>
        <CardDescription>
          Partner with Waumbe Foundation to make a meaningful impact in our community. 
          Tell us about your organization and how we can work together.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Company Information */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium mb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Company Name *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your organization name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Finance & Banking</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="media">Media & Communications</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="non_profit">Non-Profit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company_size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Company Size *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                          <SelectItem value="small">Small (11-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                          <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="partnership_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Partnership Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="financial_sponsorship">Financial Sponsorship</SelectItem>
                          <SelectItem value="skills_volunteering">Skills-Based Volunteering</SelectItem>
                          <SelectItem value="training_provision">Training & Education Provision</SelectItem>
                          <SelectItem value="equipment_donation">Equipment/Resource Donation</SelectItem>
                          <SelectItem value="mentorship">Mentorship Programs</SelectItem>
                          <SelectItem value="internship">Internship Opportunities</SelectItem>
                          <SelectItem value="event_collaboration">Event Collaboration</SelectItem>
                          <SelectItem value="research_collaboration">Research Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="contact_person"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person *</FormLabel>
                      <FormControl>
                        <Input placeholder="Primary contact name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="contact@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(Optional) Contact phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Partnership Details */}
            <div>
              <h3 className="text-lg font-medium mb-4">Partnership Details</h3>
              
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Partnership Goals *
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe what you hope to achieve through this partnership and how it aligns with your organization's values..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="proposed_contribution"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Proposed Contribution</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What can your organization contribute? (e.g., funding, expertise, resources, volunteer hours...)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Timeline</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="When would you like to start?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1_month">Within 1 month</SelectItem>
                          <SelectItem value="3_months">Within 3 months</SelectItem>
                          <SelectItem value="6_months">Within 6 months</SelectItem>
                          <SelectItem value="next_year">Next year</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget_range"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Budget Range (if applicable)
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under_10k">Under R10,000</SelectItem>
                          <SelectItem value="10k_50k">R10,000 - R50,000</SelectItem>
                          <SelectItem value="50k_100k">R50,000 - R100,000</SelectItem>
                          <SelectItem value="100k_500k">R100,000 - R500,000</SelectItem>
                          <SelectItem value="over_500k">Over R500,000</SelectItem>
                          <SelectItem value="non_financial">Non-financial Partnership</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="additional_info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any additional information you'd like to share about your organization or partnership ideas..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? "Submitting Request..." : "Submit Partnership Request"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};