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

  const programs = [
    {
      title: "End User Computing NQF 3",
      description: "Comprehensive computer skills training program",
      duration: "12 months",
      location: "Fisantekraal",
      qualification: "NQF Level 3"
    },
    {
      title: "Business Administration NQF 3", 
      description: "Essential business and administrative skills",
      duration: "12 months",
      location: "Fisantekraal",
      qualification: "NQF Level 3"
    },
    {
      title: "Technical Support & IT NQF 4",
      description: "Advanced technical support and IT skills",
      duration: "12 months", 
      location: "Fisantekraal",
      qualification: "NQF Level 4"
    }
  ];

  const benefits = [
    "MICT SETA accredited programs",
    "Workplace experience component",
    "Monthly stipend during training",
    "Job placement assistance",
    "Industry-recognized certification",
    "Career guidance and mentorship"
  ];

  const handleLearnershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you soon.",
      });
      setIsLearnershipModalOpen(false);
      setLearnershipFormData({ fullName: "", email: "", phone: "", background: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Inquiry Sent",
        description: "We'll contact you about partnership opportunities.",
      });
      setIsPartnerModalOpen(false);
      setPartnerFormData({ fullName: "", email: "", phone: "", teamSupport: "" });
    } catch (error) {
      toast({
        title: "Error", 
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setIsLearnershipModalOpen(true)}>Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Apply for a Learnership</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to apply for our learnership program.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleLearnershipSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={learnershipFormData.fullName}
                            onChange={(e) => setLearnershipFormData(prev => ({ ...prev, fullName: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={learnershipFormData.email}
                            onChange={(e) => setLearnershipFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={learnershipFormData.phone}
                            onChange={(e) => setLearnershipFormData(prev => ({ ...prev, phone: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="background">Tell us about your background</Label>
                          <Textarea
                            id="background"
                            value={learnershipFormData.background}
                            onChange={(e) => setLearnershipFormData(prev => ({ ...prev, background: e.target.value }))}
                            required
                          />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
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
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We also offer learnership solutions for companies to help upskill their employees.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" onClick={() => setIsPartnerModalOpen(true)}>
                  Partner with Us
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Partner with us</DialogTitle>
                  <DialogDescription>
                    Tell us how we can help upskill your team.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="partnerName">Full Name</Label>
                    <Input
                      id="partnerName"
                      value={partnerFormData.fullName}
                      onChange={(e) => setPartnerFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partnerEmail">Email Address</Label>
                    <Input
                      id="partnerEmail"
                      type="email"
                      value={partnerFormData.email}
                      onChange={(e) => setPartnerFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partnerPhone">Phone Number</Label>
                    <Input
                      id="partnerPhone"
                      value={partnerFormData.phone}
                      onChange={(e) => setPartnerFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="teamSupport">How can we support your team?</Label>
                    <Textarea
                      id="teamSupport"
                      value={partnerFormData.teamSupport}
                      onChange={(e) => setPartnerFormData(prev => ({ ...prev, teamSupport: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Learnerships;