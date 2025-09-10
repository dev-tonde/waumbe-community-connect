import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Contact from "@/pages/Contact";
import Team from "@/pages/Team";
import Partners from "@/pages/Partners";
import Donate from "@/pages/Donate";
import Volunteer from "@/pages/Volunteer";
import Gallery from "@/pages/Gallery";
import Testimonials from "@/pages/Testimonials";
import ShareTestimonial from "@/pages/ShareTestimonial";
import FinancialReports from "@/pages/FinancialReports";
import Governance from "@/pages/Governance";
import CoreSteeringGroup from "@/pages/CoreSteeringGroup";
import Entrepreneurship from "@/pages/Entrepreneurship";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="team" element={<Team />} />
            <Route path="partners" element={<Partners />} />
            <Route path="donate" element={<Donate />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="testimonials/share" element={<ShareTestimonial />} />
            <Route path="financial-reports" element={<FinancialReports />} />
            <Route path="governance" element={<Governance />} />
            <Route path="core-steering-group" element={<CoreSteeringGroup />} />
            <Route path="entrepreneurship" element={<Entrepreneurship />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
