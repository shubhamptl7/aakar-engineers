import Link from "next/link";
import Quote from "./Quote";
import type { Testimonial } from "@/content/site";

/** Large editorial quote that opens the testimonials section. */
export default function FeaturedQuote({ t }: { t: Testimonial }) {
  const initials = t.role.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <figure className="relative mx-auto max-w-5xl text-center">
      <svg viewBox="0 0 44 34" aria-hidden="true" className="pointer-events-none absolute -top-6 left-1/2 h-28 w-36 -translate-x-1/2 text-brand/10 sm:h-36 sm:w-44"><path fill="currentColor" d="M0 34V20C0 8.6 6.2 2 18.6 0l1.8 4.6C13.7 6.4 10.4 10 10 15.4h8V34zm24 0V20c0-11.4 6.2-18 18.6-20l1.8 4.6C37.7 6.4 34.4 10 34 15.4h8V34z" /></svg>
      <blockquote className="relative pt-10 sm:pt-12">
        <Quote text={t.quote} highlight={t.highlight} className="text-[1.6rem] leading-[1.25] text-ink [font-family:var(--font-head)] sm:text-[2.2rem] lg:text-[2.7rem]" />
      </blockquote>
      <figcaption className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold tracking-wide text-white" aria-hidden="true">{initials}</span>
        <span className="text-center sm:text-left">
          <span className="block text-lg font-semibold text-ink">{t.role}</span>
          <span className="block text-[0.95rem] text-muted">{t.org}</span>
        </span>
        <Link href={t.productHref} className="rounded-full border border-line bg-white px-4 py-2 text-[0.9rem] font-semibold text-water hover:border-water sm:ml-4">{t.product} →</Link>
      </figcaption>
    </figure>
  );
}
