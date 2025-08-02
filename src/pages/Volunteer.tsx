import MiniHeroBanner from "@/components/MiniHeroBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Users, Heart, Globe, BookOpen, Mail, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const Volunteer = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Volunteer" },
  ];

  const volunteerOpportunities = [
    {
      title: "Educational Support",
      description: "Help with tutoring, homework assistance, and educational activities for youth in our community.",
      icon: BookOpen,
      commitment: "2-4 hours per week",
    },
    {
      title: "Community Outreach",
      description: "Assist with community events, workshops, and awareness campaigns.",
      icon: Users,
      commitment: "Flexible schedule",
    },
    {
      title: "Mentorship Programs",
      description: "Provide guidance and support to young people pursuing their goals.",
      icon: Heart,
      commitment: "1-2 hours per week",
    },
    {
      title: "Skills Development",
      description: "Share your professional skills through workshops and training sessions.",
      icon: Globe,
      commitment: "Project-based",
    },
  ];

  const requirements = [
    "18 years or older",
    "Passion for youth development",
    "Reliable and committed",
    "Good communication skills",
    "Background check required",
  ];

  return (
    <div className="pt-16">
      <MiniHeroBanner
        title="Become a Volunteer"
        subtitle="Join our mission to transform lives and empower communities in Fisantekraal."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Make a Difference</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your time and skills can help transform lives. Join our community of volunteers
              who are making a real impact in the lives of young people in Fisantekraal.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {volunteerOpportunities.map((opportunity, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <opportunity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">{opportunity.commitment}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Ready to make a difference? Contact us to learn more about volunteer
                  opportunities and how you can get involved.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>waumbedata@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+27 (0)21 976 4111</span>
                  </div>
                </div>

                <Button size="lg" className="w-full" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Together, we can create lasting change in the lives of young people and build
              stronger communities for everyone.
            </p>
            <Button size="lg" variant="cta" asChild>
              <a href="/contact">Start Volunteering Today</a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Volunteer;