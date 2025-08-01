import { useState } from "react";
import { FunButton } from "@/components/ui/fun-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StayConnected = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/functions/v1/send-form-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'newsletter',
          formData: { email },
          recipientEmail: 'waumbedata@gmail.com'
        }),
      });
      
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and impact stories.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-float">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our community and stay updated on our latest programs, success stories, 
              and opportunities to make a difference.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Newsletter Signup */}
          <ScrollAnimation delay={0.1}>
            <Card className="lg:col-span-1 bg-gradient-to-br from-fun-pink/10 to-fun-blue/10 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-fun-pink animate-bounce-gentle" />
                  Newsletter
                </CardTitle>
                <CardDescription>
                  Get monthly updates on our programs and community impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-fun-pink/30 focus:border-fun-pink"
                  />
                  <FunButton type="submit" variant="primary" className="w-full">
                    Subscribe
                  </FunButton>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>

        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <ScrollAnimation delay={0.3}>
             <div className="text-center transform hover:scale-110 transition-transform duration-300">
               <Phone className="w-8 h-8 text-fun-blue mx-auto mb-4 animate-bounce-gentle" />
               <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
               <div className="text-muted-foreground">
                 <p>+27 75 340 6751</p>
                 <p>+27 61 455 6192</p>
               </div>
             </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.4}>
             <div className="text-center transform hover:scale-110 transition-transform duration-300">
               <Mail className="w-8 h-8 text-fun-pink mx-auto mb-4 animate-float" />
               <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
               <div className="text-muted-foreground">
                 <p>terencewillemse@waumbe.org.za</p>
                 <p>asiphekhemtse@waumbe.org.za</p>
                 <p>info@waumbe.org.za</p>
               </div>
             </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.5}>
             <div className="text-center transform hover:scale-110 transition-transform duration-300">
               <MapPin className="w-8 h-8 text-fun-green mx-auto mb-4 animate-pulse-slow" />
               <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
               <p className="text-muted-foreground">14 Moses Mabhida Street, Fisantekraal, Cape Town, 7550</p>
             </div>
          </ScrollAnimation>
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-16">
            <div className="bg-gradient-fun p-8 md:p-12 rounded-2xl shadow-fun transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-float">
                Ready to Make a Difference?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join us in transforming communities through education, innovation, and empowerment. 
                Every contribution makes a lasting impact.
              </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <FunButton variant="warning" size="lg" asChild>
                   <a href="/donate">Donate Now</a>
                 </FunButton>
                 <FunButton variant="bounce" size="lg" asChild>
                   <a href="/programs/volunteer">Volunteer With Us</a>
                 </FunButton>
               </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default StayConnected;