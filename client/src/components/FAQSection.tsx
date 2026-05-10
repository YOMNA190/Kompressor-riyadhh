import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@shared/const";

/**
 * FAQ Section Component
 * Displays frequently asked questions with accordion
 * Optimized for SEO with schema markup
 */
export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            إجابات شاملة على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-amber-300 transition-colors duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-amber-600 transition-colors duration-300 py-4">
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                      {index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-4 pb-2 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-lg opacity-90 mb-6">
            فريقنا جاهز للإجابة على جميع استفساراتك
          </p>
          <a
            href="https://wa.me/966576572402"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-amber-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            <span>💬</span>
            تواصل معنا عبر الواتساب
          </a>
        </div>
      </div>
    </section>
  );
}
