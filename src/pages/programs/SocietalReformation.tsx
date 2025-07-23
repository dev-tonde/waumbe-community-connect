import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Globe, Recycle, HandHeart } from "lucide-react";

const SocietalReformation = () => {
  const initiatives = [
    {
      icon: Heart,
      title: "Community Health",
      description: "Promoting health awareness and wellness programs in underserved communities."
    },
    {
      icon: Globe,
      title: "Environmental Action",
      description: "Leading sustainability initiatives and environmental conservation projects."
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Implementing recycling programs and waste reduction strategies."
    },
    {
      icon: HandHeart,
      title: "Social Justice",
      description: "Advocating for equality and social justice in our communities."
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Societal Reformation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving positive change in our communities through sustainable initiatives and social impact programs.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <initiative.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Community-Centered</h3>
                <p className="text-muted-foreground">
                  We work directly with communities to understand their unique needs and develop tailored solutions that create lasting impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Sustainable Solutions</h3>
                <p className="text-muted-foreground">
                  Our programs focus on long-term sustainability, ensuring that positive changes continue to benefit communities for years to come.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SocietalReformation;