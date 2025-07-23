import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import { BookOpen, Clock, Users, Award, Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Business Fundamentals",
      description: "Learn the basics of starting and running a successful business",
      duration: "6 weeks",
      level: "Beginner",
      price: "R500",
      rating: 4.8,
      modules: ["Business Planning", "Market Research", "Financial Basics", "Legal Requirements"]
    },
    {
      title: "Digital Marketing Mastery",
      description: "Master online marketing strategies to grow your business",
      duration: "8 weeks", 
      level: "Intermediate",
      price: "R750",
      rating: 4.9,
      modules: ["Social Media Marketing", "Content Creation", "Email Marketing", "Analytics"]
    },
    {
      title: "Financial Management",
      description: "Comprehensive financial planning and management for entrepreneurs",
      duration: "10 weeks",
      level: "Intermediate",
      price: "R850",
      rating: 4.7,
      modules: ["Budgeting", "Cash Flow", "Investment", "Tax Planning"]
    },
    {
      title: "Leadership & Management",
      description: "Develop leadership skills to build and manage effective teams",
      duration: "12 weeks",
      level: "Advanced",
      price: "R1000",
      rating: 4.9,
      modules: ["Team Building", "Communication", "Conflict Resolution", "Performance Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Entrepreneurship Courses
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your business ideas into reality with our comprehensive online courses designed for aspiring entrepreneurs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-primary/10 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-primary">{course.level}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      {course.title}
                    </CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-muted-foreground" />
                        <span>Price: {course.price}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Course Modules:</h4>
                      <ul className="space-y-1">
                        {course.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full">Enroll Now</Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of successful entrepreneurs who started their journey with our courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Browse All Courses</Button>
                <Button size="lg" variant="outline">Contact an Advisor</Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Courses;