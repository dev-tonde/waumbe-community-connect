import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const programsItems = [
    "Academic Development",
    "Courses",
    "Learnerships", 
    "Societal Reformation",
    "Volunteers",
    "TSIBA",
    "OT Students"
  ];

  const testimonialsItems = [
    "Student Stories",
    "Community Impact",
    "Success Stories"
  ];

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Waumbe</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg">
                  {programsItems.map((item) => (
                    <DropdownMenuItem key={item} className="hover:bg-muted">
                      <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                        {item}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  Testimonials <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg">
                  {testimonialsItems.map((item) => (
                    <DropdownMenuItem key={item} className="hover:bg-muted">
                      <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                        {item}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#reports" className="text-foreground hover:text-primary transition-colors">
                Financial Reports
              </a>
              <a href="#governance" className="text-foreground hover:text-primary transition-colors">
                Governance
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Button variant="donate" size="lg">
              Donate Now
            </Button>
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
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Programs</p>
                {programsItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-1 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Testimonials</p>
                {testimonialsItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-1 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <a href="#reports" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Financial Reports
              </a>
              <a href="#governance" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Governance
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button variant="donate" className="w-full">
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;