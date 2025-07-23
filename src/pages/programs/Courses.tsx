import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Award } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Digital Literacy",
      description: "Learn essential computer skills and digital communication",
      duration: "8 weeks",
      participants: "20 max",
      level: "Beginner"
    },
    {
      title: "Financial Literacy",
      description: "Master budgeting, saving, and financial planning",
      duration: "6 weeks", 
      participants: "15 max",
      level: "All levels"
    },
    {
      title: "Life Skills Development",
      description: "Build confidence and essential life skills for success",
      duration: "12 weeks",
      participants: "25 max", 
      level: "All levels"
    },
    {
      title: "Basic Mathematics",
      description: "Strengthen math fundamentals for daily life and work",
      duration: "10 weeks",
      participants: "18 max",
      level: "Beginner"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering individuals through education and skill development programs designed for community growth.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Participants: {course.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span>Level: {course.level}</span>
                    </div>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join our community of learners and start your journey towards personal and professional growth.
            </p>
            <Button size="lg" className="mx-auto">
              View All Courses
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Courses;