
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { FunButton } from '@/components/ui/fun-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, BookOpen, Users, TrendingUp, DollarSign, Lightbulb, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import TeamSection from '@/components/TeamSection';
import PartnersSection from '@/components/PartnersSection';
import EntrepreneurshipFooter from '@/components/entrepreneurship/EntrepreneurshipFooter';
import { FloatingMainSiteButton } from '@/components/FloatingMainSiteButton';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import heroImage from "@/assets/hero-image.jpg";

export default function Entrepreneurship() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates on business training, events, and funding.",
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Entrepreneurship and innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Entrepreneurship
                <span className="block text-fun-yellow animate-pulse-slow">Hub</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Empowering the next generation of entrepreneurs through education, 
                mentorship, and funding opportunities.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <FunButton variant="rainbow" size="lg" asChild>
                  <Link to="/entrepreneurship/courses">Start Your Journey</Link>
                </FunButton>
                <FunButton 
                  variant="bounce" 
                  size="lg"
                  asChild
                >
                  <a href="/volunteer">Become a Volunteer</a>
                </FunButton>
              </div>
            </ScrollAnimation>

            {/* Stats */}
            <ScrollAnimation delay={0.6}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-fun-yellow mb-2 animate-bounce-gentle">150+</div>
                  <div className="text-white/80">Businesses Funded</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-fun-pink mb-2 animate-float">500+</div>
                  <div className="text-white/80">Jobs Created</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-fun-green mb-2 animate-pulse-slow">R2.5M</div>
                  <div className="text-white/80">Economic Impact</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-6">What We Do</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our Entrepreneurship Programme fosters economic growth through:
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Revenue Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Internet Café operations</li>
                    <li>• Hosting events</li>
                    <li>• Fundraising initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Business Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Small business guidance</li>
                    <li>• Marketing assistance</li>
                    <li>• Social media setup</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <GraduationCap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Capacity Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Learnerships & courses</li>
                    <li>• Funding opportunities</li>
                    <li>• Mentorship</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Programs Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Courses</CardTitle>
                  <CardDescription>
                    Practical business education & training.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/entrepreneurship/courses">
                      Learn more about courses
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Learnerships</CardTitle>
                  <CardDescription>
                    Work-based training programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/entrepreneurship/learnership">
                      Learn more about learnerships
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Fundraising</CardTitle>
                  <CardDescription>
                    Support our entrepreneurial initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/entrepreneurship/fundraising">
                      Learn more about fundraising
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe for updates on business training, events, and funding
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Meet our Team Section */}
      <TeamSection />

      {/* Our Partners Section */}
      <PartnersSection />
      
      {/* Entrepreneurship Footer */}
      <EntrepreneurshipFooter />
    </div>
  );
}