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
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-fun-blue/10 to-fun-pink/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-fun-blue mx-auto mb-4 sm:mb-6 animate-bounce-gentle" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Stay Updated
          </h2>
          <p id="newsletter-description" className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter for the latest updates on our programs, 
            success stories, and opportunities to make a difference.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <form onSubmit={handleSubmit} className="w-full max-w-none mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-4xl mx-auto px-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 sm:h-14 text-base sm:text-lg px-4 sm:px-6"
                disabled={isLoading}
                aria-label="Email address for newsletter subscription"
                aria-describedby="newsletter-description"
              />
              <FunButton 
                type="submit" 
                variant="primary" 
                disabled={isLoading}
                aria-label={isLoading ? "Subscribing..." : "Subscribe to newsletter"}
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg whitespace-nowrap min-w-fit sm:min-w-[140px]"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    <span className="hidden sm:inline">Subscribing...</span>
                    <span className="sm:hidden">Loading...</span>
                  </>
                ) : (
                  "Subscribe"
                )}
              </FunButton>
            </div>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Newsletter;