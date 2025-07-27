import { ScrollAnimation } from "@/components/ScrollAnimation";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Medal, Star, Users, Calendar } from "lucide-react";

const Awards = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Awards" }
  ];

  const awardCategories = [
    {
      icon: Trophy,
      title: "Top Academic Achievers",
      description: "Recognizing students who excel in their academic pursuits"
    },
    {
      icon: Award,
      title: "Most Improved Learner",
      description: "Celebrating significant academic and personal growth"
    },
    {
      icon: Medal,
      title: "Leadership in Action",
      description: "Honoring youth who demonstrate exceptional leadership qualities"
    },
    {
      icon: Users,
      title: "Community Involvement",
      description: "Acknowledging active participation in community development"
    },
    {
      icon: Star,
      title: "Resilience & Personal Growth",
      description: "Recognizing perseverance through personal challenges"
    }
  ];

  const recognitions = [
    {
      year: "2017",
      title: "Bronze Award for Youth Excellence",
      organization: "Western Cape Department of Social Development",
      description: "Awarded under the 'Building, Education, Training and Skills Development Capacity' category."
    },
    {
      year: "2021–present",
      title: "YearBeyond Programme Facilitator",
      organization: "Department of Education Western Cape",
      description: "Nominated in partnership with Community Chest and YearBeyond. Through this initiative, Waumbe has facilitated employment for 28 youth aged 18–25."
    },
    {
      year: "2022",
      title: "Admin Superstars Award",
      organization: "YearBeyond",
      description: "Received in September for excellence in program administration and delivery."
    }
  ];

  const stats = [
    { number: "100+", label: "Awards Received" },
    { number: "25+", label: "Partner Organizations" },
    { number: "8", label: "Years of Excellence" }
  ];

  return (
    <div className="pt-16">
      <MiniHeroBanner 
        title="Achievers' Awards" 
        subtitle="Celebrating excellence and inspiring a culture of achievement."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">What Are the Achievers' Awards?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Waumbe's annual Achievers' Awards Ceremony recognizes youth who excel academically, 
              demonstrate leadership, or overcome personal challenges to make progress in their lives.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Award Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awardCategories.map((category, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <category.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These awards build confidence, strengthen purpose, and promote a culture of celebration 
              in our community. Each winner becomes a beacon of possibility for their peers.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Past Highlights & Recognitions</h2>
            <div className="space-y-6">
              {recognitions.map((recognition, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary">{recognition.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{recognition.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{recognition.organization}</p>
                      <p className="text-muted-foreground">{recognition.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Over 100 learners have been celebrated through Waumbe's annual Achievers' Awards Ceremonies, 
              featuring keynote speakers and inspiring community leaders.
            </p>
            <p className="text-lg text-muted-foreground">
              Want to sponsor an award or contribute to the next event? 
              <a href="/contact" className="text-primary hover:underline ml-1">Contact us here</a>.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Awards;