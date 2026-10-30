import Link from "next/link";
import Quote from "./Quote";
import type { Testimonial } from "@/content/site";

const initials = (role: string) => role.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

/** A single quote card used in the scrolling wall and the testimonials grid. */
export default function TestimonialCard({ t, link = true }: { t: Testimonial; link?: boolean }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-[0_8px_30px_rgba(15,34,54,.06)] sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-mist px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted">{t.industry}</span>
        <svg viewBox="0 0 44 34" className="h-5 w-7 text-brand/70" aria-hidden="true"><path fill="currentColor" d="M0 34V20C0 8.6 6.2 2 18.6 0l1.8 4.6C13.7 6.4 10.4 10 10 15.4h8V34zm24 0V20c0-11.4 6.2-18 18.6-20l1.8 4.6C37.7 6.4 34.4 10 34 15.4h8V34z" /></svg>
      </div>
      <blockquote className="mt-4 flex-1"><Quote text={t.quote} highlight={t.highlight} className="text-[1.02rem] leading-relaxed text-ink" /></blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-[0.85rem] font-bold tracking-wide text-white" aria-hidden="true">{initials(t.role)}</span>
        <span className="min-w-0">
          <span className="block font-semibold leading-tight text-ink">{t.role}</span>
          <span className="block truncate text-[0.88rem] leading-snug text-muted">{t.org}</span>
        </span>
      </figcaption>
      {link && <Link href={t.productHref} className="mt-4 text-[0.88rem] font-semibold text-water hover:underline">{t.product} →</Link>}
    </figure>
  );
}
