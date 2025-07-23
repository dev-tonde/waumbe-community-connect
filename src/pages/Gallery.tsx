import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Community Workshop",
      date: "March 2024",
      location: "Fisantekraal Community Center",
      participants: "45 participants",
      description: "Skills development workshop focusing on digital literacy",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Youth Graduation Ceremony",
      date: "February 2024",
      location: "Waumbe Training Center",
      participants: "30 graduates",
      description: "Celebrating successful completion of our entrepreneurship program",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Community Garden Project",
      date: "January 2024",
      location: "Local School Grounds",
      participants: "60 volunteers",
      description: "Building sustainable food gardens with community members",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Annual Fundraising Gala",
      date: "December 2023",
      location: "Cape Town Convention Centre",
      participants: "200 attendees",
      description: "Our biggest fundraising event of the year",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Back to School Drive",
      date: "January 2024",
      location: "Multiple Schools",
      participants: "500 students",
      description: "Providing school supplies and uniforms to students in need",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Mentorship Program Launch",
      date: "November 2023",
      location: "Community Hall",
      participants: "80 mentors & mentees",
      description: "Connecting youth with experienced professionals",
      image: "/api/placeholder/400/300"
    }
  ];

  const categories = [
    "All Events",
    "Workshops", 
    "Graduations",
    "Community Projects",
    "Fundraising",
    "Educational Programs"
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore moments that capture our community's journey of growth, learning, and transformation.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="hover:scale-105 transition-transform"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <ScrollAnimation key={item.id} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Image Placeholder</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{item.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center">
            <Button size="lg" className="hover:scale-105 transition-transform">
              Load More Photos
            </Button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Moments</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Been part of a Waumbe event? Share your photos and help us showcase our community's amazing journey.
            </p>
            <Button size="lg">
              Submit Photos
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Gallery;