import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary hover:scale-105 transition-transform">
              Waumbe
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                About Us
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
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
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  Testimonials <ChevronDown className="ml-1 h-4 w-4" />
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
                className={`transition-colors ${isActive('/financial-reports') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Financial Reports
              </Link>

              <Link 
                to="/governance" 
                className={`transition-colors ${isActive('/governance') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Governance
              </Link>


              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Donate Button - Always visible on desktop and tablet/mobile */}
          <div className="flex items-center gap-2">
            <Link to="/donate">
              <Button variant="donate" size="lg">
                Donate Now
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;