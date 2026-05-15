import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@shared/const";
import { reportConversion } from "@/lib/utils";

/**
 * Contact Section Component
 * High-conversion contact section with multiple CTA options
 */
export function ContactSection() {
  const handlePhoneClick = () => {
    reportConversion();
    window.location.href = `tel:${SITE_CONFIG.phone}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">اتصل بنا الآن</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            فريقنا جاهز لخدمتك 24 ساعة يومياً، 7 أيام في الأسبوع
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-amber-500 transition-colors duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              📞
            </div>
            <h3 className="text-2xl font-bold mb-4">اتصل بنا</h3>
            <p className="text-gray-400 mb-6">
              تحدث مباشرة مع فريقنا للحصول على استشارة فورية
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              onClick={() => reportConversion()}
              className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-orange-500 transition-colors duration-300"
            >
              {SITE_CONFIG.phoneDisplay}
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-colors duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              💬
            </div>
            <h3 className="text-2xl font-bold mb-4">واتساب</h3>
            <p className="text-gray-400 mb-6">
              أرسل رسالة عبر الواتساب واحصل على رد سريع
            </p>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reportConversion()}
              className="inline-flex items-center gap-2 text-green-500 font-bold hover:text-green-400 transition-colors duration-300"
            >
              فتح الواتساب
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              ✉️
            </div>
            <h3 className="text-2xl font-bold mb-4">البريد الإلكتروني</h3>
            <p className="text-gray-400 mb-6">
              أرسل لنا بريد إلكتروني مع تفاصيل طلبك
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors duration-300"
            >
              {SITE_CONFIG.email}
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">احصل على عرض سعر مجاني الآن</h3>
          <p className="text-lg opacity-90 mb-8">
            لا تتردد، فريقنا جاهز لمساعدتك فوراً
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl"
              onClick={handlePhoneClick}
            >
              <span className="mr-2">📞</span>
              اتصل الآن
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-xl"
              onClick={() => reportConversion()}
              asChild
            >
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer">
                <span className="mr-2">💬</span>
                واتساب
              </a>
            </Button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl font-black text-amber-500 mb-2">24/7</div>
            <p className="text-gray-400">متاح طوال الوقت</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-orange-500 mb-2">30 دقيقة</div>
            <p className="text-gray-400">وصول سريع</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-amber-500 mb-2">30 يوم</div>
            <p className="text-gray-400">ضمان كامل</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-orange-500 mb-2">4.9 ⭐</div>
            <p className="text-gray-400">تقييم ممتاز</p>
          </div>
        </div>
      </div>
    </section>
  );
}
