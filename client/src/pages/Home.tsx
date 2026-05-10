import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import {
  generateMetadata,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
} from "@/lib/seo";
import { SITE_CONFIG, FAQ_ITEMS } from "@shared/const";

/**
 * Home Page
 * Main landing page for Kompressor Riyadh
 * Optimized for SEO and high conversion
 */
export default function Home() {
  // Generate SEO metadata
  const metadata = generateMetadata(
    SITE_CONFIG.title,
    SITE_CONFIG.description,
    [
      "تسليك مجاري بالرياض",
      "تسليك مجاري بالكمبروسر",
      "شركة تسليك مجاري",
      "فتح مجاري",
      "خدمة 24 ساعة",
    ],
    "/"
  );

  // Generate schema markup
  const schemas = [
    generateLocalBusinessSchema(),
    generateServiceSchema(),
    generateFAQSchema(FAQ_ITEMS),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: SITE_CONFIG.url },
    ]),
    generateOrganizationSchema(),
  ];

  // Handle CTA click
  const handleCallClick = () => {
    window.location.href = `tel:${SITE_CONFIG.phone}`;
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <SEOHead metadata={metadata} schemas={schemas} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection
          title="أفضل شركة"
          subtitle="تسليك مجاري بالرياض"
          description="خدمة تسليك مجاري احترافية باستخدام أحدث أجهزة الكمبروسر الألمانية بضغط 4000 PSI. فنيون متخصصون، ضمان 30 يوم، وصول سريع 30 دقيقة."
          badge="الخيار الأول في الرياض"
          primaryCTA={{
            text: "اطلب الخدمة الآن",
            action: handleCallClick,
          }}
          secondaryCTA={{
            text: "استعرض الخدمات",
            href: "#services",
          }}
        />

        {/* Services Section */}
        <ServicesSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 left-8 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 animate-bounce"
          title="تواصل عبر الواتساب"
        >
          💬
        </a>
      </div>
    </>
  );
}
