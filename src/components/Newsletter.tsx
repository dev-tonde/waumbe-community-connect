import { useState } from "react";
import { FunButton } from "@/components/ui/fun-button";
import { Input } from "@/components/ui/input";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates and impact stories.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-fun-blue/10 to-fun-pink/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <Mail className="w-16 h-16 text-fun-blue mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on our programs, 
            success stories, and opportunities to make a difference.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <FunButton type="submit" variant="primary">
              Subscribe
            </FunButton>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Newsletter;