import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FunButton } from "@/components/ui/fun-button";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { sanitizeInput, sanitizeEmail, sanitizePhone } from "@/utils/sanitize";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeEmail(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
        form_type: 'general'
      };

      // Save to database
      const { error } = await supabase
        .from('contact_submissions')
        .insert(sanitizedData);

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'contact',
          formData: sanitizedData,
          recipientEmail: 'info@waumbe.org.za'
        }
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <MiniHeroBanner 
        title="Get in Touch" 
        subtitle="Have questions about our programs or want to get involved? We'd love to hear from you."
      />
      
      <ScrollAnimation>
        <section className="py-16 bg-gradient-to-br from-fun-blue/5 to-fun-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollAnimation delay={0.1}>
                <Card className="bg-gradient-to-br from-fun-green/10 to-fun-yellow/10 hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-5 h-5 text-fun-green animate-float" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input 
                          placeholder="Full Name" 
                          required 
                          className="border-fun-green/30 focus:border-fun-green"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          disabled={isSubmitting}
                        />
                        <Input 
                          placeholder="Email Address" 
                          type="email" 
                          required 
                          className="border-fun-green/30 focus:border-fun-green"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                      <Input 
                        placeholder="Subject" 
                        required 
                        className="border-fun-green/30 focus:border-fun-green"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        disabled={isSubmitting}
                      />
                      <Textarea
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="border-fun-green/30 focus:border-fun-green min-h-32"
                        disabled={isSubmitting}
                      />
                      <FunButton 
                        type="submit" 
                        variant="wiggle" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </FunButton>
                    </form>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Contact Information */}
              <div className="space-y-8">
                <ScrollAnimation delay={0.2}>
                  <Card className="bg-gradient-to-br from-fun-purple/10 to-fun-pink/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-fun-purple rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Visit Our Office</h3>
                           <p className="text-muted-foreground">
                             14 Moses Mabhida Street<br />
                             Fisantekraal, Cape Town<br />
                             7550, South Africa
                           </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <Card className="bg-gradient-to-br from-fun-blue/10 to-fun-green/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-fun-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                           <p className="text-muted-foreground">
                             +27 75 340 6751<br />
                             +27 61 455 6192
                           </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation delay={0.4}>
                  <Card className="bg-gradient-to-br from-fun-green/10 to-fun-yellow/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-fun-green rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                           <p className="text-muted-foreground">
                             terencewillemse@waumbe.org.za<br />
                             asiphekhemtse@waumbe.org.za<br />
                             info@waumbe.org.za
                           </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation delay={0.5}>
                  <Card className="bg-gradient-to-br from-fun-yellow/10 to-fun-pink/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-fun-yellow rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 8:00 AM - 5:00 PM<br />
                            Saturday: 9:00 AM - 2:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Contact;