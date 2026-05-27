declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function pageview(url: string): void {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag("config", GA_ID, { page_path: url });
}

export function event(action: string, params: Record<string, unknown> = {}): void {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag("event", action, params);
}

export { GA_ID };
