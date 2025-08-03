import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import CorePrograms from "@/components/CorePrograms";
import Newsletter from "@/components/Newsletter";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import { FloatingEntrepreneurshipModal } from "@/components/FloatingEntrepreneurshipModal";
import SEOHelmet from "@/components/SEOHelmet";

const Home = () => {
  return (
    <div>
      <SEOHelmet />
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