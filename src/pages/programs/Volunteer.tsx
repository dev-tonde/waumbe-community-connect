import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users, Star } from "lucide-react";

const Volunteer = () => {
  const opportunities = [
    {
      title: "Education Support",
      description: "Help with tutoring and educational activities for children",
      commitment: "4 hours/week",
      skills: "Teaching, Patience"
    },
    {
      title: "Community Events",
      description: "Assist in organizing and running community programs",
      commitment: "Flexible",
      skills: "Organization, Communication"
    },
    {
      title: "Mentorship",
      description: "Guide and support youth in their personal development",
      commitment: "2 hours/week",
      skills: "Life Experience, Empathy"
    },
    {
      title: "Administrative Support",
      description: "Help with office tasks and program coordination",
      commitment: "3 hours/week", 
      skills: "Computer Skills, Organization"
    }
  ];

  const benefits = [
    "Make a meaningful impact in your community",
    "Develop new skills and experience",
    "Meet like-minded individuals",
    "Gain valuable work experience",
    "Receive volunteer certificates",
    "Access to training workshops"
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Volunteer Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our passionate community of volunteers and help us create positive change in Fisantekraal and beyond.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Commitment: {opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-muted-foreground" />
                      <span>Skills: {opportunity.skills}</span>
                    </div>
                  </div>
                  <Button className="w-full">Apply to Volunteer</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Volunteer with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your time and skills can help transform lives and build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Sign Up to Volunteer
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Volunteer;