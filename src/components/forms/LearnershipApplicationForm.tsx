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
import { GraduationCap, Clock, Phone, User } from "lucide-react";

const learnershipFormSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  age: z.number().min(16, "Must be at least 16 years old").max(65, "Must be under 65"),
  education_level: z.string().min(1, "Please select your education level"),
  program_interest: z.string().min(1, "Please select a program"),
  motivation: z.string().min(50, "Please provide at least 50 characters explaining your motivation"),
  previous_experience: z.string().optional(),
  availability: z.string().min(1, "Please select your availability"),
  emergency_contact: z.string().min(2, "Emergency contact name is required"),
  emergency_phone: z.string().min(10, "Emergency contact phone is required"),
});

type LearnershipFormData = z.infer<typeof learnershipFormSchema>;

export const LearnershipApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<LearnershipFormData>({
    resolver: zodResolver(learnershipFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      age: 18,
      education_level: "",
      program_interest: "",
      motivation: "",
      previous_experience: "",
      availability: "",
      emergency_contact: "",
      emergency_phone: "",
    },
  });

  const onSubmit = async (data: LearnershipFormData) => {
    setIsSubmitting(true);
    try {
      // Send email notification
      await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'learnership_application',
          formData: {
            full_name: data.full_name,
            email: data.email,
            phone: data.phone,
            age: data.age,
            education_level: data.education_level,
            program_interest: data.program_interest,
            motivation: data.motivation,
            previous_experience: data.previous_experience,
            availability: data.availability,
            emergency_contact: data.emergency_contact,
            emergency_phone: data.emergency_phone
          }
        }
      });

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
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
          <GraduationCap className="w-6 h-6 text-primary" />
          Learnership Application
        </CardTitle>
        <CardDescription>
          Apply for our skills development and learnership programs. All fields marked with * are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
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
                      <Input type="email" placeholder="your.email@example.com" {...field} />
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
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="(Optional) Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age *</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Your age" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Education and Program Interest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="education_level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education Level *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="no_formal">No Formal Education</SelectItem>
                        <SelectItem value="primary">Primary School</SelectItem>
                        <SelectItem value="grade_10">Grade 10</SelectItem>
                        <SelectItem value="grade_12">Grade 12 / Matric</SelectItem>
                        <SelectItem value="certificate">Certificate</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="degree">Degree</SelectItem>
                        <SelectItem value="postgraduate">Postgraduate</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="program_interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program Interest *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="skills_development">Skills Development</SelectItem>
                        <SelectItem value="entrepreneurship">Entrepreneurship Training</SelectItem>
                        <SelectItem value="digital_literacy">Digital Literacy</SelectItem>
                        <SelectItem value="life_skills">Life Skills</SelectItem>
                        <SelectItem value="technical_training">Technical Training</SelectItem>
                        <SelectItem value="business_development">Business Development</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Availability *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="When are you available?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays (Monday - Friday)</SelectItem>
                      <SelectItem value="weekends">Weekends Only</SelectItem>
                      <SelectItem value="evenings">Evenings Only</SelectItem>
                      <SelectItem value="flexible">Flexible Schedule</SelectItem>
                      <SelectItem value="full_time">Full Time Available</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Motivation and Experience */}
            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do you want to join this program? *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your motivation, goals, and what you hope to achieve through this program..."
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
              name="previous_experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Experience (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe any relevant experience, skills, or training you have..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Emergency Contact */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Emergency Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="emergency_contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of emergency contact" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emergency_phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="Emergency contact phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};