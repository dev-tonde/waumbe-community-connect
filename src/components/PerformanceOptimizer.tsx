import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Lazy load images with intersection observer
    const lazyImages = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.01,
      }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImages = [
        "/src/assets/hero-image.jpg",
        "/src/assets/hero-banner.jpg",
      ];

      heroImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const criticalFonts = [
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      ];

      criticalFonts.forEach((href) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = href;
        link.onload = () => {
          link.rel = "stylesheet";
        };
        document.head.appendChild(link);
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll("script[data-defer]");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.src = (script as HTMLScriptElement).src;
        newScript.defer = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };

    // Web Vitals optimization
    const optimizeWebVitals = () => {
      // Reduce layout shift by setting image dimensions
      const images = document.querySelectorAll(
        "img:not([width]):not([height])"
      );
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.naturalWidth && imageElement.naturalHeight) {
          imageElement.style.aspectRatio = `${imageElement.naturalWidth} / ${imageElement.naturalHeight}`;
        }
      });

      // Optimize text rendering
      document.fonts.ready.then(() => {
        document.body.classList.add("fonts-loaded");
      });
    };

    // Connection-aware loading
    const optimizeForConnection = () => {
      if ("connection" in navigator) {
        const connection = (navigator as any).connection;

        if (connection) {
          // Reduce quality for slower connections
          if (
            connection.effectiveType === "slow-2g" ||
            connection.effectiveType === "2g"
          ) {
            document.documentElement.classList.add("slow-connection");
          }

          // Save data mode
          if (connection.saveData) {
            document.documentElement.classList.add("save-data");
          }
        }
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeThirdPartyScripts();
    optimizeWebVitals();
    optimizeForConnection();

    // Cleanup
    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
