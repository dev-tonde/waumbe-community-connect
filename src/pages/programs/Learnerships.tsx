import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const Learnerships = () => {
  const programs = [
    {
      title: "Business Administration",
      description: "Learn essential business skills with hands-on workplace experience",
      duration: "18 months",
      location: "Cape Town Office",
      qualification: "NQF Level 4"
    },
    {
      title: "Information Technology",
      description: "Develop IT skills through practical training and real projects", 
      duration: "24 months",
      location: "Technology Center",
      qualification: "NQF Level 5"
    },
    {
      title: "Community Development",
      description: "Build skills in community engagement and social development",
      duration: "12 months",
      location: "Community Centers", 
      qualification: "NQF Level 4"
    },
    {
      title: "Project Management",
      description: "Master project planning and management methodologies",
      duration: "18 months",
      location: "Multiple Sites",
      qualification: "NQF Level 5"
    }
  ];

  const benefits = [
    "Earn while you learn with monthly stipends",
    "Gain recognized qualifications", 
    "Receive mentorship and support",
    "Access to job placement assistance",
    "Build professional networks",
    "Develop practical work experience"
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Learnerships
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combine learning with earning through our comprehensive learnership programs that bridge education and employment.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>Location: {program.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span>Qualification: {program.qualification}</span>
                    </div>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Program Benefits</h2>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Take the first step towards a brighter future with our learnership programs.
            </p>
            <Button size="lg">
              View Application Requirements
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Learnerships;