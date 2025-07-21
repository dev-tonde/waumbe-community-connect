import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FloatingEntrepreneurshipButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        asChild
        className="bg-waumbe hover:bg-waumbe/90 text-waumbe-foreground shadow-lg rounded-full px-6 py-3 font-semibold"
      >
        <Link to="/entrepreneurship" className="flex items-center gap-2">
          Go to Entrepreneurship
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  );
};