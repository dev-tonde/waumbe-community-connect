import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function FloatingMainSiteButton() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  // Only show on entrepreneurship routes
  if (!pathname.startsWith("/entrepreneurship")) return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
      animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
      transition={reduceMotion ? undefined : { delay: 0.6, duration: 0.4 }}
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
    >
      <Button
        asChild
        className="bg-waumbe hover:bg-waumbe/90 text-waumbe-foreground shadow-lg rounded-full px-6 py-3 font-semibold"
        aria-label="Back to main site"
      >
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to Main Site</span>
        </Link>
      </Button>
    </motion.div>
  );
}
