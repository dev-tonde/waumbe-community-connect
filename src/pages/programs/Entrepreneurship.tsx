import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Entrepreneurship = () => {
  const programs = [
    {
      icon: Lightbulb,
      title: "Business Idea Development",
      description: "Turn your innovative ideas into viable business concepts",
      features: ["Ideation workshops", "Market research", "Concept validation"]
    },
    {
      icon: TrendingUp,
      title: "Growth Acceleration",
      description: "Scale your existing business with strategic guidance",
      features: ["Growth strategies", "Marketing support", "Performance metrics"]
    },
    {
      icon: DollarSign,
      title: "Funding Assistance",
      description: "Access funding opportunities and investor networks",
      features: ["Grant applications", "Investor matching", "Pitch preparation"]
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with experienced entrepreneurs and business leaders",
      features: ["One-on-one mentoring", "Peer networks", "Industry expertise"]
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Entrepreneurship Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering aspiring entrepreneurs with the tools, knowledge, and support needed to build successful businesses.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <program.icon className="w-5 h-5 text-primary" />
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join our entrepreneurship program and transform your business ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/entrepreneurship">
                <Button size="lg">
                  Visit Entrepreneurship Hub
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Apply Now
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Entrepreneurship;