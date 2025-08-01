import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Mdu Menze",
      role: "Chief Executive Officer",
      image: "/src/assets/team-images/Mdu-Menze.png",
      bio: "Driven to uplift communities through education and opportunity.",
    },
    {
      name: "Terence Willemse",
      role: "Head of Facilitation, Entrepreneurship, Media & Marketing/ Project Manager",
      image: "/src/assets/team-images/Terence-Willemse.png",
      bio: "Overseeing facilitation, entrepreneurship development, and media/marketing initiatives. Proven project manager with expertise in managing projects from conception to completion, ensuring effective delivery and impactful outcomes. Driving organizational growth through strategic planning, team leadership, and stakeholder engagement. Responsible for Facilitation and entrepreneurship development, Media and marketing initiatives, Project management (from conception to completion), and Strategic planning and team leadership",
    },
    {
      name: "Asiphe Khemtse",
      role: "Lead Programs Coordinator",
      image: "/src/assets/team-images/Asiphe-Khemtse.png",
      bio: "Lead Programs Coordinator plays a crucial role in the successful execution and management of various projects within an organisation. This position involves overseeing the planning, implementation, and evaluation of programs to ensure they meet organisational goals and objectives. Responsibilities typically include coordinating with different departments, managing budgets, and developing strategic plans to enhance program effectiveness. The Lead Programs Coordinator also serves as a key point of contact for stakeholders, providing updates and gathering feedback to drive continuous improvement.",
    },
    {
      name: "Ncebakazi Mabena",
      role: "Office Manager",
      image: "/src/assets/team-images/Ncebakazi-Mabena.png",
      bio: "Office manager plays a crucial role in ensuring the smooth and efficient operation of an organisation or business. They are responsible for overseeing daily administrative tasks, managing office supplies, and coordinating with various departments to ensure streamlined workflows. Office managers are often the point of contact for both internal staff and external clients, handling inquiries and resolving issues as they arise. Their duties may also include scheduling meetings, maintaining records, and implementing office policies and procedures. Strong organisational skills, attention to detail, and effective communication abilities are essential attributes for an office manager, as they help maintain a productive and harmonious work environment.",
    },
    {
      name: "Olwethu Komanisi",
      role: "Academic Development & Innovation Programs Coordinator",
      image: "/src/assets/team-images/Olwethu-Komanisi.png",
      bio: "Academic Development & Innovation Officer plays a crucial role in shaping the educational landscape within an institution. This position is typically responsible for driving innovation in teaching and learning practices, enhancing the quality of education, and ensuring that the curriculum meets the evolving needs of students and society. The officer collaborates with faculty, staff, and sometimes students to implement new educational technologies, pedagogical strategies, and academic programs. They also focus on professional development for educators, helping them to adopt innovative methods and tools that can improve student engagement and learning outcomes. Additionally, this role often involves data analysis to assess the effectiveness of educational innovations and identify areas for further improvement. Ultimately, the Academic Development & Innovation Officer is a catalyst for positive change, striving to create a dynamic and forward-thinking academic environment.",
    },
    {
      name: "Andrea Willemse",
      role: "Monitoring & Evaluation Officer",
      image: "/src/assets/team-images/Andrea-Willemse.png",
      bio: "Monitoring and Evaluation (M&E) Officer plays a crucial role in the effective implementation and assessment of projects and programs across various sectors, such as development, healthcare, education, and more. Their primary responsibility is to design and implement systems to monitor project activities, outcomes, and impacts, ensuring that objectives are met efficiently and effectively. They collect and analyse data to evaluate the performance of projects, identify areas for improvement, and provide evidence-based recommendations for future planning. This role often involves creating detailed reports and presentations for stakeholders, including donors, management, and policymakers. M&E Officers must possess strong analytical, communication, and organisational skills, as well as a thorough understanding of project management and evaluation methodologies. Their work is integral to ensuring accountability, transparency, and continuous improvement within organisations.",
    },
    {
      name: "Wongama Duba",
      role: "Societal Reformation Coordinator",
      image: "/src/assets/team-images/Wongama-Duba.png",
      bio: "Societal Reformation Officer is a conceptual role envisioned to address and implement transformative changes within societal structures. This role would involve analysing current social systems, identifying areas in need of reform, and developing strategies to foster equitable and sustainable improvements. The officer would work closely with policymakers, community leaders, and various stakeholders to advocate for reforms that address issues such as inequality, education, healthcare, and environmental sustainability. By utilising data-driven insights and community feedback, a Societal Reformation Officer aims to bridge gaps in social justice and enhance the well-being of all community members. This position would require a combination of skills in sociology, public policy, and community engagement, making it a critical component in driving progressive change in society.",
    },
    {
      name: "Anelisa Siyibana",
      role: "Academic Development Innovation Assistant",
      image: "/src/assets/team-images/Anelisa-Siyibana.png",
      bio: "Academic Development & Innovation Officer Assistant plays a crucial role in supporting the initiatives aimed at enhancing educational practices and fostering innovation within an academic institution. This role typically involves coordinating and assisting with the development of innovative teaching strategies, curriculum design, and the integration of new technologies into the learning environment. The assistant may be responsible for organising workshops, managing project timelines, and liaising between faculty, students, and external partners to ensure the smooth implementation of innovative projects. Additionally, they might assist in researching and analysing educational trends to provide insights that drive academic growth. Strong organisational, communication, and problem-solving skills are essential in this role, as it requires a proactive approach to supporting the continuous improvement of educational offerings.",
    },
    {
      name: "Avela Xwayi",
      role: "Programs Assistant",
      image: "/src/assets/team-images/Avela-Xwayi.png",
      bio: "Office assistant plays a crucial role in ensuring the smooth operation of any business environment. They are responsible for a variety of administrative tasks, such as managing correspondence, scheduling appointments, organising files, and handling basic bookkeeping duties. Additionally, they often serve as the first point of contact for visitors and clients, requiring strong communication and interpersonal skills. Proficiency in office software, attention to detail, and the ability to multitask are essential qualities for success in this role. An effective office assistant not only supports the daily functions of the office but also contributes to a positive and efficient workplace atmosphere.",
    },
    {
      name: "Nikiwe Mxhegwana",
      role: "Staff Support",
      image: "/src/assets/team-images/Nikiwe-Mxhegwana.png",
      bio: "Staff support plays a critical role in the smooth operation of any organisation. They are responsible for assisting employees with a range of administrative and logistical tasks, ensuring that the workforce can focus on their core responsibilities. This role often includes duties such as scheduling meetings, managing communications, organising files, and assisting with technology issues. A staff support person serves as a key point of contact for both internal and external stakeholders, facilitating effective communication and collaboration across the organisation. By providing this essential support, they help to create a more efficient, productive, and positive work environment, enabling all team members to thrive.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimation>
        <section className="py-16 bg-gradient-to-br from-fun-purple/5 to-fun-pink/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-fun-purple to-fun-pink bg-clip-text text-transparent">
                Meet Our Team
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our passionate team of educators, innovators, and community
                leaders working together to create lasting change in our
                communities.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {teamMembers.map((member, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        className="h-full"
                        onHoverStart={() => setHoveredCard(index)}
                        onHoverEnd={() => setHoveredCard(null)}
                        style={{ perspective: "1000px" }}
                      >
                        <motion.div
                          className="relative w-full h-96 preserve-3d cursor-pointer"
                          animate={{
                            rotateY: hoveredCard === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          {/* Front of card */}
                          <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-fun-blue/10 to-fun-green/10 border-2 border-fun-blue/20 hover:border-fun-purple/40 transition-colors">
                            <CardContent className="p-6 flex flex-col items-center text-center h-full">
                              <div className="w-24 h-24 bg-gradient-to-br from-fun-purple to-fun-pink rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {member.name}
                              </h3>
                              <p className="text-fun-purple font-semibold mb-1">
                                {member.role}
                              </p>
                              <div className="mt-auto">
                                <p className="text-sm text-muted-foreground italic">
                                  Hover to learn more
                                </p>
                              </div>
                            </CardContent>
                          </Card>

                           {/* Back of card */}
                           <Card className="absolute inset-0 w-full h-full backface-hidden rotateY-180 bg-gradient-to-br from-fun-green/10 to-fun-yellow/10 border-2 border-fun-green/20">
                             <CardContent className="p-6 flex flex-col h-full text-center">
                               <h3 className="text-lg font-bold text-foreground mb-4">
                                 {member.name}
                               </h3>
                               <div className="flex-1 overflow-y-auto">
                                 <p className="text-muted-foreground leading-relaxed text-sm">
                                   {member.bio}
                                 </p>
                               </div>
                             </CardContent>
                           </Card>
                        </motion.div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-fun-purple/10 border-fun-purple/20 hover:bg-fun-purple/20" />
                <CarouselNext className="bg-fun-purple/10 border-fun-purple/20 hover:bg-fun-purple/20" />
              </Carousel>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Team;
