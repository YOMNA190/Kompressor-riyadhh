import { Card } from "@/components/ui/card";
import { SERVICES } from "@shared/const";

/**
 * Services Section Component
 * Displays all services with detailed descriptions
 * Optimized for SEO and user engagement
 */
export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات تسليك المجاري والصرف الصحي باستخدام أحدث التقنيات
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-gray-100"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="p-8 relative z-10">
                {/* Service Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Service Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon === "fa-water" && "💧"}
                  {service.icon === "fa-droplet" && "🌊"}
                  {service.icon === "fa-truck" && "🚚"}
                  {service.icon === "fa-cube" && "📦"}
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-amber-600 font-semibold text-sm hover:text-orange-600 transition-colors duration-300"
                >
                  اطلب الخدمة
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>

              {/* Decorative border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-amber-600 mb-2">4000</div>
              <p className="text-gray-700 font-semibold">PSI ضغط مائي</p>
              <p className="text-gray-600 text-sm mt-1">أقوى أجهزة في السوق</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">30</div>
              <p className="text-gray-700 font-semibold">دقيقة وصول سريع</p>
              <p className="text-gray-600 text-sm mt-1">استجابة فورية 24/7</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">ضمان الرضا</p>
              <p className="text-gray-600 text-sm mt-1">ضمان 30 يوم على الخدمة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
