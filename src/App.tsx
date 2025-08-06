import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Team from "@/pages/Team";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Volunteer from "@/pages/Volunteer";
import Donate from "@/pages/Donate";
import ShareTestimonial from "@/pages/ShareTestimonial";
import Testimonials from "@/pages/Testimonials";
import Partners from "@/pages/Partners";
import FinancialReports from "@/pages/FinancialReports";
import Governance from "@/pages/Governance";
import CoreSteeringGroup from "@/pages/CoreSteeringGroup";
import NotFound from "@/pages/NotFound";

// Program pages
import AcademicDevelopment from "@/pages/programs/AcademicDevelopment";
import SkillsDevelopment from "@/pages/programs/SkillsDevelopment";
import Entrepreneurship from "@/pages/programs/Entrepreneurship";
import SocietalReformation from "@/pages/programs/SocietalReformation";
import Courses from "@/pages/programs/Courses";
import Learnerships from "@/pages/programs/Learnerships";
import ProgramVolunteer from "@/pages/programs/Volunteer";

// Entrepreneurship pages
import EntrepreneurshipHome from "@/pages/Entrepreneurship";
import EntrepreneurshipCourses from "@/pages/entrepreneurship/Courses";
import EntrepreneurshipLearnership from "@/pages/entrepreneurship/Learnership";
import EntrepreneurshipFundraising from "@/pages/entrepreneurship/Fundraising";
import EntrepreneurshipContact from "@/pages/entrepreneurship/Contact";
import EntrepreneurshipDonate from "@/pages/entrepreneurship/Donate";

// Testimonial pages
import Awards from "@/pages/testimonials/Awards";
import TestimonialDetail from "@/pages/testimonials/TestimonialDetail";

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="programs" element={<Programs />} />
              <Route path="programs/academic-development" element={<AcademicDevelopment />} />
              <Route path="programs/skills-development" element={<SkillsDevelopment />} />
              <Route path="programs/entrepreneurship" element={<Entrepreneurship />} />
              <Route path="programs/societal-reformation" element={<SocietalReformation />} />
              <Route path="programs/courses" element={<Courses />} />
              <Route path="programs/learnerships" element={<Learnerships />} />
              <Route path="programs/volunteer" element={<ProgramVolunteer />} />
              <Route path="team" element={<Team />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="volunteer" element={<Volunteer />} />
              <Route path="donate" element={<Donate />} />
              <Route path="share-testimonial" element={<ShareTestimonial />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="testimonials/awards" element={<Awards />} />
              <Route path="testimonials/:id" element={<TestimonialDetail />} />
              <Route path="partners" element={<Partners />} />
              <Route path="financial-reports" element={<FinancialReports />} />
              <Route path="governance" element={<Governance />} />
              <Route path="governance/core-steering-group" element={<CoreSteeringGroup />} />
              
              {/* Entrepreneurship Routes */}
              <Route path="entrepreneurship" element={<EntrepreneurshipHome />} />
              <Route path="entrepreneurship/courses" element={<EntrepreneurshipCourses />} />
              <Route path="entrepreneurship/learnership" element={<EntrepreneurshipLearnership />} />
              <Route path="entrepreneurship/fundraising" element={<EntrepreneurshipFundraising />} />
              <Route path="entrepreneurship/contact" element={<EntrepreneurshipContact />} />
              <Route path="entrepreneurship/donate" element={<EntrepreneurshipDonate />} />
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;