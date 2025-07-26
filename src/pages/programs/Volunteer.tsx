import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Clock, Users, Star } from "lucide-react";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    motivation: ""
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Volunteer" }
  ];

  const benefits = [
    {
      title: "Make a Difference",
      description: "Contribute your skills and time to support our programs and services."
    },
    {
      title: "Gain Experience", 
      description: "Develop new skills and gain valuable experience in a non-profit organization."
    },
    {
      title: "Build Community",
      description: "Connect with like-minded individuals who are passionate about change."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest in volunteering with us.",
      });
      setFormData({ fullName: "", email: "", motivation: "" });
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

  return (
    <>
      <MiniHeroBanner 
        title="Volunteer"
        subtitle="Learn more about Waumbe's mission and values"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team of Volunteers</h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              At Waumbe, we rely on the support of volunteers to help us achieve our mission. By volunteering with us, you'll have the opportunity to make a real difference in our community.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Volunteer with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Sign Up to Volunteer</CardTitle>
              <CardDescription>
                Join our community of dedicated volunteers making a difference.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
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
                  <Label htmlFor="motivation">Why would you like to volunteer?</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Apply to Volunteer"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Volunteer;