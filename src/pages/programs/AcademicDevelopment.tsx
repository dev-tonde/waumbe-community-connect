import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Users, Target, Award } from "lucide-react";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AcademicDevelopment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    supportType: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Support request submitted!",
        description: "Thank you for your interest in supporting our academic program.",
      });
      setFormData({ name: "", email: "", supportType: "", message: "" });
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Academic Development" }
  ];

  return (
    <>
      <MiniHeroBanner 
        title="Academic Development & Innovation"
        subtitle="Tutoring, career guidance, and tertiary preparation to uplift learners in underserved communities."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Development & Innovation</h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Waumbe's Academic Development strategy addresses poor academic outcomes in Fisantekraal, Philippi, and Cofimvaba by providing consistent support for learners. Our approach is learner-centered, scalable, and aligned with South Africa's educational goals.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollAnimation delay={0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Tutoring Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our core intervention features a 1 tutor to 3 learner model that enables deeper focus, confidence building, and measurable academic improvement. With over 3,000 learners supported each year, the program is one of our most impactful efforts.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Career Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Guiding Grade 9 learners on subject selection aligned with future aspirations</li>
                  <li>• Hosting professionals and alumni from local universities to inspire learners</li>
                  <li>• Providing 100 learners with exposure to diverse career paths via the Cape Town Career Expo</li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Post-Matric & University Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Waumbe facilitates university applications, bursary guidance, and post-matric workshops. In recent years, institutions have begun visiting our communities directly, demonstrating the impact of our advocacy for higher education access.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Support Our Academic Program</CardTitle>
              <CardDescription>
                Help us continue empowering students through our academic development initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="supportType">Type of Support</Label>
                  <Select value={formData.supportType} onValueChange={(value) => handleInputChange("supportType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select support type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stationery">Stationery Donation</SelectItem>
                      <SelectItem value="school-fees">School Fees Sponsorship</SelectItem>
                      <SelectItem value="general">General Academic Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default AcademicDevelopment;