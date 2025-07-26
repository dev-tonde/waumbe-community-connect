import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Code, Palette, Mic } from "lucide-react";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";

const SkillsDevelopment = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Skills Development" }
  ];

  return (
    <>
      <MiniHeroBanner 
        title="Skills Development & Training"
        subtitle="Practical training that prepares youth for meaningful employment and entrepreneurship."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learnerships</h1>
            <p className="text-lg text-muted-foreground max-w-4xl mb-8">
              Waumbe facilitates MICT SETA-accredited Learnerships in:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-8">
              <li>• Information Technology: End User Computing</li>
              <li>• Business Administration</li>
              <li>• Technical Support (NQF Level 4)</li>
            </ul>
            <p className="text-muted-foreground">
              These one-year programs are geared toward unemployed youth and combine theoretical knowledge with workplace experience. Learnerships are implemented in partnership with accredited training providers and funders like The Learning Trust and MICT SETA.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Short Courses</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Waumbe runs modular, community-based courses designed to quickly equip young people with income-generating or job-ready skills. Our focus areas include:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Digital Literacy & Coding</li>
              <li>• Life Skills & Work Readiness</li>
              <li>• Basic Agriculture & Environmental Stewardship</li>
              <li>• Entrepreneurial Thinking & Idea Development</li>
            </ul>
            <p className="text-muted-foreground mt-6">
              These programs are regularly updated based on market trends, and can be delivered online, in person, or hybrid — allowing more youth from rural or underconnected communities to access training.
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