import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

const SITE_NAME = "VisionCraft — Digital Vision Board";

const SEO = ({ title, description, image, canonicalPath, structuredData }: SEOProps) => {
  const location = useLocation();
  const url = (typeof window !== 'undefined' ? window.location.origin : '') + (canonicalPath ?? location.pathname);

  return (
    <Helmet>
      <title>{title} | {SITE_NAME}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={`${title} | ${SITE_NAME}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;