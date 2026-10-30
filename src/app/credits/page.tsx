import type { Metadata } from "next";
import credits from "@/content/credits.json";

export const metadata: Metadata = { title: "Image credits", robots: { index: false, follow: true } };

export default function Credits() {
  return (
    <section className="container-x py-16 lg:py-20">
      <h1 className="title-lg">Image credits</h1>
      <p className="mt-3 max-w-2xl">Photographs used on this website for illustration, from Wikimedia Commons, used under the licences below. They do not show Aakar Engineers installations unless stated.</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {credits.map((c) => (
          <li key={c.key} className="py-4">
            <a href={c.source} className="link" rel="noopener">{c.title}</a>
            <span className="block text-[0.95rem]">By {c.author || "unknown"} · <a href={c.licenseUrl} className="underline" rel="noopener license">{c.license}</a></span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[0.95rem]">Product photographs marked as Aakar&apos;s are from aakarengineers.com. Client logos are the property of their respective owners.</p>
    </section>
  );
}
