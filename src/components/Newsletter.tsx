import { useState } from "react";
import { FunButton } from "@/components/ui/fun-button";
import { Input } from "@/components/ui/input";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await supabase.functions.invoke('send-newsletter-email', {
        body: { email }
      });
      
      toast({
        title: "Welcome to our community!",
        description: "Check your email for a welcome message and stay tuned for updates.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-fun-blue/10 to-fun-pink/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <Mail className="w-16 h-16 text-fun-blue mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p id="newsletter-description" className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
              disabled={isLoading}
              aria-label="Email address for newsletter subscription"
              aria-describedby="newsletter-description"
            />
            <FunButton 
              type="submit" 
              variant="primary" 
              disabled={isLoading}
              aria-label={isLoading ? "Subscribing..." : "Subscribe to newsletter"}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </FunButton>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Newsletter;