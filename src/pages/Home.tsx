import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import CorePrograms from "@/components/CorePrograms";
import Newsletter from "@/components/Newsletter";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import { FloatingEntrepreneurshipModal } from "@/components/FloatingEntrepreneurshipModal";
import EnhancedSEO from "@/components/EnhancedSEO";

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Waumbe Youth Development Centre",
    "url": "https://waumbe.org",
    "description": "Cape Town-based nonprofit transforming communities through education, youth empowerment, entrepreneurship, and innovation programs.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://waumbe.org/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div>
      <EnhancedSEO 
        title="Waumbe - Empowering Communities Through Education & Innovation"
        description="Cape Town-based nonprofit transforming communities through education, youth empowerment, entrepreneurship, and innovation programs. Join us in making a lasting impact through TVET training, higher education support, and skills development."
        keywords="nonprofit, education, youth empowerment, Cape Town, community development, entrepreneurship, skills development, South Africa, TVET, higher education, job creation, social impact"
        schema={homeSchema}
      />
      <Hero />
      <WhoWeAre />
      <CorePrograms />
      <Newsletter />
      <TeamSection />
      <PartnersSection />
      <FloatingEntrepreneurshipModal />
    </div>
  );
};

export default Home;