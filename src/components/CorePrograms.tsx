import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { BookOpen, Lightbulb, Users2, Building, GraduationCap, Briefcase } from "lucide-react";
import programsImage from "@/assets/programs-image.jpg";

const CorePrograms = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Development",
      description: "Comprehensive educational support and tutoring programs to help students excel academically.",
      features: ["Mathematics & Science Tutoring", "Literacy Programs", "Exam Preparation"]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Modern technology training and innovation labs to prepare youth for the digital economy.",
      features: ["Coding Bootcamps", "Digital Literacy", "Tech Entrepreneurship"]
    },
    {
      icon: Users2,
      title: "Youth Empowerment",
      description: "Leadership development and life skills programs for young people in our community.",
      features: ["Leadership Training", "Life Skills", "Mentorship Programs"]
    },
    {
      icon: Building,
      title: "Societal Reformation",
      description: "Community-wide initiatives focused on positive social change and development.",
      features: ["Community Outreach", "Social Enterprise", "Civic Education"]
    },
    {
      icon: GraduationCap,
      title: "TSIBA Partnership",
      description: "Collaboration with TSIBA University to provide higher education opportunities.",
      features: ["University Preparation", "Scholarship Programs", "Career Guidance"]
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship",
      description: "Business development programs and startup incubation for aspiring entrepreneurs.",
      features: ["Business Planning", "Startup Incubation", "Market Access"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of programs designed to address the diverse needs 
              of our community and create pathways to success for all participants.
            </p>
          </div>
        </ScrollAnimation>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border h-full">
                <CardHeader>
                  <program.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Image & CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left">
            <div className="order-2 lg:order-1">
              <img
                src={programsImage}
                alt="Students learning in our programs"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right">
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Ready to Join Our Programs?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're looking to learn new skills, start a business, or make a difference 
                in your community, we have programs designed to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg">
                  Apply for Programs
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CorePrograms;