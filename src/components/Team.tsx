import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Linkedin, Mail } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mthembu",
      role: "Executive Director",
      department: "Leadership",
      bio: "Leading community development initiatives with 15+ years of experience in nonprofit management.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Johnson",
      role: "Program Director",
      department: "Education",
      bio: "Overseeing educational programs and curriculum development across all age groups.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Nomsa Dlamini",
      role: "Community Outreach Manager",
      department: "Outreach",
      bio: "Building bridges between communities and ensuring inclusive program participation.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Innovation Coordinator",
      department: "Technology",
      bio: "Leading technology and entrepreneurship programs to prepare youth for the digital economy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Grace Sibeko",
      role: "Youth Development Specialist",
      department: "Youth Programs",
      bio: "Designing and implementing youth empowerment and leadership development initiatives.",
      image: "https://images.unsplash.com/photo-1559254321-5d7f8f8ccea1?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Robert van der Merwe",
      role: "Finance & Operations",
      department: "Operations",
      bio: "Ensuring financial transparency and operational excellence across all programs.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const boardMembers = [
    { name: "Prof. Amanda Botha", role: "Chairperson", expertise: "Education Policy" },
    { name: "John Kweyama", role: "Vice-Chair", expertise: "Community Development" },
    { name: "Dr. Rachel Pieterse", role: "Secretary", expertise: "Legal Affairs" },
    { name: "Marcus Williams", role: "Treasurer", expertise: "Financial Management" }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated professionals and community leaders driving positive change 
              in Cape Town and beyond.
            </p>
          </div>
        </ScrollAnimation>

        {/* Team Hero Image */}
        <ScrollAnimation>
          <div className="mb-16">
            <img
              src={teamImage}
              alt="Waumbe team members"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </ScrollAnimation>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <Badge variant="secondary" className="mb-3">
                        {member.department}
                      </Badge>
                      <p className="text-sm text-muted-foreground mb-4">
                        {member.bio}
                      </p>
                      <div className="flex justify-center space-x-3">
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-5 h-5" />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div id="governance" className="animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Board of Directors</h3>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Our board ensures transparent governance and strategic oversight of all programs and initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team and make a difference 
              in communities across Cape Town.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Volunteer Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;