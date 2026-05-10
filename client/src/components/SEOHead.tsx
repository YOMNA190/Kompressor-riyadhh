import { SEOMetadata, SchemaMarkup } from "@/lib/seo";

interface SEOHeadProps {
  metadata: SEOMetadata;
  schemas?: SchemaMarkup[];
}

/**
 * SEO Head Component
 * Injects dynamic meta tags and schema markup into the document head
 */
export function SEOHead({ metadata, schemas = [] }: SEOHeadProps) {
  // Update document title
  React.useEffect(() => {
    document.title = metadata.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement("meta");
        if (isProperty) {
          tag.setAttribute("property", name);
        } else {
          tag.setAttribute("name", name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Standard meta tags
    updateMetaTag("description", metadata.description);
    updateMetaTag("keywords", metadata.keywords.join(", "));
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "ar");
    updateMetaTag("revisit-after", "7 days");

    // Open Graph
    updateMetaTag("og:title", metadata.ogTitle, true);
    updateMetaTag("og:description", metadata.ogDescription, true);
    updateMetaTag("og:url", metadata.ogUrl, true);
    updateMetaTag("og:type", "website", true);
    if (metadata.ogImage) {
      updateMetaTag("og:image", metadata.ogImage, true);
    }

    // Twitter Card
    updateMetaTag("twitter:card", metadata.twitterCard);
    updateMetaTag("twitter:title", metadata.ogTitle);
    updateMetaTag("twitter:description", metadata.ogDescription);
    if (metadata.ogImage) {
      updateMetaTag("twitter:image", metadata.ogImage);
    }

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;

    // Add schema markup
    schemas.forEach((schema) => {
      const scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    });

    return () => {
      // Cleanup is optional here as we want to keep the tags
    };
  }, [metadata, schemas]);

  return null;
}

// Re-export React for use in component
import React from "react";
