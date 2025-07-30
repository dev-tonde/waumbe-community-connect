import { ScrollAnimation } from "@/components/ScrollAnimation";

const PartnersSection = () => {
  const partners = [
    {
      name: "Grand Slots",
      logo: "/src/assets/partners/sponsor1.png",
    },
    {
      name: "King Bausuin Foundation",
      logo: "/src/assets/partners/sponsor2.png",
    },
    { name: "MegChem", logo: "/src/assets/partners/sponsor3.png" },
    { name: "SPZA", logo: "/src/assets/partners/sponsor4.png" },
    { name: "100Years", logo: "/src/assets/partners/sponsor5.jpg" },
    { name: "EXEO", logo: "/src/assets/partners/sponsor6.jpg" },
    { name: "Sub Slots", logo: "/src/assets/partners/sponsor7.png" },
    { name: "Learning Trust", logo: "/src/assets/partners/sponsor8.png" },
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
