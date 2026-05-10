import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@shared/const";

/**
 * Header/Navigation Component
 * Sticky header with navigation links and CTA buttons
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "الخدمات" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-black text-xl">
              ك
            </div>
            <div className="hidden sm:block">
              <h1 className="font-black text-lg text-gray-900">كمبروسور</h1>
              <p className="text-xs text-gray-600">تسليك مجاري احترافي</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-semibold hover:text-amber-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              <span>💬</span>
              <span className="hidden lg:inline">واتساب</span>
            </a>

            <Button
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-lg"
              asChild
            >
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <span className="hidden sm:inline">📞</span>
                <span className="hidden lg:inline ml-2">اتصل الآن</span>
                <span className="lg:hidden">اتصل</span>
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 font-semibold hover:text-amber-600 transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 text-center"
            >
              💬 واتساب
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
