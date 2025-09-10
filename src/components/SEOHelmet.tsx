import { useEffect } from "react";

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHelmet = ({
  title = "Waumbe - Empowering Communities Through Education & Innovation",
  description = "Cape Town-based nonprofit transforming communities through education, youth empowerment, entrepreneurship, and innovation programs. Join us in making a lasting impact.",
  keywords = "nonprofit, education, youth empowerment, Cape Town, community development, entrepreneurship, skills development, South Africa",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = window.location.href,
  type = "website"
}: SEOHelmetProps) => {
  const fullTitle = title.includes("Waumbe") ? title : `${title} - Waumbe`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Set all meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", "Waumbe NPO");
    setMetaTag("robots", "index, follow");
    setMetaTag("googlebot", "index, follow");
    setMetaTag("bingbot", "index, follow");
    setMetaTag("language", "English");
    setMetaTag("geo.region", "ZA-WC");
    setMetaTag("geo.placename", "Cape Town");
    setMetaTag("geo.position", "-33.9249;18.4241");
    setMetaTag("ICBM", "-33.9249, 18.4241");

    // Open Graph / Facebook
    setMetaTag("og:type", type, true);
    setMetaTag("og:url", url, true);
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", image, true);
    setMetaTag("og:site_name", "Waumbe", true);

    // Twitter
    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:url", url, true);
    setMetaTag("twitter:title", fullTitle, true);
    setMetaTag("twitter:description", description, true);
    setMetaTag("twitter:image", image, true);

    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;
  }, [fullTitle, description, keywords, image, url, type]);

  return null;
};

export default SEOHelmet;