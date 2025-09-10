import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StayConnected from "@/components/StayConnected";
import { FloatingMainSiteButton } from "@/components/FloatingMainSiteButton";
import AccessibilitySkipLink from "@/components/AccessibilitySkipLink";
import AccessibilityEnhancements from "@/components/AccessibilityEnhancements";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceOptimizer />
      <AccessibilityEnhancements />
      <AccessibilitySkipLink />
      
      {/* Skip navigation links */}
      <div className="sr-only">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#navigation" className="skip-link">Skip to navigation</a>
        <a href="#footer" className="skip-link">Skip to footer</a>
      </div>
      
      <header role="banner">
        <Navbar />
      </header>
      
      <main id="main-content" role="main" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      
      <aside role="complementary" aria-label="Stay connected section">
        <StayConnected />
      </aside>
      
      <footer id="footer" role="contentinfo">
        <Footer />
      </footer>
      
      <FloatingMainSiteButton />
    </div>
  );
};

export default Layout;