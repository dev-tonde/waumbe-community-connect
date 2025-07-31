import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const courseApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  selectedCourse: z.string().min(1, "Please select a course"),
  interestReason: z.string().min(10, "Please tell us why you're interested (at least 10 characters)"),
  line1: z.string().min(1, "Address line 1 is required"),
  line2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  region: z.string().min(1, "Province is required"),
  country: z.string().min(1, "Country is required"),
  code: z.string().min(1, "Postal code is required"),
});

type CourseApplicationFormData = z.infer<typeof courseApplicationSchema>;

const CourseApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<CourseApplicationFormData>({
    resolver: zodResolver(courseApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      selectedCourse: "",
      interestReason: "",
      line1: "",
      line2: "",
      city: "",
      region: "",
      country: "",
      code: "",
    },
  });

  const onSubmit = async (data: CourseApplicationFormData) => {
    setIsSubmitting(true);
    try {
      // Send email notification
      await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'course_application',
          formData: {
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            selected_course: data.selectedCourse,
            interest_reason: data.interestReason,
            address: `${data.line1}${data.line2 ? ', ' + data.line2 : ''}, ${data.city}, ${data.region}, ${data.country}, ${data.code}`
          }
        }
      });

      // Redirect to PayFast for course payment
      const form = document.createElement('form');
      form.name = 'PayFastPayNowForm';
      form.action = 'https://payment.payfast.io/eng/process';
      form.method = 'post';

      const fields = {
        cmd: '_paynow',
        receiver: '27185441',
        return_url: 'https://www.waumbe.org.za',
        cancel_url: 'https://www.waumbe.org.za',
        notify_url: 'https://www.waumbe.org.za',
        amount: '500.00', // Default course fee
        item_name: 'Course',
        line1: data.line1,
        line2: data.line2 || '',
        city: data.city,
        region: data.region,
        country: data.country,
        code: data.code
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value.toString();
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      toast({
        title: "Application Submitted!",
        description: "You will be redirected to complete payment for your course application.",
      });

    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email address" {...field} />
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
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="selectedCourse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a Course</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="end-user-computing">End User Computing</SelectItem>
                  <SelectItem value="administration">Administration</SelectItem>
                  <SelectItem value="skills-development">Skills Development</SelectItem>
                  <SelectItem value="data-management">Data Management</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interestReason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why are you interested in this course?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your motivation and goals..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address Fields */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Address Information</h3>
          
          <FormField
            control={form.control}
            name="line1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input placeholder="Street address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="line2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 2 (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Apartment, suite, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <FormControl>
                    <Input placeholder="Province" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="South Africa">South Africa</SelectItem>
                      <SelectItem value="Botswana">Botswana</SelectItem>
                      <SelectItem value="Lesotho">Lesotho</SelectItem>
                      <SelectItem value="Mauritius">Mauritius</SelectItem>
                      <SelectItem value="Mozambique">Mozambique</SelectItem>
                      <SelectItem value="Swaziland">Swaziland</SelectItem>
                      <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Postal code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application & Pay"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          You will be redirected to PayFast to complete your course application payment.
        </p>
      </form>
    </Form>
  );
};

export default CourseApplicationForm;