import { ScrollAnimation } from "@/components/ScrollAnimation";

// Import partner logos
import sponsor1 from "@/assets/partners/sponsor1.png";
import sponsor2 from "@/assets/partners/sponsor2.png";
import sponsor3 from "@/assets/partners/sponsor3.png";
import sponsor4 from "@/assets/partners/sponsor4.png";
import sponsor5 from "@/assets/partners/sponsor5.jpg";
import sponsor6 from "@/assets/partners/sponsor6.jpg";
import sponsor7 from "@/assets/partners/sponsor7.png";
import sponsor8 from "@/assets/partners/sponsor8.png";

const PartnersSection = () => {
  const partners = [
    {
      name: "Grand Slots",
      logo: sponsor1,
    },
    {
      name: "King Bausuin Foundation",
      logo: sponsor2,
    },
    { name: "MegChem", logo: sponsor3 },
    { name: "SPZA", logo: sponsor4 },
    { name: "100Years", logo: sponsor5 },
    { name: "EXEO", logo: sponsor6 },
    { name: "Sub Slots", logo: sponsor7 },
    { name: "Learning Trust", logo: sponsor8 },
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
