import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CourseApplicationForm from "@/components/forms/CourseApplicationForm";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import EntrepreneurshipFooter from "@/components/entrepreneurship/EntrepreneurshipFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import { useToast } from "@/hooks/use-toast";

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Entrepreneurship", href: "/entrepreneurship" },
    { label: "Courses" }
  ];

  const courses = [
    {
      title: "End User Computing",
      description: "Our End User Computing course provides a comprehensive introduction to computer skills, covering:",
      features: [
        "Basic computer concepts",
        "Hardware and software components", 
        "Operating systems",
        "Microsoft Office applications"
      ]
    },
    {
      title: "Administration",
      description: "Our short courses are designed to provide focused training in specific areas, including:",
      features: [
        "Computer literacy",
        "Data management",
        "Microsoft Office applications",
        "Internet and email basics",
        "Typing and keyboard skills"
      ]
    },
    {
      title: "Skills Development",
      description: "Our Skills Development Program is designed to help individuals acquire the skills and confidence needed to succeed in the job market."
    },
    {
      title: "Data Management",
      description: "Our Skills Development Program is designed to help individuals acquire the skills and confidence needed to succeed in the job market."
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted successfully!",
      description: "We'll review your application and get back to you soon.",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      <div className="pt-16">
        <MiniHeroBanner
          title="Courses"
          subtitle="Discover our available courses and educational programs."
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbItems} />

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Courses</h2>
              <p className="text-lg text-muted-foreground">
                We offer a range of courses designed to equip individuals with essential skills and knowledge.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-12 mb-16">
            {courses.map((course, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="p-8 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{course.title}</CardTitle>
                    <CardDescription className="text-lg">{course.description}</CardDescription>
                  </CardHeader>
                  {course.features && (
                    <CardContent>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Apply for a Course</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Course Application</DialogTitle>
                  </DialogHeader>
                  <CourseApplicationForm />
                </DialogContent>
              </Dialog>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <EntrepreneurshipFooter />
    </div>
  );
};

export default Courses;
