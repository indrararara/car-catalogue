/**
 * Google Analytics 4 (GA4) Tracking Module
 * 
 * HOW TO CHANGE MEASUREMENT ID:
 * Replace the value of GA_MEASUREMENT_ID below with your actual GA4 Measurement ID.
 * You can find it in Google Analytics > Admin > Data Streams > Web.
 * 
 * WHERE GA4 IS ADDED:
 * The gtag.js script is injected into the <head> of the document when initGA4() is called.
 * This happens once when the app loads (see Index.tsx).
 */

// Placeholder Measurement ID — replace with your real GA4 ID
const GA_MEASUREMENT_ID = "G-3XYY6EEE00";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** Initialize GA4 by injecting gtag.js script into <head> */
export function initGA4() {
  if (typeof window === "undefined") return;

  // Inject the gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}

/**
 * Track a custom GA4 event.
 * 
 * WHERE EVENTS ARE TRACKED:
 * Each function below is called from UI components when the user performs an action.
 * See CarCard.tsx, Index.tsx, and CarDetailsModal.tsx for usage.
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
  console.log(`[GA4 Event] ${eventName}`, params);
}

// Custom event trackers
export const trackViewCarDetails = (carName: string) =>
  trackEvent("view_car_details", { car_name: carName });

export const trackAddToWishlist = (carName: string) =>
  trackEvent("add_to_wishlist", { car_name: carName });

export const trackSearchCar = (query: string) =>
  trackEvent("search_car", { search_term: query });

export const trackFilterApplied = (filterType: string, value: string) =>
  trackEvent("filter_applied", { filter_type: filterType, filter_value: value });

export const trackCompareCars = (cars: string[]) =>
  trackEvent("compare_cars", { compared_cars: cars.join(", ") });

export const trackContactDealer = (carName: string) =>
  trackEvent("contact_dealer", { car_name: carName });

export const trackDarkModeToggle = (enabled: boolean) =>
  trackEvent("dark_mode_toggle", { dark_mode: enabled });
