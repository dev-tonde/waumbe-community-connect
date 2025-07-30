import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FloatingEntrepreneurshipModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-waumbe hover:bg-waumbe/90 text-waumbe-foreground shadow-lg rounded-full px-6 py-3 font-semibold"
          >
            <span className="flex items-center gap-2">
              Go to Entrepreneurship
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Navigate to Entrepreneurship Site</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Are you sure you want to navigate to the Entrepreneurship site? This will take you to a dedicated section focused on our business development programs.
            </p>
            <div className="flex gap-4 justify-end">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button asChild>
                <Link to="/entrepreneurship" onClick={() => setIsOpen(false)}>
                  Continue
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};