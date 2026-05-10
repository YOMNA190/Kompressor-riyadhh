import { SITE_CONFIG, RIYADH_DISTRICTS } from "@shared/const";

/**
 * Generate Sitemap XML
 * Includes main page and all district pages
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
 * Get sitemap as string for serving
 */
export function getSitemapContent(): string {
  return generateSitemapXML();
}
