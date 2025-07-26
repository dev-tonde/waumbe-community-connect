import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Clock, Users, Award } from "lucide-react";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Courses = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    interest: ""
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Courses" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest in our courses.",
      });
      setFormData({ fullName: "", email: "", phone: "", course: "", interest: "" });
      setIsModalOpen(false);
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
        title="Courses"
        subtitle="Discover our available courses and educational programs."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Courses</h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              We offer a range of courses designed to equip individuals with essential skills and knowledge.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ScrollAnimation delay={0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>End User Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our End User Computing course provides a comprehensive introduction to computer skills, covering:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Basic computer concepts</li>
                  <li>• Hardware and software components</li>
                  <li>• Operating systems</li>
                  <li>• Microsoft Office applications</li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Administration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our short courses are designed to provide focused training in specific areas, including:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Computer literacy</li>
                  <li>• Data management</li>
                  <li>• Microsoft Office applications</li>
                  <li>• Internet and email basics</li>
                  <li>• Typing and keyboard skills</li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Skills Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Skills Development Program is designed to help individuals acquire the skills and confidence needed to succeed in the job market.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Skills Development Program is designed to help individuals acquire the skills and confidence needed to succeed in the job market.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="text-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button size="lg">Apply for a Course</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Apply for a Course</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to apply for one of our courses.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full name</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="course">Select a course</Label>
                    <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="end-user-computing">End User Computing</SelectItem>
                        <SelectItem value="administration">Administration</SelectItem>
                        <SelectItem value="skills-development">Skills Development</SelectItem>
                        <SelectItem value="data-management">Data Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="interest">Why are you interested in this course</Label>
                    <Textarea
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => handleInputChange("interest", e.target.value)}
                      rows={3}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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

export default Courses;