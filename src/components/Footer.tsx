import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" }
  ];

  const programs = [
    { name: "Academic Development", href: "/programs/academic-development" },
    { name: "Societal Reformation", href: "/programs/societal-reformation" },
    { name: "Courses", href: "/programs/courses" },
    { name: "Entrepreneurship", href: "/programs/entrepreneurship" }
  ];

  const resources = [
    { name: "Financial Reports", href: "/financial-reports" },
    { name: "Governance", href: "/governance" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Awards", href: "/testimonials/awards" }
  ];

  return (
    <footer className="bg-foreground text-white" role="contentinfo" aria-label="Site footer">
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
                 <span className="text-white/80">14 Moses Mabhida Street, Fisantekraal, Cape Town, 7550</span>
               </div>
               <div className="flex items-center">
                 <Phone className="w-5 h-5 mr-3 text-gold" />
                 <div className="text-white/80">
                   <div>+27 75 340 6751</div>
                   <div>+27 61 455 6192</div>
                 </div>
               </div>
               <div className="flex items-center">
                 <Mail className="w-5 h-5 mr-3 text-gold" />
                 <div className="text-white/80">
                   <div>terencewillemse@waumbe.org.za</div>
                   <div>asiphekhemtse@waumbe.org.za</div>
                   <div>info@waumbe.org.za</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <nav aria-label="Programs">
            <h4 className="text-lg font-semibold mb-4 text-gold">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link 
                    to={program.href} 
                    className="text-white/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <div>
            <nav aria-label="Resources">
              <h4 className="text-lg font-semibold mb-4 text-gold">Resources</h4>
              <ul className="space-y-2 mb-6">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      to={resource.href} 
                      className="text-white/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Social Media */}
            <nav aria-label="Social media links">
              <h5 className="text-sm font-semibold mb-3 text-gold">Follow Us</h5>
               <div className="flex space-x-4">
                 <a 
                   href="https://www.facebook.com/share/16UJyPDtTQ/?mibextid=wwXIfr" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-white/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                   aria-label="Visit our Facebook page"
                 >
                   <Facebook className="w-5 h-5" aria-hidden="true" />
                 </a>
                 <a 
                   href="#" 
                   className="text-white/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                   aria-label="Visit our Twitter page"
                 >
                   <Twitter className="w-5 h-5" aria-hidden="true" />
                 </a>
                 <a 
                   href="https://www.instagram.com/waumbe?igsh=OXk3NzFhajFmZDAx" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-white/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                   aria-label="Visit our Instagram page"
                 >
                   <Instagram className="w-5 h-5" aria-hidden="true" />
                 </a>
                 <a 
                   href="#" 
                   className="text-white/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                   aria-label="Visit our LinkedIn page"
                 >
                   <Linkedin className="w-5 h-5" aria-hidden="true" />
                 </a>
               </div>
            </nav>
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
            
            <nav className="flex items-center space-x-6" aria-label="Legal and site information">
              <a 
                href="#" 
                className="text-white/60 hover:text-gold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-gold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
              >
                Terms of Service
              </a>
              <div className="flex items-center text-white/60 text-sm">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400" aria-hidden="true" /> for community
              </div>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;