import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function reportConversion(url?: string) {
  if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
    (window as any).gtag_report_conversion(url);
  } else if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18152107352/xaiGCIeesqscENjazM9D'
    });
    if (url) {
      window.location.href = url;
    }
  }
}
