import { Outlet } from "react-router-dom";
import EntrepreneurshipNavbar from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import EntrepreneurshipFooter from "@/components/entrepreneurship/EntrepreneurshipFooter";
import FloatingMainSiteButton from "@/components/FloatingMainSiteButton";
import AccessibilitySkipLink from "@/components/AccessibilitySkipLink";

const EntrepreneurshipLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <AccessibilitySkipLink />

      <header id="navigation" role="banner">
        <EntrepreneurshipNavbar />
      </header>

      {/* Keep id aligned with your skip link target (usually href="#main-content") */}
      <main id="main-content" role="main" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>

      <footer id="footer" role="contentinfo">
        <EntrepreneurshipFooter />
      </footer>

      <FloatingMainSiteButton />
    </div>
  );
};

export default EntrepreneurshipLayout;
