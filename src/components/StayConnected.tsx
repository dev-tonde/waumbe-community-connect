import { useState } from "react";
import { FunButton } from "@/components/ui/fun-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StayConnected = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const base = import.meta.env.VITE_SUPABASE_URL as string;
      const apikey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

      const res = await fetch(`${base}/functions/v1/send-form-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey,
        },
        body: JSON.stringify({
          formType: "newsletter",
          formData: { email },
          recipientEmail: "waumbedata@gmail.com",
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and impact stories.",
      });
      setEmail("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
<<<<<<< HEAD
    <section id="contact" className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="w-full px-4 sm:px-6 lg:px-8">
=======
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> ee625ae35d2e9f2e7f9829c8ec6f4ff2557f5b42
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-float">
              Stay Connected
            </h2>
<<<<<<< HEAD
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Join our community and stay updated on our latest programs, success stories, 
              and opportunities to make a difference.
=======
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our community and stay updated on our latest programs,
              success stories, and opportunities to make a difference.
>>>>>>> ee625ae35d2e9f2e7f9829c8ec6f4ff2557f5b42
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Newsletter Signup */}
          <ScrollAnimation delay={0.1}>
            <Card className="lg:col-span-1 bg-gradient-to-br from-fun-pink/10 to-fun-blue/10 hover:scale-105 transition-transform duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Mail className="w-5 h-5 text-fun-pink animate-bounce-gentle" aria-hidden="true" />
                  Newsletter
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Get monthly updates on our programs and community impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={handleNewsletterSubmit} 
                  className="space-y-4"
                  aria-label="Newsletter subscription form"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-fun-pink/30 focus:border-fun-pink text-sm sm:text-base"
                    aria-label="Email address for newsletter"
                    aria-required="true"
                  />
                  <FunButton 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </FunButton>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-7xl mx-auto">
          <ScrollAnimation delay={0.3}>
<<<<<<< HEAD
             <div className="text-center transform hover:scale-110 transition-transform duration-300 p-4">
               <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-fun-blue mx-auto mb-4 animate-bounce-gentle" aria-hidden="true" />
               <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Call Us</h3>
               <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                 <p><a href="tel:+27753406751" className="hover:text-fun-blue transition-colors">+27 75 340 6751</a></p>
                 <p><a href="tel:+27614556192" className="hover:text-fun-blue transition-colors">+27 61 455 6192</a></p>
               </div>
             </div>
=======
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-fun-blue mx-auto mb-4 animate-bounce-gentle" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Call Us
              </h3>
              <div className="text-muted-foreground">
                <p>+27 75 340 6751</p>
                <p>+27 61 455 6192</p>
              </div>
            </div>
>>>>>>> ee625ae35d2e9f2e7f9829c8ec6f4ff2557f5b42
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
<<<<<<< HEAD
             <div className="text-center transform hover:scale-110 transition-transform duration-300 p-4">
               <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-fun-pink mx-auto mb-4 animate-float" aria-hidden="true" />
               <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Email</h3>
               <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                 <p><a href="mailto:terencewillemse@waumbe.org.za" className="hover:text-fun-pink transition-colors break-all">terencewillemse@waumbe.org.za</a></p>
                 <p><a href="mailto:asiphekhemtse@waumbe.org.za" className="hover:text-fun-pink transition-colors break-all">asiphekhemtse@waumbe.org.za</a></p>
                 <p><a href="mailto:info@waumbe.org.za" className="hover:text-fun-pink transition-colors break-all">info@waumbe.org.za</a></p>
               </div>
             </div>
=======
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-fun-pink mx-auto mb-4 animate-float" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <div className="text-muted-foreground">
                <p>terencewillemse@waumbe.org.za</p>
                <p>asiphekhemtse@waumbe.org.za</p>
                <p>info@waumbe.org.za</p>
              </div>
            </div>
>>>>>>> ee625ae35d2e9f2e7f9829c8ec6f4ff2557f5b42
          </ScrollAnimation>

          <ScrollAnimation delay={0.5}>
<<<<<<< HEAD
             <div className="text-center transform hover:scale-110 transition-transform duration-300 p-4 sm:col-span-2 md:col-span-1">
               <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-fun-green mx-auto mb-4 animate-pulse-slow" aria-hidden="true" />
               <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Visit Us</h3>
               <p className="text-sm sm:text-base text-muted-foreground max-w-xs mx-auto">
                 <a 
                   href="https://maps.google.com/?q=14+Moses+Mabhida+Street,+Fisantekraal,+Cape+Town,+7550" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-fun-green transition-colors"
                   aria-label="View our location on Google Maps"
                 >
                   14 Moses Mabhida Street, Fisantekraal, Cape Town, 7550
                 </a>
               </p>
             </div>
=======
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-fun-green mx-auto mb-4 animate-pulse-slow" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Visit Us
              </h3>
              <p className="text-muted-foreground">
                14 Moses Mabhida Street, Fisantekraal, Cape Town, 7550
              </p>
            </div>
>>>>>>> ee625ae35d2e9f2e7f9829c8ec6f4ff2557f5b42
          </ScrollAnimation>
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-12 sm:mt-16 px-4">
            <div className="bg-gradient-fun p-6 sm:p-8 md:p-12 rounded-2xl shadow-fun transform hover:scale-105 transition-transform duration-300 max-w-5xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 animate-float">
                Ready to Make a Difference?
              </h3>
<<<<<<< HEAD
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join us in transforming communities through education, innovation, and empowerment. 
                Every contribution makes a lasting impact.
              </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <FunButton variant="warning" size="lg" asChild>
                   <a href="/donate" className="text-base sm:text-lg">Donate</a>
                 </FunButton>
                 <FunButton variant="bounce" size="lg" asChild>
                   <a href="/programs/volunteer" className="text-base sm:text-lg">Volunteer With Us</a>
                 </FunButton>
               </div>
=======
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join us in transforming communities through education,
                innovation, and empowerment. Every contribution makes a lasting
                impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FunButton variant="warning" size="lg" asChild>
                  <a href="/donate">Donate</a>
                </FunButton>
                <FunButton variant="bounce" size="lg" asChild>
                  <a href="/programs/volunteer">Volunteer With Us</a>
                </FunButton>
              </div>
>>>>>>> ee625ae35d2e9f2e7f9829c8ec6f4ff2557f5b42
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default StayConnected;
