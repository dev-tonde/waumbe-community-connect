import { useEffect } from "react";

interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  schema?: Record<string, any>;
}

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  alternateName: string;
  url: string;
  logo: string;
  description: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  foundingDate: string;
  nonprofitStatus: string;
}

// Enhanced SEO component to replace react-helmet-async
const SEOManager = ({
  title = "Waumbe - Empowering Communities Through Education & Innovation",
  description = "Cape Town-based nonprofit transforming communities through education, youth empowerment, entrepreneurship, and innovation programs. Join us in making a lasting impact.",
  keywords = "nonprofit, education, youth empowerment, Cape Town, community development, entrepreneurship, skills development, South Africa, TVET, higher education, job creation",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = window.location.href,
  type = "website",
  author = "Waumbe Youth Development Centre",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  schema
}: PageSEOProps) => {
  const fullTitle = title.includes("Waumbe") ? title : `${title} | Waumbe`;
  
  // Base organization schema
  const organizationSchema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "NonProfitOrganization",
    name: "Waumbe Youth Development Centre",
    alternateName: "Waumbe NPO",
    url: "https://waumbe.org",
    logo: "https://waumbe.org/logo.png",
    description: "Cape Town-based nonprofit transforming communities through education, youth empowerment, entrepreneurship, and innovation programs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cape Town",
      addressLocality: "Cape Town",
      addressRegion: "Western Cape",
      postalCode: "8000",
      addressCountry: "ZA"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@waumbe.org"
    },
    sameAs: [
      "https://www.facebook.com/waumbe",
      "https://twitter.com/waumbe",
      "https://linkedin.com/company/waumbe"
    ],
    foundingDate: "2015",
    nonprofitStatus: "Registered NPO"
  };

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

    // Basic SEO meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", author);
    setMetaTag("robots", "index, follow");
    setMetaTag("googlebot", "index, follow");
    setMetaTag("bingbot", "index, follow");
    setMetaTag("language", "English");
    
    // Geographic information for GEO optimization
    setMetaTag("geo.region", "ZA-WC");
    setMetaTag("geo.placename", "Cape Town");
    setMetaTag("geo.position", "-33.9249;18.4241");
    setMetaTag("ICBM", "-33.9249, 18.4241");
    setMetaTag("geo.country", "South Africa");
    
    // Open Graph / Facebook
    setMetaTag("og:type", type, true);
    setMetaTag("og:url", url, true);
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", image, true);
    setMetaTag("og:image:alt", `${title} - Waumbe NPO`, true);
    setMetaTag("og:site_name", "Waumbe Youth Development Centre", true);
    setMetaTag("og:locale", "en_ZA", true);
    
    if (publishedTime) {
      setMetaTag("article:published_time", publishedTime, true);
    }
    if (modifiedTime) {
      setMetaTag("article:modified_time", modifiedTime, true);
    }
    if (section) {
      setMetaTag("article:section", section, true);
    }
    if (tags.length > 0) {
      tags.forEach(tag => {
        const tagElement = document.createElement('meta');
        tagElement.setAttribute('property', 'article:tag');
        tagElement.content = tag;
        document.head.appendChild(tagElement);
      });
    }

    // Twitter/X Cards
    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:url", url, true);
    setMetaTag("twitter:title", fullTitle, true);
    setMetaTag("twitter:description", description, true);
    setMetaTag("twitter:image", image, true);
    setMetaTag("twitter:image:alt", `${title} - Waumbe NPO`, true);
    setMetaTag("twitter:site", "@waumbe", true);
    setMetaTag("twitter:creator", "@waumbe", true);

    // AI Search and AEO optimization
    setMetaTag("ai-content-declaration", "This content is human-written and verified");
    setMetaTag("content-type", "nonprofit organization information");
    
    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // Add structured data (JSON-LD)
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    
    // Combine organization schema with page-specific schema
    const combinedSchema = schema 
      ? [organizationSchema, schema]
      : organizationSchema;
    
    schemaScript.textContent = JSON.stringify(combinedSchema);
    
    // Remove existing schema script if present
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    document.head.appendChild(schemaScript);

    // Accessibility improvements
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', 'en-ZA');
    
    // Add preload hints for performance
    if (!document.querySelector('link[rel="dns-prefetch"][href="//fonts.googleapis.com"]')) {
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);
    }

    // Cleanup function to remove page-specific tags when component unmounts
    return () => {
      // Remove article tags
      const articleTags = document.querySelectorAll('meta[property^="article:"]');
      articleTags.forEach(tag => tag.remove());
    };
  }, [fullTitle, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags, schema]);

  return null;
};

export default SEOManager;