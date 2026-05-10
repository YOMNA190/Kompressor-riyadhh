import { SITE_CONFIG, RIYADH_DISTRICTS } from "@shared/const";

/**
 * Footer Component
 * Comprehensive footer with links, contact info, and SEO optimization
 */
export function Footer() {
  const districtLinks = RIYADH_DISTRICTS.slice(0, 8);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-black">
                ك
              </div>
              <h3 className="font-black text-white text-lg">كمبروسور اكسبريس</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-amber-500">📍</span> {SITE_CONFIG.address}
              </p>
              <p>
                <span className="text-amber-500">📞</span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-amber-500 transition-colors duration-300 ml-2"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-amber-500">✉️</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-amber-500 transition-colors duration-300 ml-2"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  الخدمات
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  اتصل بنا
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  واتساب
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Districts */}
          <div>
            <h4 className="font-bold text-white mb-4">الأحياء الشهيرة</h4>
            <ul className="space-y-2 text-sm">
              {districtLinks.map((district) => (
                <li key={district.id}>
                  <a
                    href={`/district/${district.slug}`}
                    className="hover:text-amber-500 transition-colors duration-300"
                  >
                    {district.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Services */}
          <div>
            <h4 className="font-bold text-white mb-4">ساعات العمل</h4>
            <p className="text-sm mb-4">متاح 24 ساعة يومياً</p>
            <h4 className="font-bold text-white mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ تسليك المجاري</li>
              <li>✓ تسليك البيارات</li>
              <li>✓ شفط الصرف</li>
              <li>✓ تنظيف الخزانات</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; 2024 {SITE_CONFIG.name}. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors duration-300">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors duration-300">
              شروط الاستخدام
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors duration-300">
              خريطة الموقع
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
          <div className="text-center">
            <p className="text-amber-500 font-bold">4.9 ⭐</p>
            <p>تقييم العملاء</p>
          </div>
          <div className="text-center">
            <p className="text-amber-500 font-bold">187+</p>
            <p>عميل راضي</p>
          </div>
          <div className="text-center">
            <p className="text-amber-500 font-bold">30 دقيقة</p>
            <p>وصول سريع</p>
          </div>
          <div className="text-center">
            <p className="text-amber-500 font-bold">30 يوم</p>
            <p>ضمان كامل</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
