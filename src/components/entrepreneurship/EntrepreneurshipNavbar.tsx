import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import waumbelogo from "@/assets/logo.png";

export const EntrepreneurshipNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Courses', href: '/entrepreneurship/courses' },
    { name: 'Learnership', href: '/entrepreneurship/learnership' },
    { name: 'Fundraising', href: '/entrepreneurship/fundraising' },
    { name: 'Contact Us', href: '/entrepreneurship/contact' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/entrepreneurship" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <img 
              src={waumbelogo} 
              alt="Waumbe Logo" 
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-waumbe">Waumbe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-waumbe transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/entrepreneurship/donate">
              <Button className="bg-accent hover:bg-accent/90">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-waumbe transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/entrepreneurship/donate">
                <Button className="bg-accent hover:bg-accent/90 w-fit">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};