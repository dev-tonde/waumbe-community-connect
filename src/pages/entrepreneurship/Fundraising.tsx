import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import { DollarSign, TrendingUp, Users, Award, Target, Lightbulb } from "lucide-react";

const Fundraising = () => {
  const fundingOptions = [
    {
      icon: DollarSign,
      title: "Seed Funding",
      amount: "R10,000 - R50,000",
      description: "Early-stage funding for business validation and initial development",
      requirements: ["Business plan", "Market research", "Financial projections"],
      timeframe: "2-4 weeks"
    },
    {
      icon: TrendingUp,
      title: "Growth Capital",
      amount: "R50,000 - R250,000",
      description: "Expansion funding for proven businesses ready to scale",
      requirements: ["12+ months trading", "Revenue growth", "Expansion plan"],
      timeframe: "4-8 weeks"
    },
    {
      icon: Users,
      title: "Community Grants",
      amount: "R5,000 - R25,000",
      description: "Funding for businesses that create positive community impact",
      requirements: ["Community focus", "Social impact plan", "Local partnerships"],
      timeframe: "3-6 weeks"
    },
    {
      icon: Award,
      title: "Innovation Fund",
      amount: "R25,000 - R100,000",
      description: "Support for tech startups and innovative business models",
      requirements: ["Innovative solution", "Tech component", "Scalability potential"],
      timeframe: "6-10 weeks"
    }
  ];

  const successStories = [
    {
      name: "TechSolutions SA",
      founder: "Lerato Mokoena",
      funding: "R85,000",
      description: "Mobile app development company now employing 12 people",
      growth: "300% revenue increase"
    },
    {
      name: "Green Gardens Co.",
      founder: "Michael Thompson",
      funding: "R35,000",
      description: "Sustainable urban farming initiative serving 5 communities",
      growth: "150% customer growth"
    },
    {
      name: "EduTech Kids",
      founder: "Sarah Williams",
      funding: "R65,000",
      description: "Educational technology platform used by 50+ schools",
      growth: "200% user growth"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with your business details"
    },
    {
      step: "2", 
      title: "Initial Review",
      description: "Our team reviews your application and provides feedback"
    },
    {
      step: "3",
      title: "Pitch Presentation",
      description: "Present your business plan to our funding committee"
    },
    {
      step: "4",
      title: "Due Diligence",
      description: "Detailed review of financials and business model"
    },
    {
      step: "5",
      title: "Funding Decision",
      description: "Final decision and funding disbursement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Fundraising Support
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access funding opportunities and investment support to grow your business and create lasting impact in your community.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {fundingOptions.map((option, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <option.icon className="w-8 h-8 text-primary" />
                      <div className="bg-primary/10 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-primary">{option.amount}</span>
                      </div>
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {option.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground">
                        <strong>Timeline:</strong> {option.timeframe}
                      </p>
                    </div>
                    <Button className="w-full">Apply for Funding</Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {applicationProcess.map((process, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {process.step}
                      </div>
                      <CardTitle className="text-lg">{process.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{process.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>Founded by {story.founder}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="text-2xl font-bold text-primary">{story.funding}</div>
                        <p className="text-sm">{story.description}</p>
                        <div className="bg-green-100 px-3 py-1 rounded-full inline-block">
                          <span className="text-sm font-semibold text-green-800">{story.growth}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Fund Your Dream?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our network of successful entrepreneurs who turned their ideas into thriving businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Application</Button>
                <Button size="lg" variant="outline">Schedule Consultation</Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;