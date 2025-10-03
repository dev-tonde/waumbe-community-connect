import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useMemo } from "react";

// ✅ Import images so Vite fingerprints and serves them correctly
import MduImg from "@/assets/team-images/Mdu-Menze.png";
import TerenceImg from "@/assets/team-images/Terence-Willemse.png";
import AsipheImg from "@/assets/team-images/Asiphe-Khemtse.png";
import NcebakaziImg from "@/assets/team-images/Ncebakazi-Mabena.png";
import OlwethuImg from "@/assets/team-images/Olwethu-Komanisi.png";
import AndreaImg from "@/assets/team-images/Andrea-Willemse.png";
import WongamaImg from "@/assets/team-images/Wongama-Duba.png";
import AnelisaImg from "@/assets/team-images/Anelisa-Siyibana.png";
import AvelaImg from "@/assets/team-images/Avela-Xwayi.png";
import NikiweImg from "@/assets/team-images/Nikiwe-Mxhegwana.png";

type Member = {
  name: string;
  role: string;
  img: string;
  bio: string;
};

const Team = () => {
  const teamMembers: Member[] = useMemo(
    () => [
      {
        name: "Mdu Menze",
        role: "Chief Executive Officer",
        img: MduImg,
        bio: "Driven to uplift communities through education and opportunity.",
      },
      {
        name: "Terence Willemse",
        role: "Head of Skills & Development Facilitation, Media & Marketing Officer",
        img: TerenceImg,
        bio: "Overseeing facilitation, entrepreneurship development, and media/marketing initiatives. Proven project manager with expertise in managing projects from conception to completion, ensuring effective delivery and impactful outcomes. Driving organizational growth through strategic planning, team leadership, and stakeholder engagement. Responsible for Facilitation and entrepreneurship development, Media and marketing initiatives, Project management (from conception to completion), and Strategic planning and team leadership",
      },
      {
        name: "Asiphe Khemtse",
        role: "Lead Programs Coordinator",
        img: AsipheImg,
        bio: "Lead Programs Coordinator plays a crucial role in the successful execution and management of various projects within an organisation. This position involves overseeing the planning, implementation, and evaluation of programs to ensure they meet organisational goals and objectives. Responsibilities typically include coordinating with different departments, managing budgets, and developing strategic plans to enhance program effectiveness. The Lead Programs Coordinator also serves as a key point of contact for stakeholders, providing updates and gathering feedback to drive continuous improvement.",
      },
      {
        name: "Ncebakazi Mabena",
        role: "Office Manager",
        img: NcebakaziImg,
        bio: "Office manager plays a crucial role in ensuring the smooth and efficient operation of an organisation or business. They are responsible for overseeing daily administrative tasks, managing office supplies, and coordinating with various departments to ensure streamlined workflows. Office managers are often the point of contact for both internal staff and external clients, handling inquiries and resolving issues as they arise. Their duties may also include scheduling meetings, maintaining records, and implementing office policies and procedures. Strong organisational skills, attention to detail, and effective communication abilities are essential attributes for an office manager, as they help maintain a productive and harmonious work environment.",
      },
      {
        name: "Olwethu Komanisi",
        role: "Academic Development & Innovation Programs Coordinator",
        img: OlwethuImg,
        bio: "Academic Development & Innovation Officer plays a crucial role in shaping the educational landscape within an institution. This position is typically responsible for driving innovation in teaching and learning practices, enhancing the quality of education, and ensuring that the curriculum meets the evolving needs of students and society. The officer collaborates with faculty, staff, and sometimes students to implement new educational technologies, pedagogical strategies, and academic programs. They also focus on professional development for educators, helping them to adopt innovative methods and tools that can improve student engagement and learning outcomes. Additionally, this role often involves data analysis to assess the effectiveness of educational innovations and identify areas for further improvement. Ultimately, the Academic Development & Innovation Officer is a catalyst for positive change, striving to create a dynamic and forward-thinking academic environment.",
      },
      {
        name: "Andrea Willemse",
        role: "Monitoring & Evaluation Officer",
        img: AndreaImg,
        bio: "Monitoring and Evaluation (M&E) Officer plays a crucial role in the effective implementation and assessment of projects and programs across various sectors, such as development, healthcare, education, and more. Their primary responsibility is to design and implement systems to monitor project activities, outcomes, and impacts, ensuring that objectives are met efficiently and effectively. They collect and analyse data to evaluate the performance of projects, identify areas for improvement, and provide evidence-based recommendations for future planning. This role often involves creating detailed reports and presentations for stakeholders, including donors, management, and policymakers. M&E Officers must possess strong analytical, communication, and organisational skills, as well as a thorough understanding of project management and evaluation methodologies. Their work is integral to ensuring accountability, transparency, and continuous improvement within organisations.",
      },
      {
        name: "Wongama Duba",
        role: "Societal Reformation Coordinator",
        img: WongamaImg,
        bio: "Societal Reformation Officer is a conceptual role envisioned to address and implement transformative changes within societal structures. This role would involve analysing current social systems, identifying areas in need of reform, and developing strategies to foster equitable and sustainable improvements. The officer would work closely with policymakers, community leaders, and various stakeholders to advocate for reforms that address issues such as inequality, education, healthcare, and environmental sustainability. By utilising data-driven insights and community feedback, a Societal Reformation Officer aims to bridge gaps in social justice and enhance the well-being of all community members. This position would require a combination of skills in sociology, public policy, and community engagement, making it a critical component in driving progressive change in society.",
      },
      {
        name: "Anelisa Siyibana",
        role: "Programs Assistant",
        img: AnelisaImg,
        bio: "Programs assistant plays a crucial role in ensuring the smooth operation of any business environment. They are responsible for a variety of administrative tasks, such as managing correspondence, scheduling appointments, organising files, and handling basic bookkeeping duties. Additionally, they often serve as the first point of contact for visitors and clients, requiring strong communication and interpersonal skills. Proficiency in office software, attention to detail, and the ability to multitask are essential qualities for success in this role. An effective office assistant not only supports the daily functions of the office but also contributes to a positive and efficient workplace atmosphere.",
      },
      {
        name: "Avela Xwayi",
        role: "Programs Assistant",
        img: AvelaImg,
        bio: "Programs assistant plays a crucial role in ensuring the smooth operation of any business environment. They are responsible for a variety of administrative tasks, such as managing correspondence, scheduling appointments, organising files, and handling basic bookkeeping duties. Additionally, they often serve as the first point of contact for visitors and clients, requiring strong communication and interpersonal skills. Proficiency in office software, attention to detail, and the ability to multitask are essential qualities for success in this role. An effective office assistant not only supports the daily functions of the office but also contributes to a positive and efficient workplace atmosphere.",
      },
      {
        name: "Nikiwe Mxhegwana",
        role: "Staff Support",
        img: NikiweImg,
        bio: "Staff support plays a critical role in the smooth operation of any organisation. They are responsible for assisting employees with a range of administrative and logistical tasks, ensuring that the workforce can focus on their core responsibilities. This role often includes duties such as scheduling meetings, managing communications, organising files, and assisting with technology issues. A staff support person serves as a key point of contact for both internal and external stakeholders, facilitating effective communication and collaboration across the organisation. By providing this essential support, they help to create a more efficient, productive, and positive work environment, enabling all team members to thrive.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimation>
        <section className="py-16 bg-gradient-to-br from-fun-purple/5 to-fun-pink/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-fun-purple to-fun-pink bg-clip-text">
                Meet Our Team
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our passionate team of educators, innovators, and community
                leaders working together to create lasting change.
              </p>
            </div>

            {/* ✅ Simple responsive grid, no carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers.map((m) => (
                <Card
                  key={m.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] w-full bg-muted/20">
                    <img
                      src={m.img}
                      alt={`${m.name} — ${m.role}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // graceful fallback to initials if an image ever fails
                        const el = e.currentTarget;
                        el.style.display = "none";
                        const wrapper = el.parentElement;
                        if (wrapper) {
                          wrapper.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-fun-purple/20 to-fun-pink/20 text-foreground/70 text-3xl font-bold">
                              ${m.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    <p className="text-fun-purple font-medium">{m.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
                      {m.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Team;
