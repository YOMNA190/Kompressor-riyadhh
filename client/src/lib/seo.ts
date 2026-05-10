import { SITE_CONFIG, RIYADH_DISTRICTS } from "@shared/const";

/**
 * SEO Utilities for Kompressor Riyadh
 * Handles dynamic metadata, schema generation, and SEO optimization
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  ogUrl: string;
  twitterCard: string;
}

export interface SchemaMarkup {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

/**
 * Generate dynamic meta tags for a page
 */
export function generateMetadata(
  pageTitle: string,
  pageDescription: string,
  keywords: string[],
  pathname: string,
  ogImage?: string
): SEOMetadata {
  const fullTitle = `${pageTitle} | ${SITE_CONFIG.name}`;
  const canonicalUrl = `${SITE_CONFIG.url}${pathname}`;

  return {
    title: fullTitle,
    description: pageDescription,
    keywords,
    canonical: canonicalUrl,
    ogTitle: fullTitle,
    ogDescription: pageDescription,
    ogImage,
    ogUrl: canonicalUrl,
    twitterCard: "summary_large_image",
  };
}

/**
 * Generate LocalBusiness Schema for main page
 */
export function generateLocalBusinessSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "الرياض",
      addressLocality: "الرياض",
      addressRegion: "الرياض",
      postalCode: "11111",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.lat,
      longitude: SITE_CONFIG.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "الرياض",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://wa.me/966576572402",
      "https://www.google.com/maps/search/kompressor+riyadh",
    ],
  };
}

/**
 * Generate Service Schema
 */
export function generateServiceSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "تسليك مجاري بالكمبروسر",
    description: "خدمة تسليك مجاري احترافية بأحدث أجهزة الكمبروسر الألمانية",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: {
      "@type": "City",
      name: "الرياض",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
    },
  };
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ Schema
 */
export function generateFAQSchema(
  items: Array<{ question: string; answer: string }>
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    sameAs: ["https://wa.me/966576572402"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: SITE_CONFIG.phone,
      availableLanguage: ["ar", "en"],
    },
  };
}

/**
 * Generate District Page Schema
 */
export function generateDistrictSchema(districtSlug: string): SchemaMarkup {
  const district = RIYADH_DISTRICTS.find((d: any) => d.slug === districtSlug);
  if (!district) return { "@context": "https://schema.org", "@type": "Thing" };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_CONFIG.name} - ${district.name}`,
    description: district.description,
    url: `${SITE_CONFIG.url}/district/${district.slug}`,
    telephone: SITE_CONFIG.phone,
    areaServed: {
      "@type": "City",
      name: district.name,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.lat,
      longitude: SITE_CONFIG.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
    },
  };
}

/**
 * Generate Sitemap XML content
 */
export function generateSitemapXML(): string {
  const baseUrl = SITE_CONFIG.url;
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // Add district pages
  RIYADH_DISTRICTS.forEach((district: any) => {
    xml += `  <url>
    <loc>${baseUrl}/district/${district.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  return xml;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /
Allow: /district/
Disallow: /admin/
Disallow: /api/

Sitemap: ${SITE_CONFIG.url}/sitemap.xml

User-agent: Googlebot
Allow: /
Allow: /district/

User-agent: Bingbot
Allow: /
Allow: /district/

# Crawl delay
Crawl-delay: 1

# Request rate
Request-rate: 1/1s
`;
}

/**
 * Get district by slug
 */
export function getDistrictBySlug(slug: string) {
  return RIYADH_DISTRICTS.find((d: any) => d.slug === slug);
}

/**
 * Get all district slugs for static generation
 */
export function getAllDistrictSlugs(): string[] {
  return RIYADH_DISTRICTS.map((d: any) => d.slug);
}

/**
 * Generate internal linking structure
 */
export function generateInternalLinks(currentPath: string) {
  const links: Array<{ href: string; text: string; rel?: string }> = [
    { href: "/", text: "الرئيسية" },
  ];

  // Add district links if not on district page
  if (!currentPath.startsWith("/district/")) {
    links.push(...RIYADH_DISTRICTS.slice(0, 5).map((d: any) => ({ href: `/district/${d.slug}`, text: d.name })));
  }

  return links;
}

/**
 * Optimize text for CTR (Click-Through Rate)
 */
export function optimizeForCTR(text: string): string {
  // Add power words and emotional triggers
  const ctrPatterns = [
    { pattern: /اتصل/g, replacement: "اتصل الآن" },
    { pattern: /اطلب/g, replacement: "اطلب الخدمة الآن" },
    { pattern: /تسليك/g, replacement: "تسليك احترافي" },
  ];

  let optimized = text;
  ctrPatterns.forEach((p: any) => {
    optimized = optimized.replace(p.pattern, p.replacement);
  });

  return optimized;
}
