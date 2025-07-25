import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import teamImage from "@/assets/team-image.jpg";

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      department: "Leadership",
      bio: "Sarah brings over 15 years of experience in community development and has been instrumental in expanding our educational programs across Cape Town.",
      image: teamImage
    },
    {
      name: "Michael Botha",
      role: "Program Manager",
      department: "Education",
      bio: "Michael oversees our academic development initiatives and has helped over 200 students achieve their educational goals through innovative teaching methods.",
      image: teamImage
    },
    {
      name: "Nomsa Mthembu",
      role: "Community Outreach Coordinator",
      department: "Outreach",
      bio: "Nomsa is our bridge to the community, ensuring our programs meet the real needs of Fisantekraal residents through grassroots engagement.",
      image: teamImage
    },
    {
      name: "David Williams",
      role: "Finance Director",
      department: "Administration",
      bio: "David ensures transparency and accountability in all our financial operations, maintaining the trust our donors and community place in us.",
      image: teamImage
    },
    {
      name: "Fatima Hassan",
      role: "Youth Development Specialist",
      department: "Youth Programs",
      bio: "Fatima designs and implements programs specifically for youth empowerment, focusing on skills development and entrepreneurship training.",
      image: teamImage
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of professionals and community leaders work tirelessly 
              to create lasting positive change in our communities.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-1">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card 
                      className="h-80 cursor-pointer relative overflow-hidden"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardContent className="p-0 h-full relative">
                        <AnimatePresence mode="wait">
                          {hoveredCard !== index ? (
                            <motion.div
                              key={`front-${index}`}
                              initial={{ rotateY: 0 }}
                              animate={{ rotateY: 0 }}
                              exit={{ rotateY: -90 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 backface-hidden"
                            >
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-fun-yellow font-medium">{member.role}</p>
                                <p className="text-white/80 text-sm">{member.department}</p>
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key={`back-${index}`}
                              initial={{ rotateY: 90 }}
                              animate={{ rotateY: 0 }}
                              exit={{ rotateY: 90 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 backface-hidden bg-gradient-fun p-6 flex flex-col justify-center text-white"
                            >
                              <h3 className="text-xl font-semibold mb-4">{member.name}</h3>
                              <p className="text-sm leading-relaxed">{member.bio}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TeamSection;