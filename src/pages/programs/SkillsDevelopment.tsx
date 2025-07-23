import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Code, Palette, Mic } from "lucide-react";

const SkillsDevelopment = () => {
  const skillAreas = [
    {
      icon: Wrench,
      title: "Technical Skills", 
      description: "Hands-on training in practical technical abilities",
      skills: ["Electrical work", "Plumbing", "Carpentry", "Automotive repair"]
    },
    {
      icon: Code,
      title: "Digital Skills",
      description: "Modern technology and digital literacy training",
      skills: ["Web development", "Digital marketing", "Data analysis", "App development"]
    },
    {
      icon: Palette,
      title: "Creative Skills",
      description: "Artistic and creative expression workshops",
      skills: ["Graphic design", "Photography", "Arts & crafts", "Music production"]
    },
    {
      icon: Mic,
      title: "Soft Skills",
      description: "Essential interpersonal and communication abilities",
      skills: ["Public speaking", "Leadership", "Time management", "Teamwork"]
    }
  ];

  const programs = [
    {
      title: "Weekend Workshops",
      description: "Short-term intensive skill-building sessions",
      duration: "2-3 days"
    },
    {
      title: "Monthly Bootcamps", 
      description: "Comprehensive month-long training programs",
      duration: "4 weeks"
    },
    {
      title: "Certification Courses",
      description: "Accredited programs with industry-recognized certificates",
      duration: "3-6 months"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Skills Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build practical skills that open doors to new opportunities and enhance your career prospects.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillAreas.map((area, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <area.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-4">{program.duration}</div>
                    <Button className="w-full">Enroll Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Invest in Your Future</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Develop the skills that employers want and create new opportunities for yourself and your community.
            </p>
            <Button size="lg">
              Browse All Programs
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SkillsDevelopment;