import { useEffect } from "react";

interface AccessibilityEnhancementsProps {
  pageTitle?: string;
}

const AccessibilityEnhancements = ({ pageTitle }: AccessibilityEnhancementsProps) => {
  useEffect(() => {
    // Announce page changes to screen readers
    if (pageTitle) {
      // Create a live region for screen reader announcements
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.id = 'page-announcer';
      
      // Remove existing announcer if present
      const existing = document.getElementById('page-announcer');
      if (existing) {
        existing.remove();
      }
      
      document.body.appendChild(announcer);
      
      // Announce the page change
      setTimeout(() => {
        announcer.textContent = `Navigated to ${pageTitle} page`;
      }, 100);
    }

    // Enhanced focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip links navigation with F6
      if (e.key === 'F6') {
        e.preventDefault();
        const skipLinks = document.querySelectorAll('a[href^="#"]');
        const currentFocus = document.activeElement as HTMLElement;
        const currentIndex = Array.from(skipLinks).indexOf(currentFocus);
        const nextIndex = (currentIndex + 1) % skipLinks.length;
        (skipLinks[nextIndex] as HTMLElement)?.focus();
      }

      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
        openModals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label*="close" i], [data-dismiss]');
          (closeButton as HTMLElement)?.click();
        });
      }
    };

    // Enhanced focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Enhanced focus indicators for better accessibility */
        *:focus-visible {
          outline: 3px solid hsl(var(--ring)) !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          *:focus-visible {
            outline: 3px solid currentColor !important;
            background-color: HighlightText !important;
            color: Highlight !important;
          }
        }
        
        /* Skip link styling */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          padding: 8px 16px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          z-index: 9999;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        /* Screen reader only content */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        .sr-only:focus {
          position: static !important;
          width: auto !important;
          height: auto !important;
          padding: inherit !important;
          margin: inherit !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }
      `;
      
      const existingStyle = document.getElementById('accessibility-enhancements');
      if (existingStyle) {
        existingStyle.remove();
      }
      
      style.id = 'accessibility-enhancements';
      document.head.appendChild(style);
    };

    // Color contrast improvements
    const enhanceColorContrast = () => {
      // Add high contrast mode detection
      const preferredContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateContrast = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      updateContrast(preferredContrast);
      if (preferredContrast.addListener) {
        preferredContrast.addListener(updateContrast);
      } else if (preferredContrast.addEventListener) {
        preferredContrast.addEventListener('change', updateContrast);
      }
    };

    // Reduced motion support
    const respectMotionPreferences = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const updateMotion = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      updateMotion(prefersReducedMotion);
      if (prefersReducedMotion.addListener) {
        prefersReducedMotion.addListener(updateMotion);
      } else if (prefersReducedMotion.addEventListener) {
        prefersReducedMotion.addEventListener('change', updateMotion);
      }
    };

    // Initialize enhancements
    addFocusIndicators();
    enhanceColorContrast();
    respectMotionPreferences();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [pageTitle]);

  return null;
};

export default AccessibilityEnhancements;