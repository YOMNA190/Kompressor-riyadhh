import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function reportConversion(url?: string) {
  if (typeof window === "undefined") return;

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  if ((window as any).gtag) {
    // Track for all relevant conversion IDs
    const conversionIds = [
      'AW-18152107352/xaiGCIeesqscENjazM9D',
      'AW-18152084922/PrPzCK_vr6scELqry89D',
      'AW-17714550302/25ENCIrlyNgbEJ6s-v5B'
    ];

    conversionIds.forEach((id, index) => {
      (window as any).gtag('event', 'conversion', {
        'send_to': id,
        'event_callback': index === conversionIds.length - 1 ? callback : undefined
      });
    });

    // Fallback if no callback was triggered (e.g. if gtag failed)
    setTimeout(() => {
      if (url && window.location.href !== url) {
        callback();
      }
    }, 500);
  } else {
    callback();
  }
}
