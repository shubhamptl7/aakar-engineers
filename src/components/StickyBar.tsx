"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/content/site";

export default function StickyBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;
  const cell = "flex min-h-14 flex-1 items-center justify-center gap-2 text-[0.95rem] font-semibold";
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex bg-white shadow-[0_-2px_14px_rgba(15,34,54,.14)] lg:hidden" role="region" aria-label="Quick contact">
      <a href={`tel:${site.phones.sales.tel}`} className={`${cell} text-ink`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>Call
      </a>
      <a href={whatsappLink()} className={`${cell} bg-[#1fae55] text-white`} rel="noopener">WhatsApp</a>
      <Link href="/contact/" className={`${cell} bg-brand text-white`}>Get a Quote</Link>
    </div>
  );
}
