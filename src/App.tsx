import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Entrepreneurship from "./pages/Entrepreneurship";
import NotFound from "./pages/NotFound";

// Program pages
import AcademicDevelopment from "./pages/programs/AcademicDevelopment";
import CoreSteeringGroup from "./pages/CoreSteeringGroup";
import SocietalReformation from "./pages/programs/SocietalReformation";
import Courses from "./pages/programs/Courses";
import Learnerships from "./pages/programs/Learnerships";
import Volunteer from "./pages/Volunteer";
import ProgramsEntrepreneurship from "./pages/programs/Entrepreneurship";
import SkillsDevelopment from "./pages/programs/SkillsDevelopment";

// Other pages
import Testimonials from "./pages/Testimonials";
import TestimonialDetail from "./pages/testimonials/TestimonialDetail";
import ShareTestimonial from "./pages/ShareTestimonial";
import Awards from "./pages/testimonials/Awards";
import FinancialReports from "./pages/FinancialReports";
import Governance from "./pages/Governance";
import Gallery from "./pages/Gallery";

// Entrepreneurship site pages
import EntrepreneurshipCourses from "./pages/entrepreneurship/Courses";
import EntrepreneurshipLearnership from "./pages/entrepreneurship/Learnership";
import EntrepreneurshipFundraising from "./pages/entrepreneurship/Fundraising";
import EntrepreneurshipContact from "./pages/entrepreneurship/Contact";
import EntrepreneurshipDonate from "./pages/entrepreneurship/Donate";

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <React.StrictMode>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="programs" element={<Programs />} />
                  <Route path="programs/academic-development" element={<AcademicDevelopment />} />
                  <Route path="core-steering-group" element={<CoreSteeringGroup />} />
                  <Route path="programs/societal-reformation" element={<SocietalReformation />} />
                  <Route path="programs/courses" element={<Courses />} />
                  <Route path="programs/learnerships" element={<Learnerships />} />
                  <Route path="volunteer" element={<Volunteer />} />
                  <Route path="programs/volunteer" element={<Volunteer />} />
                  <Route path="programs/entrepreneurship" element={<ProgramsEntrepreneurship />} />
                  <Route path="programs/skills-development" element={<SkillsDevelopment />} />
                  <Route path="testimonials" element={<Testimonials />} />
                  <Route path="testimonials/:slug" element={<TestimonialDetail />} />
                  <Route path="testimonials/share" element={<ShareTestimonial />} />
                  <Route path="testimonials/awards" element={<Awards />} />
                  <Route path="financial-reports" element={<FinancialReports />} />
                  <Route path="governance" element={<Governance />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="team" element={<Team />} />
                  <Route path="partners" element={<Partners />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="donate" element={<Donate />} />
                </Route>
                <Route path="/entrepreneurship" element={<Entrepreneurship />} />
                <Route path="/entrepreneurship/courses" element={<EntrepreneurshipCourses />} />
                <Route path="/entrepreneurship/learnership" element={<EntrepreneurshipLearnership />} />
                <Route path="/entrepreneurship/fundraising" element={<EntrepreneurshipFundraising />} />
                <Route path="/entrepreneurship/contact" element={<EntrepreneurshipContact />} />
                <Route path="/entrepreneurship/donate" element={<EntrepreneurshipDonate />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </QueryClientProvider>
        </ThemeProvider>
      </React.StrictMode>
    </HelmetProvider>
  );
};

export default App;
