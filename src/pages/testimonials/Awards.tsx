import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Medal, Star } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Community Impact Award 2023",
      organization: "Cape Town Municipality",
      description: "Recognized for outstanding contribution to community development and youth empowerment",
      year: "2023"
    },
    {
      icon: Medal,
      title: "Excellence in Education Award",
      organization: "Western Cape Education Department",
      description: "Honored for innovative educational programs and academic support initiatives",
      year: "2022"
    },
    {
      icon: Star,
      title: "Non-Profit Organization of the Year",
      organization: "South African NGO Network",
      description: "Awarded for exceptional leadership in non-profit sector and community transformation",
      year: "2022"
    },
    {
      icon: Award,
      title: "Youth Development Excellence",
      organization: "National Youth Development Agency",
      description: "Recognized for outstanding youth empowerment and skills development programs",
      year: "2021"
    }
  ];

  const recognitions = [
    "Featured in Cape Town Tourism Community Development Showcase",
    "Partner organization with Western Cape Government",
    "Accredited training provider for skills development",
    "Member of South African NGO Coalition",
    "Certified B-BBEE Level 1 contributor"
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Awards & Recognition
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and community impact has been recognized by various organizations and institutions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <award.icon className="w-8 h-8 text-primary" />
                    <div className="bg-primary/10 px-2 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary">{award.year}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {award.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Additional Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recognitions.map((recognition, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{recognition}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Continuing Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              These awards motivate us to continue our work in transforming communities and empowering individuals across Cape Town.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground">Awards Received</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Awards;