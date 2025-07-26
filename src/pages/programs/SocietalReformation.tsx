import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Globe, Recycle, HandHeart } from "lucide-react";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";

const SocietalReformation = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Societal Reform" }
  ];

  return (
    <>
      <MiniHeroBanner 
        title="Societal Reformation"
        subtitle="Transforming youth mindsets through experiential learning, leadership, and life skills."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Societal Reformation</h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Waumbe's Societal Reformation pillar addresses the internal challenges our youth face: lack of identity, purpose, and resilience. We work to shift mindsets and foster emotional intelligence through hands-on training and real-life mentorship.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollAnimation delay={0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Life Skills Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This holistic program cultivates social intelligence, emotional wellness, and personal leadership. Themes include self-awareness, accountability, and responsible decision-making—delivered via monthly themed workshops.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Raising a Quality Man</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A values-based initiative designed to equip young men with the tools for leadership, emotional maturity, and integrity. These camps foster healthy masculinity and community responsibility.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Youth Leadership Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our leadership workshops bring together student leaders from schools, churches, arts, and sports bodies to receive practical training in vision, responsibility, and ethical leadership.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <p className="text-lg text-muted-foreground">
              Through these programs, we help youth reimagine their potential and reshape their future—personally, socially, and economically.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default SocietalReformation;