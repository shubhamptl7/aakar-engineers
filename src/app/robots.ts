import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export const dynamic = "force-static";
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export default function robots(): MetadataRoute.Robots {
  return indexable
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
