import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import CorePrograms from "@/components/CorePrograms";
import StayConnected from "@/components/StayConnected";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { FloatingEntrepreneurshipButton } from "@/components/FloatingEntrepreneurshipButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <CorePrograms />
      <StayConnected />
      <Team />
      <Partners />
      <Footer />
      <FloatingEntrepreneurshipButton />
    </div>
  );
};

export default Index;
