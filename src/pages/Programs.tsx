import CorePrograms from "@/components/CorePrograms";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import EnhancedSEO from "@/components/EnhancedSEO";

const Programs = () => {
  const programsSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Waumbe Youth Development Centre Programs",
    "description": "Comprehensive educational and development programs including TVET training, higher education support, and skills development.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "TVET Training Programs",
          "description": "Technical and vocational education and training programs"
        },
        {
          "@type": "Course", 
          "name": "Higher Education Support",
          "description": "University and college preparation and support programs"
        },
        {
          "@type": "Course",
          "name": "Skills Development Workshops",
          "description": "Practical skills training for employment readiness"
        }
      ]
    }
  };
  return (
    <div className="pt-16">
      <EnhancedSEO 
        title="Our Programs - Education & Skills Development"
        description="Explore Waumbe's comprehensive range of educational programs including TVET training, higher education support, skills development, and entrepreneurship training in Cape Town."
        keywords="education programs, TVET training, skills development, higher education, entrepreneurship training, youth programs, Cape Town education"
        type="article"
        section="Programs"
        schema={programsSchema}
      />
      <MiniHeroBanner
        title="Our Programs" 
        subtitle="Discover our comprehensive range of educational and development programs designed to empower youth and transform communities."
      />
      <CorePrograms />
    </div>
  );
};

export default Programs;