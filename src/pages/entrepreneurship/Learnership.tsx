import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import { useToast } from "@/hooks/use-toast";

const Learnership = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const { toast } = useToast();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Entrepreneurship", href: "/entrepreneurship" },
    { label: "Learnership" }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted successfully!",
      description: "We'll review your application and get back to you soon.",
    });
    setIsApplyModalOpen(false);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry sent successfully!",
      description: "We'll contact you to discuss partnership opportunities.",
    });
    setIsPartnerModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      <div className="pt-16">
        <MiniHeroBanner
          title="Learnerships"
          subtitle="Explore current learnership opportunities available through Waumbe."
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbItems} />

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Learnerships</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Learnership program is designed to provide individuals with the skills and knowledge required to succeed in their chosen careers. We offer a range of learnerships, facilitated by our accredited facilitator, to ensure high-quality training and support.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">We are accredited by MICT SETA for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">End User Computing</h4>
                    <p className="text-muted-foreground">NQF 3</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Business Administration</h4>
                    <p className="text-muted-foreground">NQF 3</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Technical Support & Information Technology</h4>
                    <p className="text-muted-foreground">NQF 4</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Partner with Us</CardTitle>
                  <CardDescription className="text-lg">
                    We also offer learnership solutions for companies to help upskill their employees. If you're interested in partnering with us, please contact us to discuss how we can support your training needs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg">Apply for a Learnership</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Apply for a Learnership</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div>
                        <Label htmlFor="background">Tell us about your background</Label>
                        <Textarea id="background" required />
                      </div>
                      <Button type="submit" className="w-full">Submit Application</Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Dialog open={isPartnerModalOpen} onOpenChange={setIsPartnerModalOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline">Partner with Us</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Partner with Us</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handlePartnerSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" required />
                      </div>
                      <div>
                        <Label htmlFor="contactEmail">Contact Email</Label>
                        <Input id="contactEmail" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="contactPhone">Phone Number</Label>
                        <Input id="contactPhone" type="tel" required />
                      </div>
                      <div>
                        <Label htmlFor="support">How can we support your team?</Label>
                        <Textarea id="support" required />
                      </div>
                      <Button type="submit" className="w-full">Send Inquiry</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Learnership;