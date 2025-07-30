import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+27 (0) 21 555 0123",
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      details: "entrepreneurs@waumbe.org.za",
      description: "Get a response within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Innovation Street, Fisantekraal, Cape Town",
      description: "Visit our entrepreneurship hub",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8AM - 5PM",
      description: "Saturday: 9AM - 1PM",
    },
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Enquiries",
      description: "Questions about our programs and services",
    },
    {
      icon: Users,
      title: "Program Application",
      description: "Need help with course or learnership applications",
    },
    {
      icon: Phone,
      title: "Mentorship",
      description: "Connect with our business mentors",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to start your entrepreneurial journey? Get in touch with
                our team for guidance and support.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ScrollAnimation>
              <Card className="p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl mb-2">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input type="tel" placeholder="+27 123 456 7890" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input placeholder="What's this about?" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your business idea or what you need help with..."
                        rows={6}
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <div className="space-y-8">
              <ScrollAnimation>
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-foreground">{info.details}</p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div>
                  <h2 className="text-2xl font-bold mb-6">How Can We Help?</h2>
                  <div className="space-y-4">
                    {supportOptions.map((option, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3">
                            <option.icon className="w-6 h-6 text-primary" />
                            <div>
                              <h3 className="font-semibold">{option.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {option.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Visit Our Hub</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Come visit our entrepreneurship hub and see our facilities, meet
                our team, and connect with other entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule a Visit</Button>
                <Button size="lg" variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Contact;
