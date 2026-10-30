import type { MetadataRoute } from "next";
import { site, testimonials } from "@/content/site";
import { allPages } from "@/content/sitemap";
export const dynamic = "force-static";
// Only pages with real content are listed; "being prepared" pages are noindex and excluded.
const hasSamples = testimonials.some((t) => t.sample);
export default function sitemap(): MetadataRoute.Sitemap {
  return allPages()
    .filter((p) => p.live && p.href !== "/credits/" && !(hasSamples && p.href === "/testimonials/"))
    .map((p) => ({ url: `${site.url}${p.href}` }));
}
