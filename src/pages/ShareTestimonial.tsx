import TestimonialForm from "@/components/forms/TestimonialForm";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOManager from "@/components/EnhancedSEO";

const ShareTestimonial = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Share Your Story" },
  ];

  return (
    <div className="pt-16">
      <SEOManager 
        title="Share Your Story"
        description="Share your experience with Waumbe's programs. Your testimonial could inspire other young people to pursue their dreams through education and empowerment."
        keywords="share testimonial, success story, youth program experience, Waumbe impact, student feedback"
      />
      
      <MiniHeroBanner
        title="Share Your Story"
        subtitle="Your experience with Waumbe could inspire others on their journey."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="mt-8">
          <TestimonialForm />
        </div>
      </div>
    </div>
  );
};

export default ShareTestimonial;