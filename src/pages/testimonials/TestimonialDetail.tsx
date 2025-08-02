import { useParams, Navigate } from "react-router-dom";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumbs from "@/components/Breadcrumbs";

const TestimonialDetail = () => {
  const { slug } = useParams();

  const testimonials = [
    {
      name: "Lwando Mzoyi",
      image: "src/assets/testimonials/Lwando.jpg",
      slug: "lwando-mzoyi",
      content:
        "My name is Lwando Mzoyi. I am the sixth child of nine siblings. I am passionate about youth development, education, and change. I currently reside in Fisantekraal, a small developing community outside Durbanville, and I'm completing my accounting studies.\n\nGrowing up in the city was extremely challenging. My father was the sole breadwinner, and at times we had to skip school due to the lack of necessities. After Grade 9, I had to attend Hector Peterson Senior Secondary in Kraaifontein, as our community school didn't go beyond Grade 9.\n\nLiving in Fisantekraal, one is surrounded by alcohol abuse, teenage pregnancy, gangsterism, and school dropouts. Peer pressure is intense, especially with the lack of role models. I knew I wanted to change my situation and began surrounding myself with empowering individuals.\n\nWaumbe Youth Organization brought a new perspective to my life. It created opportunities for youth in our community, providing educational support and skill development. High school learners from Grades 8 to 12 received extra lessons, improving academic outcomes and mindsets.\n\nFailure only happens when you stop trying. I encourage young people to understand their passions, strengths, weaknesses, and interests. The journey won't be easy, but the obstacles are stepping stones.",
    },
    {
      name: "Amore Fortuin",
      image: "src/assets/testimonials/Amore.jpg",
      slug: "amore-fortuin",
      content:
        "After graduating from the University of Cape Town, I began my career as a Geography educator at Kraaifontein High School.\n\nMy dedication paid off, with a remarkable 98% pass rate in Geography in 2024, earning me an award from the Metro East Education District.\n\nI have since transitioned to teaching Agriculture Management Practices and Agriculture Technology, while also taking on leadership roles as Head of Department and Grade 12 Head.\n\nIn addition to my teaching expertise, I hold certificates in welding, drone flying, and greenhouse management.\n\nI am currently furthering my qualifications with a Diploma in Governance and Administration.",
    },
    {
      name: "Michaela Mustafa",
      image: "src/assets/testimonials/Michaela.jpeg",
      slug: "michaela-mustafa",
      content:
        "From the very beginning, I could feel the genuine compassion and dedication from every team member. They don't just run programs, they truly care about each person who walks through their doors. Waumbe is a supportive and empowering community that genuinely cares about the growth and potential of every individual. What stands out most is the way Waumbe blends learning with compassion. They don't just teach, they uplift.\n\nWhat makes Waumbe stand out is how proactive they are in addressing the needs of the youth and the community. Whether it's offering academic support or mentorship, they are always one step ahead. They are creating opportunities and encouraging growth in meaningful ways. It's also clear that the people behind Waumbe truly enjoy what they do. Their energy, enthusiasm and love for the work they do are contagious. It creates an environment where you feel safe, valued, and motivated to become your best self.\n\nI'm proud to be a part of this journey and excited for all the lives they will continue to touch. I truly believe that with more resources, they can continue to do even greater things for the youth of Fisantekraal and beyond.",
    },
    {
      name: "Curt Van Schalkwyk",
      image: "src/assets/testimonials/Curt.jpg",
      slug: "curt-van-schalkwyk",
      content:
        "My name is Curt Van Schalkwyk; I am from the community of Fisantekraal, I Attended Primary and High School in Fisantekraal. I met Mr Mdu Menze in 2015 when I was in Matric; I received an award from Waumbe for 3rd Place in English. Already that small acknowledgement from Waumbe is what kept me motivated in achieving my goals.\n\nI officially started working for Waumbe in 2019, when I was still very much inexperience of life and at a dark point of my life where it felt like I will not be able to achieve my dreams and goals.\n\nWith the many opportunities that Waumbe offered, I was able to learn many life skills and was able to impart all of that knowledge to other young people in the community. I have seen the hopelessness became hopeful; I have seen how a person of such low self- Esteem can stand on the biggest stages and share their journey.\n\nThrough impacting others, I never knew that also a part of me was growing at the same time. I have become confident, Inspiring and have gain so much of life skills.\n\nToday I can say proudly that Waumbe transformed my life for the better. With the support and Motivation from Waumbe I was able to complete my Degree, I married the love of my life and I could bring a child in this world knowing that I have what it takes to be a father, husband and also a community leader, bringing hope, love and light to other young people.",
    },
    {
      name: "Sive Maliwa",
      image: "src/assets/testimonials/Sive.jpg",
      slug: "sive-maliwa",
      content:
        "My name is Sive Maliwa, and I am a proud graduate of the University of the Western Cape with a degree in Computer Science. Today, I work as a Systems Analyst at one of South Africa's fastest-growing banks — a role I am passionate about and grateful for.\n\nMy journey began in high school, where I was introduced to Waumbe, a youth development initiative that played a significant role in shaping my path. Through their guidance and support, I was able to stay focused on my studies and envision a brighter future. They didn't just offer encouragement — they helped lay the foundation for my academic and professional success.\n\nTo the youth of Fisantekraal: your future is in your hands. I urge you to believe in yourselves, stay committed to your goals, and never underestimate the power of education. Focus on your studies, surround yourself with positive influences, and remember — no dream is too big when you are willing to work for it.\n\nYour journey starts now. Make it count.",
    },
  ];

  const testimonial = testimonials.find(t => t.slug === slug);

  if (!testimonial) {
    return <Navigate to="/testimonials" replace />;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Testimonials", href: "/testimonials" },
    { label: testimonial.name }
  ];

  return (
    <div className="pt-16">
      <MiniHeroBanner
        title={testimonial.name}
        subtitle="Personal story of impact and transformation"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ScrollAnimation>
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{testimonial.name}</h1>
                </div>
              </div>
              
              <div className="prose max-w-none">
                {testimonial.content
                  .split("\n\n")
                  .map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-muted-foreground leading-relaxed mb-6 text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <p className="text-lg text-muted-foreground italic">
              "Through these programs, we help youth reimagine their potential
              and reshape their future—personally, socially, and economically."
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default TestimonialDetail;