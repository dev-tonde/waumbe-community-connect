import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community upliftment and education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Empowering Communities Through
            <span className="block text-gold"> Education & Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            Waumbe is transforming lives in Cape Town through comprehensive programs in education, 
            youth empowerment, entrepreneurship, and societal reformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Button variant="cta" size="lg" className="text-lg px-8 py-3">
              Learn About Our Programs
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary"
            >
              See Our Impact
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-white/80">Students Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-white/80">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5</div>
              <div className="text-white/80">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;