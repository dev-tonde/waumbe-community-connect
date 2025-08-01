import { FunButton } from "@/components/ui/fun-button";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Heart, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";


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
          <ScrollAnimation>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Waumbe Youth Development is a registered Non-Profit Organisation (PBO Number: 930056934) based in Fisantekraal, an informal community near Durbanville in the northern suburbs of Cape Town.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We uplift communities through academic development, learnerships, entrepreneurship support, and social reform initiatives.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Waumbe believes the window to economic freedom lies in education and mental empowerment.
              </p>
              <FunButton asChild variant="primary" size="lg">
                <Link href="/about">Learn More About Our Mission</Link>
              </FunButton>
            </div>
          </ScrollAnimation>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-card p-6 rounded-xl shadow-fun border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  <value.icon className={`w-12 h-12 mb-4 ${index % 4 === 0 ? 'text-fun-blue' : index % 4 === 1 ? 'text-fun-pink' : index % 4 === 2 ? 'text-fun-green' : 'text-fun-yellow'} animate-bounce-gentle`} />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <ScrollAnimation delay={0.4}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-fun p-8 md:p-12 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-float">Our Mission</h3>
              <p className="text-lg md:text-xl max-w-4xl mx-auto">
                To empower communities through education, innovation, and sustainable development 
                programs that create lasting positive change and unlock human potential.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhoWeAre;