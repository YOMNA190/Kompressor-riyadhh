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
    // Track for the new conversion ID: AW-18009279735/hCcWCMDon9IcEPeZv4tD
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18009279735/hCcWCMDon9IcEPeZv4tD',
      'event_callback': callback
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
