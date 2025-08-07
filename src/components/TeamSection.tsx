import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
// Import team member images
import mduMenze from "@/assets/team-images/Mdu-Menze.png";
import terenceWillemse from "@/assets/team-images/Terence-Willemse.png";
import asipheKhemtse from "@/assets/team-images/Asiphe-Khemtse.png";
import ncebakaziMabena from "@/assets/team-images/Ncebakazi-Mabena.png";
import olwethuKomanisi from "@/assets/team-images/Olwethu-Komanisi.png";
import andreaWillemse from "@/assets/team-images/Andrea-Willemse.png";
import wongamaDuba from "@/assets/team-images/Wongama-Duba.png";
import anelisaSiyibana from "@/assets/team-images/Anelisa-Siyibana.png";
import avelaXwayi from "@/assets/team-images/Avela-Xwayi.png";
import nikiweMxhegwana from "@/assets/team-images/Nikiwe-Mxhegwana.png";

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Mdu Menze",
      role: "Chief Executive Officer",
      image: mduMenze,
      bio: "Driven to uplift communities through education and opportunity.",
    },
    {
      name: "Terence Willemse",
      role: "Head of Facilitation, Entrepreneurship, Media & Marketing/ Project Manager",
      image: terenceWillemse,
      bio: "Overseeing facilitation, entrepreneurship development, and media/marketing initiatives. Proven project manager with expertise in managing projects from conception to completion, ensuring effective delivery and impactful outcomes. Driving organizational growth through strategic planning, team leadership, and stakeholder engagement. Responsible for Facilitation and entrepreneurship development, Media and marketing initiatives, Project management (from conception to completion), and Strategic planning and team leadership",
    },
    {
      name: "Asiphe Khemtse",
      role: "Lead Programs Coordinator",
      image: asipheKhemtse,
      bio: "Lead Programs Coordinator plays a crucial role in the successful execution and management of various projects within an organisation. This position involves overseeing the planning, implementation, and evaluation of programs to ensure they meet organisational goals and objectives. Responsibilities typically include coordinating with different departments, managing budgets, and developing strategic plans to enhance program effectiveness. The Lead Programs Coordinator also serves as a key point of contact for stakeholders, providing updates and gathering feedback to drive continuous improvement.",
    },
    {
      name: "Ncebakazi Mabena",
      role: "Office Manager",
      image: ncebakaziMabena,
      bio: "Office manager plays a crucial role in ensuring the smooth and efficient operation of an organisation or business. They are responsible for overseeing daily administrative tasks, managing office supplies, and coordinating with various departments to ensure streamlined workflows. Office managers are often the point of contact for both internal staff and external clients, handling inquiries and resolving issues as they arise. Their duties may also include scheduling meetings, maintaining records, and implementing office policies and procedures. Strong organisational skills, attention to detail, and effective communication abilities are essential attributes for an office manager, as they help maintain a productive and harmonious work environment.",
    },
    {
      name: "Olwethu Komanisi",
      role: "Academic Development & Innovation Programs Coordinator",
      image: olwethuKomanisi,
      bio: "Academic Development & Innovation Officer plays a crucial role in shaping the educational landscape within an institution. This position is typically responsible for driving innovation in teaching and learning practices, enhancing the quality of education, and ensuring that the curriculum meets the evolving needs of students and society. The officer collaborates with faculty, staff, and sometimes students to implement new educational technologies, pedagogical strategies, and academic programs. They also focus on professional development for educators, helping them to adopt innovative methods and tools that can improve student engagement and learning outcomes. Additionally, this role often involves data analysis to assess the effectiveness of educational innovations and identify areas for further improvement. Ultimately, the Academic Development & Innovation Officer is a catalyst for positive change, striving to create a dynamic and forward-thinking academic environment.",
    },
    {
      name: "Andrea Willemse",
      role: "Monitoring & Evaluation Officer",
      image: andreaWillemse,
      bio: "Monitoring and Evaluation (M&E) Officer plays a crucial role in the effective implementation and assessment of projects and programs across various sectors, such as development, healthcare, education, and more. Their primary responsibility is to design and implement systems to monitor project activities, outcomes, and impacts, ensuring that objectives are met efficiently and effectively. They collect and analyse data to evaluate the performance of projects, identify areas for improvement, and provide evidence-based recommendations for future planning. This role often involves creating detailed reports and presentations for stakeholders, including donors, management, and policymakers. M&E Officers must possess strong analytical, communication, and organisational skills, as well as a thorough understanding of project management and evaluation methodologies. Their work is integral to ensuring accountability, transparency, and continuous improvement within organisations.",
    },
    {
      name: "Wongama Duba",
      role: "Societal Reformation Coordinator",
      image: wongamaDuba,
      bio: "Societal Reformation Officer is a conceptual role envisioned to address and implement transformative changes within societal structures. This role would involve analysing current social systems, identifying areas in need of reform, and developing strategies to foster equitable and sustainable improvements. The officer would work closely with policymakers, community leaders, and various stakeholders to advocate for reforms that address issues such as inequality, education, healthcare, and environmental sustainability. By utilising data-driven insights and community feedback, a Societal Reformation Officer aims to bridge gaps in social justice and enhance the well-being of all community members. This position would require a combination of skills in sociology, public policy, and community engagement, making it a critical component in driving progressive change in society.",
    },
    {
      name: "Anelisa Siyibana",
      role: "Academic Development Innovation Assistant",
      image: anelisaSiyibana,
      bio: "Academic Development & Innovation Officer Assistant plays a crucial role in supporting the initiatives aimed at enhancing educational practices and fostering innovation within an academic institution. This role typically involves coordinating and assisting with the development of innovative teaching strategies, curriculum design, and the integration of new technologies into the learning environment. The assistant may be responsible for organising workshops, managing project timelines, and liaising between faculty, students, and external partners to ensure the smooth implementation of innovative projects. Additionally, they might assist in researching and analysing educational trends to provide insights that drive academic growth. Strong organisational, communication, and problem-solving skills are essential in this role, as it requires a proactive approach to supporting the continuous improvement of educational offerings.",
    },
    {
      name: "Avela Xwayi",
      role: "Programs Assistant",
      image: avelaXwayi,
      bio: "Office assistant plays a crucial role in ensuring the smooth operation of any business environment. They are responsible for a variety of administrative tasks, such as managing correspondence, scheduling appointments, organising files, and handling basic bookkeeping duties. Additionally, they often serve as the first point of contact for visitors and clients, requiring strong communication and interpersonal skills. Proficiency in office software, attention to detail, and the ability to multitask are essential qualities for success in this role. An effective office assistant not only supports the daily functions of the office but also contributes to a positive and efficient workplace atmosphere.",
    },
    {
      name: "Nikiwe Mxhegwana",
      role: "Staff Support",
      image: nikiweMxhegwana,
      bio: "Staff support plays a critical role in the smooth operation of any organisation. They are responsible for assisting employees with a range of administrative and logistical tasks, ensuring that the workforce can focus on their core responsibilities. This role often includes duties such as scheduling meetings, managing communications, organising files, and assisting with technology issues. A staff support person serves as a key point of contact for both internal and external stakeholders, facilitating effective communication and collaboration across the organisation. By providing this essential support, they help to create a more efficient, productive, and positive work environment, enabling all team members to thrive.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of professionals and community leaders work
              tirelessly to create lasting positive change in our communities.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-1">
              {teamMembers.map((member, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card
                      className="h-80 cursor-pointer relative overflow-hidden"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardContent className="p-0 h-full relative">
                        <AnimatePresence mode="wait">
                          {hoveredCard !== index ? (
                            <motion.div
                              key={`front-${index}`}
                              initial={{ rotateY: 0 }}
                              animate={{ rotateY: 0 }}
                              exit={{ rotateY: -90 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 backface-hidden"
                            >
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-semibold mb-1">
                                  {member.name}
                                </h3>
                                <p className="text-fun-yellow font-medium">
                                  {member.role}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                             <motion.div
                               key={`back-${index}`}
                               initial={{ rotateY: 90 }}
                               animate={{ rotateY: 0 }}
                               exit={{ rotateY: 90 }}
                               transition={{ duration: 0.3 }}
                               className="absolute inset-0 backface-hidden bg-gradient-fun p-6 flex flex-col text-white"
                             >
                               <h3 className="text-xl font-semibold mb-4">
                                 {member.name}
                               </h3>
                               <div className="flex-1 overflow-y-auto">
                                 <p className="text-sm leading-relaxed">
                                   {member.bio}
                                 </p>
                               </div>
                             </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TeamSection;
