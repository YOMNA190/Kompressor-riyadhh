import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@shared/const";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  badge?: string;
}

/**
 * Hero Section Component
 * Premium hero section with CTA buttons and trust signals
 * Optimized for Local SEO and high conversion
 */
export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-12">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                {badge}
              </div>
            )}

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                {title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mt-2">
                  {subtitle}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold border-2 border-white"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">+{SITE_CONFIG.reviewCount}</p>
                  <p className="text-gray-600">عميل راضي</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg">
                  ✓
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">وصول سريع</p>
                  <p className="text-gray-600">{SITE_CONFIG.responseTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg">
                  ★
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">{SITE_CONFIG.rating}</p>
                  <p className="text-gray-600">تقييم ممتاز</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={primaryCTA.action}
              >
                <span className="mr-2">📞</span>
                {primaryCTA.text}
              </Button>

              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold text-lg px-8 py-6 rounded-xl"
                  asChild
                >
                  <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                </Button>
              )}
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-600 space-y-2">
              <p>✓ خدمة 24/7 طوال أيام الأسبوع</p>
              <p>✓ فنيون متخصصون وذو خبرة عالية</p>
              <p>✓ ضمان 30 يوم على جميع الخدمات</p>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Animated card */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl mb-4">🔧</div>
                  <h3 className="text-3xl font-bold mb-2">كمبروسور اكسبريس</h3>
                  <p className="text-lg opacity-90">تسليك مجاري احترافي</p>
                  <div className="mt-6 space-y-2 text-sm">
                    <p>✓ ضغط 4000 PSI</p>
                    <p>✓ أجهزة ألمانية أصلية</p>
                    <p>✓ وصول فوري 30 دقيقة</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-gray-400 text-center">
          <p className="text-sm mb-2">اسحب للأسفل</p>
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
