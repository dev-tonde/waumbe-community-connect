import { ScrollAnimation } from "@/components/ScrollAnimation";

interface MiniHeroBannerProps {
  title: string;
  subtitle?: string;
}

const MiniHeroBanner = ({ title, subtitle }: MiniHeroBannerProps) => {
  return (
    <section className="py-16 bg-gradient-fun text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MiniHeroBanner;