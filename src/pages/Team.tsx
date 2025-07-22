import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      department: "Leadership",
      bio: "With over 15 years of experience in community development, Dr. Johnson leads our mission to empower underprivileged communities through innovative education programs.",
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Williams",
      role: "Program Manager",
      department: "Youth Development",
      bio: "Marcus specializes in creating engaging youth programs that combine technology education with life skills development, having worked with over 500 young people.",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Chen",
      role: "Education Coordinator",
      department: "Academic Support",
      bio: "Lisa develops our academic support curriculum and manages partnerships with local schools, ensuring quality education reaches every child in our community.",
      image: "/placeholder.svg"
    },
    {
      name: "David Patel",
      role: "Innovation Lead",
      department: "Technology",
      bio: "David drives our technology initiatives, creating coding bootcamps and digital literacy programs that prepare young people for the digital economy.",
      image: "/placeholder.svg"
    },
    {
      name: "Angela Thompson",
      role: "Community Outreach",
      department: "Partnerships",
      bio: "Angela builds and maintains relationships with community stakeholders, ensuring our programs reach those who need them most effectively.",
      image: "/placeholder.svg"
    },
    {
      name: "James Rodriguez",
      role: "Financial Coordinator",
      department: "Operations",
      bio: "James ensures transparent financial management and helps develop sustainable funding strategies for long-term program success.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimation>
        <section className="py-16 bg-gradient-to-br from-fun-purple/5 to-fun-pink/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-fun-purple to-fun-pink bg-clip-text text-transparent">
                Meet Our Team
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our passionate team of educators, innovators, and community leaders working together to create lasting change in our communities.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {teamMembers.map((member, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        className="h-full"
                        onHoverStart={() => setHoveredCard(index)}
                        onHoverEnd={() => setHoveredCard(null)}
                        style={{ perspective: "1000px" }}
                      >
                        <motion.div
                          className="relative w-full h-96 preserve-3d cursor-pointer"
                          animate={{
                            rotateY: hoveredCard === index ? 180 : 0
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          {/* Front of card */}
                          <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-fun-blue/10 to-fun-green/10 border-2 border-fun-blue/20 hover:border-fun-purple/40 transition-colors">
                            <CardContent className="p-6 flex flex-col items-center text-center h-full">
                              <div className="w-24 h-24 bg-gradient-to-br from-fun-purple to-fun-pink rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                              <p className="text-fun-purple font-semibold mb-1">{member.role}</p>
                              <p className="text-muted-foreground text-sm mb-4">{member.department}</p>
                              <div className="mt-auto">
                                <p className="text-sm text-muted-foreground italic">Hover to learn more</p>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Back of card */}
                          <Card className="absolute inset-0 w-full h-full backface-hidden rotateY-180 bg-gradient-to-br from-fun-green/10 to-fun-yellow/10 border-2 border-fun-green/20">
                            <CardContent className="p-6 flex flex-col justify-center h-full text-center">
                              <h3 className="text-lg font-bold text-foreground mb-4">{member.name}</h3>
                              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-fun-purple/10 border-fun-purple/20 hover:bg-fun-purple/20" />
                <CarouselNext className="bg-fun-purple/10 border-fun-purple/20 hover:bg-fun-purple/20" />
              </Carousel>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Team;