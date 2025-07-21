import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award } from "lucide-react";

const WhoWeAre = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community-driven change and sustainable development."
    },
    {
      icon: Users,
      title: "Inclusive Growth", 
      description: "Our programs are designed to include and empower everyone, regardless of background."
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "We measure our success by the positive impact we create in people's lives."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from education to governance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Waumbe is a Cape Town-based nonprofit organization dedicated to community upliftment 
              through comprehensive programs that address education, innovation, youth empowerment, 
              and societal transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Founded on the principles of transparency, community engagement, and sustainable development, 
              we work closely with local communities in Fisantekraal and beyond to create lasting positive change.
            </p>
            <Button variant="default" size="lg">
              Learn More About Our Mission
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center animate-scale-in">
          <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl max-w-4xl mx-auto">
              To empower communities through education, innovation, and sustainable development 
              programs that create lasting positive change and unlock human potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;