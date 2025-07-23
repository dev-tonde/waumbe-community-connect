import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Shield } from "lucide-react";

const CoreSteeringGroup = () => {
  const members = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chairperson",
      bio: "Educational leader with 20+ years in community development"
    },
    {
      name: "Michael Chen",
      role: "Vice Chairperson", 
      bio: "Business strategist focused on youth empowerment"
    },
    {
      name: "Amara Okafor",
      role: "Secretary",
      bio: "Community organizer and social impact advocate"
    },
    {
      name: "James Williams",
      role: "Treasurer",
      bio: "Financial expert with non-profit management experience"
    }
  ];

  const responsibilities = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Developing long-term strategies and goals for organizational growth"
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Ensuring proper governance and accountability across all programs"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Driving innovation and new program development"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building stronger connections with the communities we serve"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Core Steering Group
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated leadership team guiding Waumbe's mission and ensuring impactful community development.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {members.map((member, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responsibilities.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Interested in contributing to our steering group? We welcome passionate individuals who share our vision for community empowerment.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default CoreSteeringGroup;