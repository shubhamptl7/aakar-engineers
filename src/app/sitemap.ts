import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allPages } from "@/content/sitemap";
export const dynamic = "force-static";
// Only pages with real content are listed; "being prepared" pages are noindex and excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  return allPages().filter((p) => p.live && p.href !== "/credits/").map((p) => ({ url: `${site.url}${p.href}` }));
}
