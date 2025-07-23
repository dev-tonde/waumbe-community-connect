import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Award } from "lucide-react";

const AcademicDevelopment = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Providing access to quality educational resources and support for students in underserved communities."
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Connecting students with experienced mentors to guide their academic journey."
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Helping students set and achieve their academic and career goals."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Celebrating student achievements and academic excellence."
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Academic Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students through quality education and academic support programs designed to unlock their full potential.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Through our academic development programs, we've helped hundreds of students achieve their educational goals and build brighter futures for themselves and their communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Students Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Partner Schools</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default AcademicDevelopment;