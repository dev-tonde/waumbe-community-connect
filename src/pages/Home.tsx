import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import CorePrograms from "@/components/CorePrograms";
import Newsletter from "@/components/Newsletter";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <CorePrograms />
      <Newsletter />
      <TeamSection />
      <PartnersSection />
    </div>
  );
};

export default Home;