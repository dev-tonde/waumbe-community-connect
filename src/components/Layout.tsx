import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StayConnected from "@/components/StayConnected";
import AccessibilitySkipLink from "@/components/AccessibilitySkipLink";
import AccessibilityEnhancements from "@/components/AccessibilityEnhancements";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const Layout = () => {
  const { pathname } = useLocation();
  const isEntrepreneurship = pathname.startsWith("/entrepreneurship");

  return (
    <div className="min-h-screen bg-background">
      <PerformanceOptimizer />
      <AccessibilityEnhancements />

      {/* Single source of truth for skip links */}
      <AccessibilitySkipLink />

      {/* Only render main-site chrome on non-entrepreneurship pages */}
      {!isEntrepreneurship && (
        <header id="navigation" role="banner">
          <Navbar />
        </header>
      )}

      <main id="main-content" role="main" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>

      {!isEntrepreneurship && (
        <>
          <aside role="complementary" aria-label="Stay connected section">
            <StayConnected />
          </aside>

          <footer id="footer" role="contentinfo">
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
};

export default Layout;
