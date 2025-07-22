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
    { name: "Academic Development", path: "/programs" },
    { name: "Courses", path: "/entrepreneurship" },
    { name: "Learnerships", path: "/entrepreneurship" },
    { name: "Youth Empowerment", path: "/programs" },
    { name: "Innovation Labs", path: "/programs" },
  ];

  const testimonialsItems = [
    { name: "Student Stories", path: "/testimonials" },
    { name: "Community Impact", path: "/testimonials" },
    { name: "Success Stories", path: "/testimonials" },
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
          <div className="hidden md:block">
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
                <DropdownMenuContent className="bg-background border border-border shadow-lg">
                  {programsItems.map((item) => (
                    <DropdownMenuItem key={item.name} className="hover:bg-muted">
                      <Link to={item.path} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/team" 
                className={`transition-colors ${isActive('/team') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Team
              </Link>

              <Link 
                to="/partners" 
                className={`transition-colors ${isActive('/partners') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Partners
              </Link>

              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link to="/donate">
              <Button variant="donate" size="lg">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Programs</p>
                {programsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-1 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link to="/team" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <Link to="/partners" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Partners
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link to="/donate">
                  <Button variant="donate" className="w-full">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;