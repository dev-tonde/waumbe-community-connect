import { ScrollAnimation } from "@/components/ScrollAnimation";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, FileText, Scale } from "lucide-react";

const Governance = () => {
  const boardMembers = [
    {
      name: "Dr. Elizabeth Mthembu",
      role: "Chairperson",
      qualifications: "PhD in Social Development, 25+ years experience",
      bio: "Leading expert in community development and non-profit governance"
    },
    {
      name: "Michael Johnson",
      role: "Vice Chairperson",
      qualifications: "MBA, Former Corporate Executive",
      bio: "Brings strategic business acumen and leadership experience"
    },
    {
      name: "Sarah Williams",
      role: "Secretary",
      qualifications: "LLB, Legal Practitioner",
      bio: "Ensures legal compliance and governance best practices"
    },
    {
      name: "David Chen",
      role: "Treasurer",
      qualifications: "CA(SA), Financial Services Expert",
      bio: "Oversees financial management and fiscal responsibility"
    },
    {
      name: "Thandiwe Ndaba",
      role: "Board Member",
      qualifications: "Community Leader, Education Specialist",
      bio: "Represents community interests and educational expertise"
    },
    {
      name: "James Roberts",
      role: "Board Member",
      qualifications: "Entrepreneur, Youth Development Advocate",
      bio: "Champions youth empowerment and innovation programs"
    }
  ];

  const policies = [
    {
      icon: Shield,
      title: "Code of Ethics",
      description: "Comprehensive ethical guidelines governing all organizational activities"
    },
    {
      icon: FileText,
      title: "Financial Management Policy",
      description: "Strict protocols for financial oversight and accountability"
    },
    {
      icon: Users,
      title: "Governance Framework",
      description: "Clear structure for decision-making and organizational oversight"
    },
    {
      icon: Scale,
      title: "Conflict of Interest Policy",
      description: "Guidelines to prevent and manage potential conflicts of interest"
    }
  ];

  const principles = [
    "Transparency in all operations and decision-making",
    "Accountability to stakeholders and beneficiaries",
    "Integrity in financial management and reporting",
    "Community-centered approach to program development",
    "Continuous improvement and innovation",
    "Compliance with all regulatory requirements"
  ];

  return (
    <div className="pt-16">
      <MiniHeroBanner 
        title="Governance" 
        subtitle="Strong governance is the foundation of our organization. Learn about our board, policies, and commitment to transparency and accountability."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{member.qualifications}</p>
                    <p className="text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Governance Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {policies.map((policy, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <policy.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>{policy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{policy.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Governance Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Board Meetings</h3>
              <p className="text-muted-foreground mb-4">
                Our board meets quarterly to review organizational performance, 
                approve strategic decisions, and ensure effective governance.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Quarterly board meetings</li>
                <li>• Annual general meeting</li>
                <li>• Special meetings as required</li>
                <li>• Committee meetings monthly</li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
              <p className="text-muted-foreground mb-4">
                We maintain full compliance with all relevant legislation and 
                regulatory requirements for non-profit organizations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• NPO Act compliance</li>
                <li>• SARS tax exemption status</li>
                <li>• B-BBEE certification</li>
                <li>• Fundraising compliance</li>
              </ul>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Governance;