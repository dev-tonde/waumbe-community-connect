import { Helmet } from "react-helmet-async";

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

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Waumbe NPO" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Waumbe" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Language and region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="ZA-WC" />
      <meta name="geo.placename" content="Cape Town" />
      <meta name="geo.position" content="-33.9249;18.4241" />
      <meta name="ICBM" content="-33.9249, 18.4241" />
    </Helmet>
  );
};

export default SEOHelmet;