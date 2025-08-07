import { Outlet } from "react-router-dom";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import { FloatingMainSiteButton } from "@/components/FloatingMainSiteButton";
import AccessibilitySkipLink from "@/components/AccessibilitySkipLink";

const EntrepreneurshipLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <AccessibilitySkipLink />
      <EntrepreneurshipNavbar />
      <main id="main-content" role="main" className="flex-1">
        <Outlet />
      </main>
      <FloatingMainSiteButton />
    </div>
  );
};

export default EntrepreneurshipLayout;