import { ScrollAnimation } from "@/components/ScrollAnimation";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import { Card, CardContent } from "@/components/ui/card";
import { FunButton } from "@/components/ui/fun-button";
import { Mail, Phone, MapPin, Users, Target, Award, BookOpen } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const strategicPillars = [
    {
      icon: BookOpen,
      title: "Academic Development & Innovation",
      description: "Enhancing educational outcomes through innovative teaching methods"
    },
    {
      icon: Users,
      title: "Skills Development & Training", 
      description: "Providing practical skills for economic empowerment"
    },
    {
      icon: Target,
      title: "Societal Reformation",
      description: "Building character and leadership in communities"
    },
    {
      icon: Award,
      title: "Achiever's Awards",
      description: "Recognizing and celebrating youth achievements"
    }
  ];

  const programmes = [
    {
      title: "Academic Development",
      description: "One-tutor-to-three-student model; 3,000+ learners benefit annually. Includes subject choices, job shadowing, and bursary application assistance."
    },
    {
      title: "Societal Reformation", 
      description: "Life skills curriculum, leadership development, and 'Raising a Quality Man' camps."
    },
    {
      title: "Skills Development",
      description: "Accredited learnerships in IT, business admin, and farming; business coaching; employment partnerships via SEF and Year Beyond."
    }
  ];

  const partnerships = [
    "UWC: Practical placements for OT students",
    "CPUT: Media and PR student internships", 
    "TSIBA: Business and branding support",
    "The Learning Trust: Stipends for education volunteers"
  ];

  const boardMembers = [
    { role: "Chairperson", name: "Jannie Isaacs" },
    { role: "Executive Director", name: "Mdu Menze" },
    { role: "Executive Director", name: "Delphino Machikicho" },
    { role: "Non-Executive Director", name: "Karen Zaaiman" }
  ];

  return (
    <div className="pt-16">
      {/* Organisational Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Waumbe Youth Development
              </h1>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6">
                  Waumbe Youth Development is a registered Non-Profit Organisation (PBO Number: 930056934) based in Fisantekraal, a peri-urban farming community near Durbanville, Cape Town. Since our establishment in 2014, we've impacted over 30,000 youth, and in 2024 we celebrated 10 years of empowering Africa's next generation.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Team Picture */}
          <ScrollAnimation delay={0.2}>
            <div className="mb-20">
              <img 
                src={teamImage} 
                alt="Waumbe Youth Development team in Fisantekraal community, working together to empower local youth through education and development programs"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Mission & Vision</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8 bg-gradient-fun text-white">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-4">Vision</h3>
                    <p className="text-lg">To equip and empower young people to transform the African continent.</p>
                  </CardContent>
                </Card>
                <Card className="p-8 bg-card border-2 border-primary/20">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Mission</h3>
                    <p className="text-lg text-muted-foreground">To equip and inspire young people to thrive through education, ICT, farming, and life skills, despite socio-economic challenges.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Organisational Focus */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Organisational Focus</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground">
                  Waumbe addresses critical community challenges like poor academic performance, limited role models, and social decay. Our goal is to develop purpose-driven youth who can lead change in their communities. Through tutoring, life skills, professional exposure, and career support, we empower learners with tools for academic and economic success.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Strategic Pillars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {strategicPillars.map((pillar, index) => (
                  <ScrollAnimation key={index} delay={index * 0.1}>
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-0 text-center">
                        <pillar.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                        <p className="text-muted-foreground">{pillar.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Community Context */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Community Context</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6">
                  Fisantekraal is an under-resourced community affected by unemployment, drug abuse, and low educational attainment. Only 17% of adults have completed Grade 12. Waumbe also operates in Philippi and Cofimvaba—townships with similar socio-economic needs and high youth unemployment.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our programs align with Sustainable Development Goal 4 (Quality Education), targeting learners from Grade 2 to post-matric.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Programmes */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Programmes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programmes.map((programme, index) => (
                  <ScrollAnimation key={index} delay={index * 0.1}>
                    <Card className="p-6 h-full">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold text-foreground mb-4">{programme.title}</h3>
                        <p className="text-muted-foreground">{programme.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Key Achievements (2014 – 2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 bg-gradient-fun text-white">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-bold mb-2">30,000+</div>
                    <p className="text-lg">Youth Reached</p>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-card border-2 border-primary/20">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-bold mb-2 text-primary">85%</div>
                    <p className="text-lg text-muted-foreground">Matric Pass Rate (up from 45.1%)</p>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-card border-2 border-primary/20">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-bold mb-2 text-primary">NQF 3-5</div>
                    <p className="text-lg text-muted-foreground">SAQA-accredited Programs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Goals by 2025 */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Goals by 2025</h2>
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-lg text-muted-foreground">• Empower 30,000 underprivileged youth in the Western Cape</p>
                <p className="text-lg text-muted-foreground">• Maintain a 70% matric pass rate across partnered schools</p>
                <p className="text-lg text-muted-foreground">• Enable 500 youth to enroll in tertiary education</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Strategic Partnerships</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                We collaborate with key institutions that amplify our reach and deepen our impact:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {partnerships.map((partnership, index) => (
                  <ScrollAnimation key={index} delay={index * 0.1}>
                    <Card className="p-4">
                      <CardContent className="p-0">
                        <p className="text-muted-foreground">{partnership}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Organisation Details */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Organisation Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Organisation Details</h2>
                <Card className="p-6 mb-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Legal Status</h3>
                    <p className="text-muted-foreground mb-2">NPO: 178-970</p>
                    <p className="text-muted-foreground mb-2">PBO: 930056934</p>
                    <p className="text-muted-foreground">NPC: 2015/166063/08</p>
                  </CardContent>
                </Card>

                {/* Board of Directors */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Board of Directors</h3>
                    <div className="space-y-2">
                      {boardMembers.map((member, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium text-foreground">{member.role}:</span>
                          <span className="text-muted-foreground">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Contact Us</h2>
                <Card className="p-6 mb-6">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-muted-foreground">+27 75 340 6751</p>
                        <p className="text-muted-foreground">+27 61 455 6192</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <p className="text-muted-foreground">terencewillemse@waumbe.org.za</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <p className="text-muted-foreground">14 Moses Mabhida Street, Fisantekraal 7550</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Auditors */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Auditors</h3>
                    <p className="text-muted-foreground mb-2"><strong>Bright Path</strong></p>
                    <p className="text-muted-foreground mb-1">Contact: Tlou Ledwaba</p>
                    <p className="text-muted-foreground mb-1">Phone: 021 330 5001</p>
                    <p className="text-muted-foreground mb-1">Cell: 076 181 5634</p>
                    <p className="text-muted-foreground">Email: Consultants@bright-path.co.za</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Management */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Management</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6">
                  Waumbe has 6 permanent staff members (a Programs Team Leader, Human Resource Administrator, Monitoring and Evaluation Officer, Programs Facilitators, and an Operations Team Leader).
                </p>
                <p className="text-lg text-muted-foreground">
                  Through our partnership with The Learning Trust (SEF), we also have contract staff from the Social Employment Fund (Government Youth Employment initiative), and access to 20+ volunteers.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Partners Section */}
      <PartnersSection />
    </div>
  );
};

export default About;