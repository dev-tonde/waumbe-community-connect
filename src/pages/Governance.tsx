import { ScrollAnimation } from "@/components/ScrollAnimation";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Phone, Mail, Users, FileText } from "lucide-react";

const Governance = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Governance" },
  ];

  const boardMembers = [
    {
      name: "Jannie Isaacs",
      role: "Chairperson",
      image: "/src/assets/team-images/Jannie-Isaacs.jpg",
    },
    {
      name: "Mdu Menze",
      role: "Executive Director",
      image: "/src/assets/team-images/Mdu-Menze.png",
    },
    {
      name: "Delphino Machikicho",
      role: "Executive Director",
      image: "src/assets/team-images/Delphino-Machikicho.jpg",
    },
    {
      name: "Karen Zaaiman",
      role: "Non-Executive Director",
      image: "/src/assets/team-images/Karen-Zaaiman.jpg",
    },
  ];

  const legalDetails = [
    { label: "Organization Name", value: "Waumbe Youth Development Centre" },
    { label: "NPO Number", value: "178-970" },
    { label: "PBO Number", value: "930056934" },
    { label: "NPC Registration", value: "2015/166063/08" },
  ];

  const auditorDetails = [
    { label: "Auditing Firm", value: "Bright Path" },
    { label: "Contact Person", value: "Tlou Ledwaba" },
    { label: "Telephone", value: "021 330 5001" },
    { label: "Cell", value: "076 181 5634" },
    { label: "Email", value: "Consultants@bright-path.co.za" },
  ];

  const managementTeam = [
    "Programs Team Leader",
    "Human Resource Administrator",
    "Monitoring and Evaluation Officer",
    "Program Facilitators",
    "Operations Team Leader",
  ];

  return (
    <div className="pt-16">
      <MiniHeroBanner
        title="Governance"
        subtitle="Our commitment to transparency, accountability, and community representation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <ScrollAnimation>
          <div className="mb-12 text-center">
            <img
              src="/src/assets/team-images/Waumbe_Organogram.jpeg"
              alt="Waumbe Organisation Organogram"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="bg-muted/50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Waumbe Organisation Organogram
              </h2>
              <p className="text-muted-foreground">
                Waumbe Organisation Structure (2025)
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Legal Registration</h2>
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {legalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-muted/50 rounded-lg"
                  >
                    <span className="font-medium">{detail.label}:</span>
                    <span className="text-muted-foreground">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary font-semibold">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Auditors</h2>
            <Card className="p-6">
              <div className="space-y-4">
                {auditorDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                  >
                    {detail.label === "Email" && (
                      <Mail className="w-5 h-5 text-primary" />
                    )}
                    {(detail.label === "Telephone" ||
                      detail.label === "Cell") && (
                      <Phone className="w-5 h-5 text-primary" />
                    )}
                    {(detail.label === "Auditing Firm" ||
                      detail.label === "Contact Person") && (
                      <FileText className="w-5 h-5 text-primary" />
                    )}
                    <div className="flex-1">
                      <span className="font-medium">{detail.label}: </span>
                      <span className="text-muted-foreground">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Management</h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                Waumbe is led by a dedicated team of six permanent staff members
                including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {managementTeam.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                Contract staff are hired through our partnership with The
                Learning Trust (SEF), and we regularly collaborate with over 20
                volunteers, university students, and young professionals.
              </p>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Governance;
