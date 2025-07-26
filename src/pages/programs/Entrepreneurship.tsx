import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Entrepreneurship = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEntrepreneurshipModalOpen, setIsEntrepreneurshipModalOpen] = useState(false);
  const [isInternetCafeModalOpen, setIsInternetCafeModalOpen] = useState(false);
  const [entrepreneurshipFormData, setEntrepreneurshipFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessSupport: ""
  });
  const [internetCafeFormData, setInternetCafeFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceNeeds: ""
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Entrepreneurship" }
  ];

  const handleEntrepreneurshipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Request submitted!",
        description: "Thank you for your interest in our entrepreneurship support.",
      });
      setEntrepreneurshipFormData({ fullName: "", email: "", phone: "", businessSupport: "" });
      setIsEntrepreneurshipModalOpen(false);
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

  const handleInternetCafeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Request submitted!",
        description: "Thank you for your interest in our internet cafe services.",
      });
      setInternetCafeFormData({ fullName: "", email: "", phone: "", serviceNeeds: "" });
      setIsInternetCafeModalOpen(false);
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

  const handleEntrepreneurshipInputChange = (field: string, value: string) => {
    setEntrepreneurshipFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInternetCafeInputChange = (field: string, value: string) => {
    setInternetCafeFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <MiniHeroBanner 
        title="Entrepreneurship"
        subtitle="Discover some of our entrepreneurship programs"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entrepreneurship</h1>
          </div>
        </ScrollAnimation>

        <Tabs defaultValue="entrepreneurship" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="entrepreneurship">Entrepreneurship</TabsTrigger>
            <TabsTrigger value="internet-cafe">Internet Cafe</TabsTrigger>
          </TabsList>
          
          <TabsContent value="entrepreneurship">
            <ScrollAnimation>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground">
                  Our Entrepreneurial Development Program is designed to foster economic growth and empowerment in our community. We achieve this through a multi-faceted approach:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Generation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Internet Café operations</li>
                        <li>• Hosting revenue-generating events</li>
                        <li>• Fundraising initiatives</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Business Support Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Expert advice and guidance for small businesses</li>
                        <li>• Assistance with marketing materials (flyers, brochures, etc.)</li>
                        <li>• Website and social media setup support</li>
                        <li>• Access to relevant conferences and workshops</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Capacity Building</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Learnerships and courses to enhance skills and knowledge</li>
                        <li>• Funding opportunities for entrepreneurial ventures</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Dialog open={isEntrepreneurshipModalOpen} onOpenChange={setIsEntrepreneurshipModalOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg">Request Entrepreneurship Assistance</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Request Entrepreneurship Assistance</DialogTitle>
                        <DialogDescription>
                          Tell us how we can support your business venture.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleEntrepreneurshipSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="entrepreneurship-fullName">Full name</Label>
                          <Input
                            id="entrepreneurship-fullName"
                            value={entrepreneurshipFormData.fullName}
                            onChange={(e) => handleEntrepreneurshipInputChange("fullName", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="entrepreneurship-email">Email Address</Label>
                          <Input
                            id="entrepreneurship-email"
                            type="email"
                            value={entrepreneurshipFormData.email}
                            onChange={(e) => handleEntrepreneurshipInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="entrepreneurship-phone">Phone Number</Label>
                          <Input
                            id="entrepreneurship-phone"
                            value={entrepreneurshipFormData.phone}
                            onChange={(e) => handleEntrepreneurshipInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="entrepreneurship-businessSupport">Tell us how we can support your business</Label>
                          <Textarea
                            id="entrepreneurship-businessSupport"
                            value={entrepreneurshipFormData.businessSupport}
                            onChange={(e) => handleEntrepreneurshipInputChange("businessSupport", e.target.value)}
                            rows={3}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </ScrollAnimation>
          </TabsContent>
          
          <TabsContent value="internet-cafe">
            <ScrollAnimation>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground">
                  Our Internet Café provides affordable digital access and services to the local community, including printing, scanning, basic training, and connectivity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Services Available</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Internet access & PC use</li>
                        <li>• Printing and scanning services</li>
                        <li>• Assistance with CV creation & job applications</li>
                        <li>• Introductory computer literacy support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Dialog open={isInternetCafeModalOpen} onOpenChange={setIsInternetCafeModalOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg">Request Internet Cafe Services</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Request Internet Cafe Services</DialogTitle>
                        <DialogDescription>
                          Tell us what services you need from our internet cafe.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleInternetCafeSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="internetcafe-fullName">Full name</Label>
                          <Input
                            id="internetcafe-fullName"
                            value={internetCafeFormData.fullName}
                            onChange={(e) => handleInternetCafeInputChange("fullName", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="internetcafe-email">Email Address</Label>
                          <Input
                            id="internetcafe-email"
                            type="email"
                            value={internetCafeFormData.email}
                            onChange={(e) => handleInternetCafeInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="internetcafe-phone">Phone Number</Label>
                          <Input
                            id="internetcafe-phone"
                            value={internetCafeFormData.phone}
                            onChange={(e) => handleInternetCafeInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="internetcafe-serviceNeeds">Tell us how we can support your needs</Label>
                          <Textarea
                            id="internetcafe-serviceNeeds"
                            value={internetCafeFormData.serviceNeeds}
                            onChange={(e) => handleInternetCafeInputChange("serviceNeeds", e.target.value)}
                            rows={3}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </ScrollAnimation>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Entrepreneurship;