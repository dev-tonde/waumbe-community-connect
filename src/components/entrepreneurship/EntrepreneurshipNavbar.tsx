import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import waumbelogo from "@/assets/logo.png";

/* Hoist static data to module scope */
const programsItems = [
  { name: "All Programs", path: "/programs" },
  { name: "Academic Development", path: "/programs/academic-development" },
  { name: "Core Steering Group", path: "/core-steering-group" },
  { name: "Societal Reformation", path: "/programs/societal-reformation" },
  { name: "Courses", path: "/programs/courses" },
  { name: "Learnerships", path: "/programs/learnerships" },
  { name: "Volunteer", path: "/programs/volunteer" },
  { name: "Entrepreneurship", path: "/programs/entrepreneurship" },
  { name: "Skills Development", path: "/programs/skills-development" },
] as const;

const testimonialsItems = [
  { name: "Testimonials", path: "/testimonials" },
  { name: "Awards", path: "/testimonials/awards" },
] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Announcement banner */}
      <div
        className="bg-primary text-primary-foreground py-2"
        role="banner"
        aria-label="Announcement banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/financial-reports"
            className="text-sm font-medium hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
            aria-label="View our 2023-2024 Annual Financial Report"
          >
            📊 View our 2023-2024 Annual Report
          </Link>
        </div>
      </div>

      <nav
        className="bg-background border-b border-border shadow-sm sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center gap-3 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              >
                <img
                  src={waumbelogo}
                  alt="Waumbe Youth Development Centre Logo"
                  className="h-10 w-auto"
                  width="40"
                  height="40"
                />
                <span className="text-2xl font-bold text-primary">Waumbe</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block" aria-label="Primary">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    [
                      "transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary",
                    ].join(" ")
                  }
                  end
                >
                  About Us
                </NavLink>

                {/* Programs dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="flex items-center text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                    aria-label="Programs menu"
                  >
                    Programs
                    <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-background border border-border shadow-lg z-50"
                    align="start"
                  >
                    {programsItems.map((item) => (
                      <DropdownMenuItem
                        key={item.name}
                        asChild
                        className="hover:bg-muted"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Testimonials dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="flex items-center text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                    aria-label="Testimonials menu"
                  >
                    Testimonials
                    <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-background border border-border shadow-lg z-50"
                    align="start"
                  >
                    {testimonialsItems.map((item) => (
                      <DropdownMenuItem
                        key={item.name}
                        asChild
                        className="hover:bg-muted"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavLink
                  to="/financial-reports"
                  className={({ isActive }) =>
                    [
                      "transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary",
                    ].join(" ")
                  }
                >
                  Financial Reports
                </NavLink>

                <NavLink
                  to="/governance"
                  className={({ isActive }) =>
                    [
                      "transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary",
                    ].join(" ")
                  }
                >
                  Governance
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    [
                      "transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary",
                    ].join(" ")
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Donate + mobile toggle */}
            <div className="flex items-center gap-2">
              <Button asChild variant="donate" size="lg">
                <Link to="/donate">Donate</Link>
              </Button>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen((v) => !v)}
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm p-1"
                  aria-expanded={isMenuOpen}
                  aria-label={
                    isMenuOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                  aria-controls="mobile-menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden" id="mobile-menu">
              <nav
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border"
                aria-label="Mobile navigation"
              >
                <NavLink
                  to="/about"
                  className="block px-3 py-2 transition-colors text-foreground hover:text-primary"
                  end
                >
                  About Us
                </NavLink>

                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Programs
                  </p>
                  {programsItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="block px-3 py-1 text-sm transition-colors text-foreground hover:text-primary"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Testimonials
                  </p>
                  {testimonialsItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="block px-3 py-1 text-sm transition-colors text-foreground hover:text-primary"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                <NavLink
                  to="/financial-reports"
                  className="block px-3 py-2 transition-colors text-foreground hover:text-primary"
                >
                  Financial Reports
                </NavLink>
                <NavLink
                  to="/governance"
                  className="block px-3 py-2 transition-colors text-foreground hover:text-primary"
                >
                  Governance
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block px-3 py-2 transition-colors text-foreground hover:text-primary"
                >
                  Contact
                </NavLink>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
