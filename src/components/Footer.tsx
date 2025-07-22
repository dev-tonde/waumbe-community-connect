import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Team", href: "/team" },
    { name: "Partners", href: "/partners" }
  ];

  const programs = [
    { name: "Academic Development", href: "/programs" },
    { name: "Youth Empowerment", href: "/programs" },
    { name: "Innovation Labs", href: "/programs" },
    { name: "Entrepreneurship", href: "/entrepreneurship" }
  ];

  const resources = [
    { name: "Financial Reports", href: "/reports" },
    { name: "Governance", href: "/governance" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-gold">Waumbe</h3>
            <p className="text-white/80 mb-6">
              Empowering communities in Cape Town through education, innovation, 
              and sustainable development programs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-gold" />
                <span className="text-white/80">Fisantekraal, Cape Town</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold" />
                <span className="text-white/80">+27 (0) 21 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold" />
                <span className="text-white/80">info@waumbe.org.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link 
                    to={program.href} 
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.href} 
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-gold">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-gold">Stay Updated</h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on our programs, 
              success stories, and community impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="bg-gold text-foreground px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © 2024 Waumbe NPO. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center text-white/60 text-sm">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for community
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;