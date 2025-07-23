import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mthembu",
      role: "Program Graduate",
      content: "Waumbe changed my life. Through their skills development program, I learned valuable computer skills and now work as an administrative assistant.",
      rating: 5,
      program: "Digital Literacy"
    },
    {
      name: "Michael Jacobs",
      role: "Entrepreneur",
      content: "The mentorship I received helped me start my own catering business. Today, I employ 5 people from my community.",
      rating: 5,
      program: "Entrepreneurship"
    },
    {
      name: "Thandiwe Ndaba",
      role: "Student",
      content: "The academic support program helped me pass my matric with distinction. I'm now studying at university thanks to Waumbe.",
      rating: 5,
      program: "Academic Development"
    },
    {
      name: "James Williams",
      role: "Volunteer",
      content: "Volunteering with Waumbe has been incredibly rewarding. Seeing the positive impact on young people's lives motivates me every day.",
      rating: 5,
      program: "Volunteer Program"
    }
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Community Partners" },
    { number: "10", label: "Years of Impact" }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Testimonials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the people whose lives have been transformed through our programs and initiatives.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Quote className="w-5 h-5 text-primary" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{testimonial.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.program}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Have you been impacted by our programs? We'd love to hear from you and share your success story.
            </p>
            <Button size="lg">
              Submit Your Testimonial
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Testimonials;