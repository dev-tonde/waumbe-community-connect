import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import { GraduationCap, Briefcase, Calendar, MapPin, DollarSign } from "lucide-react";

const Learnership = () => {
  const programs = [
    {
      title: "Startup Accelerator Program",
      description: "18-month intensive program for high-potential startups",
      duration: "18 months",
      location: "Cape Town Hub",
      stipend: "R3,500/month",
      qualification: "NQF Level 5",
      features: ["Mentorship", "Funding opportunities", "Office space", "Legal support"]
    },
    {
      title: "Digital Entrepreneur Track",
      description: "Focus on online businesses and digital platforms",
      duration: "12 months",
      location: "Online + Hub",
      stipend: "R2,800/month", 
      qualification: "NQF Level 4",
      features: ["Tech training", "Website development", "E-commerce setup", "Digital marketing"]
    },
    {
      title: "Social Enterprise Program",
      description: "Build businesses that create positive social impact",
      duration: "15 months",
      location: "Community Centers",
      stipend: "R3,200/month",
      qualification: "NQF Level 5",
      features: ["Impact measurement", "Grant writing", "Community engagement", "Sustainability planning"]
    },
    {
      title: "Retail & Service Business",
      description: "Traditional business models with modern strategies",
      duration: "12 months",
      location: "Business District",
      stipend: "R3,000/month",
      qualification: "NQF Level 4",
      features: ["Store management", "Customer service", "Supply chain", "Financial management"]
    }
  ];

  const requirements = [
    "South African citizen or permanent resident",
    "Age 18-35 years old",
    "Grade 12 qualification or equivalent",
    "Unemployed or earning less than R5,000/month",
    "Passionate about entrepreneurship",
    "Committed to completing the full program"
  ];

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Entrepreneurship Learnership
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Earn while you learn through our accredited learnership programs that combine theoretical knowledge with practical business experience.
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
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>Location: {program.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span>Stipend: {program.stipend}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        <span>Qualification: {program.qualification}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Program Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full">Apply Now</Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6">Application Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Start Your Entrepreneurial Journey</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Applications are now open for our next intake. Don't miss this opportunity to build your business while earning a qualification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Apply Today</Button>
                <Button size="lg" variant="outline">Download Brochure</Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Learnership;