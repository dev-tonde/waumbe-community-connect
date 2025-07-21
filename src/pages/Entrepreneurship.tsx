import { EntrepreneurshipNavbar } from '@/components/entrepreneurship/EntrepreneurshipNavbar';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Users, TrendingUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Entrepreneurship() {
  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      {/* Back to Main Site Button */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="outline" asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Main Site
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-waumbe/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entrepreneurship
              <span className="text-waumbe block mt-2">Hub</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering the next generation of entrepreneurs through education, 
              mentorship, and funding opportunities.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <Button size="lg" className="bg-waumbe hover:bg-waumbe/90">
              Start Your Journey
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Programs
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-waumbe mb-4" />
                  <CardTitle>Courses</CardTitle>
                  <CardDescription>
                    Comprehensive business and entrepreneurship courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn the fundamentals of business, from idea generation to scaling your venture.
                  </p>
                  <Button variant="outline" className="w-full">
                    Explore Courses
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <Users className="h-12 w-12 text-waumbe mb-4" />
                  <CardTitle>Learnerships</CardTitle>
                  <CardDescription>
                    Hands-on learning with real businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Gain practical experience through structured learning programs with local enterprises.
                  </p>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-waumbe mb-4" />
                  <CardTitle>Fundraising</CardTitle>
                  <CardDescription>
                    Support and funding for promising ventures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Connect with investors and access funding opportunities to grow your business.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-waumbe text-waumbe-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of aspiring entrepreneurs who have transformed their ideas into successful businesses.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-waumbe">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}