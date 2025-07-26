import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, Users, Heart, GraduationCap, Code } from "lucide-react";
import { Link } from "react-router-dom";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";

const CoreSteeringGroup = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Core Steering Group" }
  ];

  const programs = [
    {
      icon: BookOpen,
      title: "Academic Development",
      description: "Quality education and academic support for students",
      link: "/programs/academic-development"
    },
    {
      icon: Code,
      title: "Courses",
      description: "Discover our available courses and educational programs",
      link: "/programs/courses"
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      description: "Supporting business development and innovation",
      link: "/programs/entrepreneurship"
    },
    {
      icon: Heart,
      title: "Societal Reform",
      description: "Community transformation and social impact initiatives",
      link: "/programs/societal-reform"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers",
      link: "/programs/volunteer"
    },
    {
      icon: GraduationCap,
      title: "Learnerships",
      description: "Practical training and workplace experience",
      link: "/programs/learnerships"
    }
  ];

  return (
    <>
      <MiniHeroBanner 
        title="Core Steering Group"
        subtitle="Learn more about the leadership driving Waumbe's mission."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Core Steering Group</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Content coming soon. Stay tuned!
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Other Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <program.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Link to={program.link}>
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default CoreSteeringGroup;