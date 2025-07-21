import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, GraduationCap, Users } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      icon: GraduationCap,
      title: "Educational Partners",
      description: "Universities and educational institutions",
      partners: [
        { name: "TSIBA University", type: "Higher Education", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop" },
        { name: "University of Cape Town", type: "Research Partner", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=200&h=100&fit=crop" },
        { name: "Cape Peninsula University", type: "Skills Development", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=100&fit=crop" }
      ]
    },
    {
      icon: Building2,
      title: "Corporate Partners",
      description: "Businesses supporting our mission",
      partners: [
        { name: "First National Bank", type: "Financial Sponsor", logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop" },
        { name: "MTN Foundation", type: "Technology Partner", logo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=100&fit=crop" },
        { name: "Shoprite Checkers", type: "Community Support", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop" }
      ]
    },
    {
      icon: Users,
      title: "Community Partners",
      description: "Local organizations and community groups",
      partners: [
        { name: "Fisantekraal Community Centre", type: "Local Partner", logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop" },
        { name: "Cape Town Youth Development", type: "Youth Programs", logo: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=200&h=100&fit=crop" },
        { name: "Kraaifontein Skills Centre", type: "Training Partner", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop" }
      ]
    }
  ];

  const impactStats = [
    { number: "25+", label: "Active Partnerships" },
    { number: "R2.5M+", label: "Partner Investments" },
    { number: "1000+", label: "Lives Impacted Together" },
    { number: "50+", label: "Joint Programs" }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work with leading organizations, businesses, and institutions to amplify 
            our impact and create sustainable change in communities.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-scale-in">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partner Categories */}
        <div className="space-y-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <div className="flex items-center justify-center mb-8">
                <category.icon className="w-8 h-8 text-primary mr-4" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <Card 
                    key={partnerIndex} 
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-24 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {partner.type}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20 animate-fade-in">
          <div className="bg-gradient-to-r from-secondary to-muted p-8 md:p-12 rounded-2xl">
            <div className="text-center mb-8">
              <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Partner With Us?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">Proven Impact</h4>
                <p className="text-muted-foreground">
                  Track record of successful programs with measurable community outcomes.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">Transparency</h4>
                <p className="text-muted-foreground">
                  Full transparency with regular reporting and community accountability.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">Local Expertise</h4>
                <p className="text-muted-foreground">
                  Deep understanding of local communities and culturally appropriate solutions.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>

        {/* Financial Reports Link */}
        <div id="reports" className="mt-16 text-center animate-scale-in">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Financial Transparency
            </h3>
            <p className="text-muted-foreground mb-6">
              We believe in complete transparency. Access our annual financial reports 
              and see how partnership investments are making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Download Annual Report 2023
              </Button>
              <Button variant="outline" size="lg">
                View Financial Statements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;