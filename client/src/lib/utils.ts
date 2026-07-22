import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Google Ads conversion tracking (AW-18009279735)
// "انقر للاتصال" (click-to-call) conversions — fired on every phone click
const PHONE_CONVERSION_IDS = [
  "AW-18009279735/ZlPUCL3on9IcEPeZv4tD",
  "AW-18009279735/c__OCNvio9IcEPeZv4tD",
];
// "جهة اتصال" (contact) conversion — fired on WhatsApp clicks
const CONTACT_CONVERSION_ID = "AW-18009279735/hCcWCMDon9IcEPeZv4tD";

function fireConversions(sendTo: string[], url?: string) {
  if (typeof window === "undefined") return;

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  const gtag = (window as any).gtag;
  if (gtag) {
    sendTo.forEach((id, i) => {
      gtag("event", "conversion", {
        send_to: id,
        // Only navigate/callback once, after the last conversion fires
        ...(i === sendTo.length - 1 ? { event_callback: callback } : {}),
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

/** Fire on any phone number click (tel: links/buttons). */
export function reportPhoneConversion(url?: string) {
  fireConversions(PHONE_CONVERSION_IDS, url);
}

/** Fire on any WhatsApp click. */
export function reportContactConversion(url?: string) {
  fireConversions([CONTACT_CONVERSION_ID], url);
}
