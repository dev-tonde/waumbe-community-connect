import CorePrograms from "@/components/CorePrograms";
import MiniHeroBanner from "@/components/MiniHeroBanner";

const Programs = () => {
  return (
    <div className="pt-16">
      <MiniHeroBanner 
        title="Our Programs" 
        subtitle="Discover our comprehensive range of educational and development programs designed to empower youth and transform communities."
      />
      <CorePrograms />
    </div>
  );
};

export default Programs;