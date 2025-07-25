import { ScrollAnimation } from "@/components/ScrollAnimation";

const PartnersSection = () => {
  const partners = [
    { name: "University of Cape Town", logo: "/placeholder.svg" },
    { name: "City of Cape Town", logo: "/placeholder.svg" },
    { name: "Standard Bank", logo: "/placeholder.svg" },
    { name: "Shoprite Holdings", logo: "/placeholder.svg" },
    { name: "MTN Foundation", logo: "/placeholder.svg" },
    { name: "Vodacom Foundation", logo: "/placeholder.svg" },
    { name: "FirstRand Foundation", logo: "/placeholder.svg" },
    { name: "Anglo American", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="relative">
            {/* Infinite scrolling container */}
            <div className="flex animate-[scroll_30s_linear_infinite] space-x-12">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
      
    </section>
  );
};

export default PartnersSection;