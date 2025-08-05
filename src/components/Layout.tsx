import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StayConnected from "@/components/StayConnected";
import { FloatingMainSiteButton } from "@/components/FloatingMainSiteButton";
import AccessibilitySkipLink from "@/components/AccessibilitySkipLink";

const Layout = () => {
  const location = useLocation();
  const isEntrepreneurshipRoute = location.pathname.startsWith("/entrepreneurship");

  return (
    <div className="min-h-screen bg-background">
      <AccessibilitySkipLink />
      <Navbar />
      <main id="main-content" role="main" className="flex-1">
        <Outlet />
      </main>
      <StayConnected />
      <Footer />
      {!isEntrepreneurshipRoute && <FloatingMainSiteButton />}
    </div>
  );
};

export default Layout;