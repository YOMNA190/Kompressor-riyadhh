import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function reportConversion(url?: string) {
  if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
    (window as any).gtag_report_conversion(url);
  } else if (typeof window !== "undefined" && (window as any).gtag) {
    // Original conversion
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18152107352/xaiGCIeesqscENjazM9D'
    });
    // New conversion from user
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18152084922/PrPzCK_vr6scELqry89D'
    });
    if (url) {
      window.location.href = url;
    }
  }
}
