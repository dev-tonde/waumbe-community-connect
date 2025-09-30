import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import waumbelogo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
  ];

  const testimonialsItems = [
    { name: "Testimonials", path: "/testimonials" },
    { name: "Awards", path: "/testimonials/awards" },
  ];

  return (
    <>
      {/* Annual Report Banner */}
      <div className="bg-primary text-primary-foreground py-2" role="banner" aria-label="Announcement banner">
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
      
      <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">
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
          <div className="hidden lg:block" role="navigation" aria-label="Primary">
            <div className="ml-10 flex items-baseline space-x-8">
            <Link 
                to="/about" 
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                About Us
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className="flex items-center text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                  aria-label="Programs menu"
                >
                  Programs <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  {programsItems.map((item) => (
                    <DropdownMenuItem key={item.name} className="hover:bg-muted">
                      <Link to={item.path} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>


              <DropdownMenu>
                <DropdownMenuTrigger 
                  className="flex items-center text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                  aria-label="Testimonials menu"
                >
                  Testimonials <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  {testimonialsItems.map((item) => (
                    <DropdownMenuItem key={item.name} className="hover:bg-muted">
                      <Link to={item.path} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/financial-reports" 
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm ${isActive('/financial-reports') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Financial Reports
              </Link>

              <Link 
                to="/governance" 
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm ${isActive('/governance') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Governance
              </Link>


              <Link 
                to="/contact" 
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm ${isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Donate Button - Always visible on desktop and tablet/mobile */}
          <div className="flex items-center gap-2">
            <Link to="/donate">
              <Button variant="donate" size="lg">
                Donate
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm p-1"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border" aria-label="Mobile navigation">
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Programs</p>
                {programsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-1 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Testimonials</p>
                {testimonialsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-1 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link to="/financial-reports" className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Financial Reports
              </Link>
              <Link to="/governance" className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Governance
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;