"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview, event } from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  // GA4 conversions for phone and WhatsApp clicks, wherever the link sits on the page.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) event("phone_click", { page_path: location.pathname });
      else if (/wa\.me|whatsapp\.com/.test(href)) event("whatsapp_click", { page_path: location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
