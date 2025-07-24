import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { PartnershipRequestForm } from "@/components/forms/PartnershipRequestForm";

const Partners = () => {
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  const partners = [
    { name: "Cape Town Education Foundation", logo: "/placeholder.svg", category: "Education" },
    { name: "Tech Innovation Hub", logo: "/placeholder.svg", category: "Technology" },
    { name: "Community Development Bank", logo: "/placeholder.svg", category: "Finance" },
    { name: "Youth Empowerment Network", logo: "/placeholder.svg", category: "Youth" },
    { name: "Green Future Initiative", logo: "/placeholder.svg", category: "Environment" },
    { name: "Digital Skills Academy", logo: "/placeholder.svg", category: "Education" },
    { name: "Local Business Alliance", logo: "/placeholder.svg", category: "Business" },
    { name: "Healthcare Partners", logo: "/placeholder.svg", category: "Health" },
  ];

  const impactStats = [
    { number: "50+", label: "Active Partnerships", icon: "🤝" },
    { number: "R2.5M", label: "Total Investment", icon: "💰" },
    { number: "10,000+", label: "Lives Impacted", icon: "🌟" },
    { number: "25", label: "Programs Supported", icon: "📚" },
  ];

  if (showPartnershipForm) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation>
            <div className="text-center mb-8">
              <Button 
                variant="outline" 
                onClick={() => setShowPartnershipForm(false)}
                className="mb-4"
              >
                ← Back to Partners Information
              </Button>
              <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our mission to transform lives and communities. Fill out the form below to start the conversation.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <PartnershipRequestForm />
          </ScrollAnimation>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimation>
        <section className="py-16 bg-gradient-to-br from-fun-blue/5 to-fun-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-fun-blue to-fun-purple bg-clip-text text-transparent">
                Our Partners
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Together we're building stronger communities through strategic partnerships and collaborative impact.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {impactStats.map((stat, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-transform">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-fun-purple mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Partners Carousel */}
            <div className="relative">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: false,
                  }),
                ]}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-4">
                  {partners.map((partner, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                      <motion.div
                        className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-32 flex items-center justify-center"
                        onHoverStart={() => setHoveredPartner(index)}
                        onHoverEnd={() => setHoveredPartner(null)}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-center">
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-fun-blue to-fun-purple rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg"
                            animate={{
                              filter: hoveredPartner === index ? "grayscale(0%)" : "grayscale(100%)",
                              scale: hoveredPartner === index ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </motion.div>
                          <motion.p
                            className="font-semibold text-sm text-foreground"
                            animate={{
                              color: hoveredPartner === index ? "#6366f1" : "#64748b",
                            }}
                          >
                            {partner.name}
                          </motion.p>
                          <p className="text-xs text-muted-foreground">{partner.category}</p>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Partnership Benefits */}
            <div className="mt-16 bg-gradient-to-r from-fun-purple/10 to-fun-pink/10 rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Partner With Us?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join our network of changemakers and make a lasting impact in communities across Cape Town.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollAnimation delay={0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-fun-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                      🎯
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Proven Impact</h3>
                    <p className="text-muted-foreground">
                      Our programs have a track record of creating measurable positive change in communities.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-fun-green rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                      📊
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Transparency</h3>
                    <p className="text-muted-foreground">
                      Regular reporting and open communication ensure your partnership investment is well-utilized.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-fun-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                      🤝
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      Deep community connections and local knowledge ensure programs are culturally relevant and effective.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation>
              <div className="text-center mt-16">
                <Button 
                  size="lg" 
                  className="hover:scale-105 transition-transform"
                  onClick={() => setShowPartnershipForm(true)}
                >
                  Become a Partner
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Partners;