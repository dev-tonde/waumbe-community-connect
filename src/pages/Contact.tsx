import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FunButton } from "@/components/ui/fun-button";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setMessage("");
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
                        <Input placeholder="Full Name" required className="border-fun-green/30 focus:border-fun-green" />
                        <Input placeholder="Email Address" type="email" required className="border-fun-green/30 focus:border-fun-green" />
                      </div>
                      <Input placeholder="Subject" required className="border-fun-green/30 focus:border-fun-green" />
                      <Textarea
                        placeholder="Your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="border-fun-green/30 focus:border-fun-green min-h-32"
                      />
                      <FunButton type="submit" variant="wiggle" size="lg" className="w-full">
                        Send Message
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
                            123 Community Center Street<br />
                            Fisantekraal, Cape Town<br />
                            7570, South Africa
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
                            +27 (0) 21 123 4567<br />
                            +27 (0) 82 987 6543
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
                            info@waumbe.org.za<br />
                            programs@waumbe.org.za
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