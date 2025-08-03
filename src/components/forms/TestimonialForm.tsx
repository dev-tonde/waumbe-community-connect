import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";

const testimonialFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  yearParticipated: z.string().min(1, "Please select the year you participated"),
  testimonial: z.string().min(50, "Please provide a detailed testimonial (at least 50 characters)"),
  permissionToPublish: z.enum(["yes", "no"], {
    required_error: "Please indicate if we can publish your testimonial",
  }),
});

type TestimonialFormData = z.infer<typeof testimonialFormSchema>;

const TestimonialForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      program: "",
      yearParticipated: "",
      testimonial: "",
      permissionToPublish: undefined,
    },
  });

  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);
    try {
      await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'testimonial',
          formData: {
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            program: data.program,
            year_participated: data.yearParticipated,
            testimonial: data.testimonial,
            permission_to_publish: data.permissionToPublish,
          },
          recipientEmail: 'waumbedata@gmail.com'
        }
      });

      toast({
        title: "Testimonial Submitted!",
        description: "Thank you for sharing your story with us. We'll review it and may feature it on our website.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your testimonial. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-soft">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Share Your Story</h2>
        <p className="text-muted-foreground">
          We'd love to hear about your experience with Waumbe programs. Your story could inspire others!
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    {...field}
                    aria-describedby="fullName-error"
                  />
                </FormControl>
                <FormMessage id="fullName-error" />
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
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    {...field}
                    aria-describedby="email-error"
                  />
                </FormControl>
                <FormMessage id="email-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your phone number" 
                    {...field}
                    aria-describedby="phone-error"
                  />
                </FormControl>
                <FormMessage id="phone-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="program"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Program Participated In *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger aria-describedby="program-error">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="academic-development">Academic Development</SelectItem>
                    <SelectItem value="skills-development">Skills Development</SelectItem>
                    <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                    <SelectItem value="learnerships">Learnerships</SelectItem>
                    <SelectItem value="societal-reformation">Societal Reformation</SelectItem>
                    <SelectItem value="courses">Courses</SelectItem>
                    <SelectItem value="volunteer">Volunteer Program</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage id="program-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yearParticipated"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year of Participation *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger aria-describedby="year-error">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage id="year-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="testimonial"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Story *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your experience with Waumbe programs. How did it impact your life? What did you learn? What would you tell others?"
                    className="min-h-[150px]"
                    {...field}
                    aria-describedby="testimonial-error"
                  />
                </FormControl>
                <FormMessage id="testimonial-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="permissionToPublish"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Permission to Publish *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger aria-describedby="permission-error">
                      <SelectValue placeholder="Can we publish your testimonial?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes, you may publish my testimonial</SelectItem>
                    <SelectItem value="no">No, please keep this confidential</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage id="permission-error" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Submitting testimonial" : "Submit testimonial"}
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Submitting...
              </>
            ) : (
              "Submit Testimonial"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TestimonialForm;