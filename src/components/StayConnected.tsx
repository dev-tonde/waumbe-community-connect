import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StayConnected = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates and impact stories.",
    });
    setEmail("");
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our community and stay updated on our latest programs, success stories, 
            and opportunities to make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Newsletter Signup */}
          <Card className="lg:col-span-1 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
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
                />
                <Button type="submit" variant="cta" className="w-full">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Get in Touch
              </CardTitle>
              <CardDescription>
                Have questions about our programs or want to get involved? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" required />
                  <Input type="email" placeholder="Email Address" required />
                </div>
                <Input placeholder="Subject" required />
                <Textarea
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-[120px]"
                />
                <Button type="submit" variant="cta" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-scale-in">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground">+27 (0) 21 123 4567</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: "100ms" }}>
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@waumbe.org.za</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: "200ms" }}>
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground">Fisantekraal, Cape Town</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in transforming communities through education, innovation, and empowerment. 
              Every contribution makes a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="donate" size="lg">
                Donate Now
              </Button>
              <Button variant="cta" size="lg">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;