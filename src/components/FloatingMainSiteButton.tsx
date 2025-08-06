import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FloatingMainSiteButton = () => {
  const location = useLocation();
  
  // Only show on entrepreneurship routes
  if (!location.pathname.startsWith('/entrepreneurship')) {
    return null;
  }

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
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Main Site
        </Link>
      </Button>
    </motion.div>
  );
};