import { useEffect } from "react";
import { SITE_CONFIG } from "@shared/const";

type PhoneOfferModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PhoneOfferModal({ open, onClose }: PhoneOfferModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="phone-offer-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white text-center shadow-2xl ring-1 ring-amber-100">
        <button
          type="button"
          onClick={onClose}
          aria-label="إغلاق نافذة العروض"
          className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
        >
          ×
        </button>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 px-6 pb-8 pt-10 text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-4xl shadow-inner">
            📞
          </div>
          <p className="mb-2 text-sm font-bold tracking-wide text-amber-100">عرض خاص لفترة محدودة</p>
          <h2 id="phone-offer-title" className="text-2xl font-black leading-relaxed">
            اتصل الآن للحصول على عروضنا
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/90">
            فني متخصص يصل إليك بسرعة، ومعاينة أولية مجانية وأسعار مناسبة لخدمات تسليك المجاري بالرياض.
          </p>
        </div>

        <div className="space-y-3 px-6 py-6">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-600 px-5 py-4 text-lg font-black text-white shadow-lg shadow-amber-600/20 transition hover:-translate-y-0.5 hover:bg-amber-700"
          >
            <span aria-hidden="true">☎</span>
            اتصل للحصول على العرض
          </a>
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-5 py-4 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-700"
          >
            <span aria-hidden="true">💬</span>
            راسلنا على واتساب
          </a>
          <p className="pt-1 text-sm font-bold tracking-wider text-slate-500" dir="ltr">
            {SITE_CONFIG.phoneDisplay}
          </p>
        </div>
      </div>
    </div>
  );
}
