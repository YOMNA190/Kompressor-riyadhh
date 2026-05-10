import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  generateMetadata,
  generateDistrictSchema,
  generateBreadcrumbSchema,
  getDistrictBySlug,
} from "@/lib/seo";
import { SITE_CONFIG, RIYADH_DISTRICTS, FAQ_ITEMS } from "@shared/const";

interface DistrictPageProps {
  slug: string;
}

/**
 * District Page Component
 * Dynamic page for each Riyadh district
 * Optimized for Local SEO and Programmatic SEO
 */
export function DistrictPage({ slug }: DistrictPageProps) {
  const [district, setDistrict] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = getDistrictBySlug(slug);
    setDistrict(found);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>;
  }

  if (!district) {
    return <div className="min-h-screen flex items-center justify-center">الحي غير موجود</div>;
  }

  // Generate SEO metadata for district
  const metadata = generateMetadata(
    `تسليك مجاري ${district.name} - ${SITE_CONFIG.name}`,
    district.description,
    district.keywords,
    `/district/${slug}`
  );

  // Generate schemas
  const schemas = [
    generateDistrictSchema(slug),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: SITE_CONFIG.url },
      { name: "الأحياء", url: `${SITE_CONFIG.url}/districts` },
      { name: district.name, url: `${SITE_CONFIG.url}/district/${slug}` },
    ]),
  ];

  const handleCallClick = () => {
    window.location.href = `tel:${SITE_CONFIG.phone}`;
  };

  return (
    <>
      <SEOHead metadata={metadata} schemas={schemas} />

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                <a href="/" className="hover:text-amber-600">الرئيسية</a>
                <span>/</span>
                <span className="text-amber-600 font-semibold">{district.name}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                تسليك مجاري <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">{district.name}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {district.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-lg px-8 py-6 rounded-xl"
                  onClick={handleCallClick}
                >
                  <span className="mr-2">📞</span>
                  اطلب الخدمة الآن
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold text-lg px-8 py-6 rounded-xl"
                  asChild
                >
                  <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer">
                    💬 واتساب
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Why Choose Us */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-8">لماذا تختار كمبروسور اكسبريس في {district.name}؟</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: "⚡", title: "سرعة الاستجابة", desc: "وصول الفني في غضون 30 دقيقة" },
                    { icon: "🔧", title: "أجهزة حديثة", desc: "كمبروسر ألماني بضغط 4000 PSI" },
                    { icon: "✓", title: "ضمان 30 يوم", desc: "ضمان كامل على جميع الخدمات" },
                    { icon: "👨‍🔧", title: "فنيون متخصصون", desc: "فريق محترف وذو خبرة عالية" },
                  ].map((item, i) => (
                    <div key={i} className="p-6 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services in District */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-8">خدماتنا في {district.name}</h2>
                <div className="space-y-4">
                  {[
                    "تسليك المجاري والأنابيب المسدودة",
                    "فتح البيارات والخزانات",
                    "شفط وتنظيف الصرف الصحي",
                    "تنظيف وتعقيم خزانات المياه",
                    "صيانة دورية للمجاري",
                    "كشف تسريب المياه",
                  ].map((service, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">✓</span>
                      <p className="text-gray-700 font-semibold">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ for District */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-8">أسئلة شائعة عن {district.name}</h2>
                <div className="space-y-4">
                  {FAQ_ITEMS.slice(0, 3).map((item, i) => (
                    <details key={i} className="group border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition-colors cursor-pointer">
                      <summary className="font-bold text-gray-900 flex justify-between items-center">
                        {item.question}
                        <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="text-gray-600 mt-4 leading-relaxed">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">احصل على خدمة تسليك مجاري احترافية الآن</h3>
                <p className="text-lg opacity-90 mb-8">فريقنا جاهز لخدمتك في {district.name} 24/7</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-amber-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl"
                    onClick={handleCallClick}
                  >
                    <span className="mr-2">📞</span>
                    اتصل الآن
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-xl"
                    asChild
                  >
                    <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer">
                      <span className="mr-2">💬</span>
                      واتساب
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Districts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">خدماتنا في أحياء أخرى</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {RIYADH_DISTRICTS.filter((d: any) => d.slug !== slug)
                .slice(0, 8)
                .map((d: any) => (
                  <a
                    key={d.id}
                    href={`/district/${d.slug}`}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 text-center group"
                  >
                    <p className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {d.name}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">تسليك مجاري</p>
                  </a>
                ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
