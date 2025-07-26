import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Learnerships = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLearnershipModalOpen, setIsLearnershipModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [learnershipFormData, setLearnershipFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    background: ""
  });
  const [partnerFormData, setPartnerFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    teamSupport: ""
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Learnerships" }
  ];

  return (
    <>
      <MiniHeroBanner 
        title="Learnerships"
        subtitle="Explore current learnership opportunities available through Waumbe."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learnerships</h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Our Learnership is designed to provide individuals with the skills and knowledge required to succeed in their chosen careers...
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">We are accredited by MICT SETA for the following:</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>• End User Computing NQF 3</li>
                <li>• Business Administration NQF 3</li>
                <li>• Technical Support & Information Technology NQF 4</li>
              </ul>
            </div>
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
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>Location: {program.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span>Qualification: {program.qualification}</span>
                    </div>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Take the first step towards a brighter future with our learnership programs.
            </p>
            <Button size="lg">
              View Application Requirements
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Learnerships;