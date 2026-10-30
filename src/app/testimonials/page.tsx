import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import Quote from "@/components/Quote";
import TestimonialShowcase from "@/components/TestimonialShowcase";
import { photo, testimonials, whatsappLink } from "@/content/site";

const hasSamples = testimonials.some((t) => t.sample);

export const metadata: Metadata = {
  title: "Client Stories & Testimonials",
  description: "What clients say about Aakar Engineers' cooling towers, water and effluent treatment plants, chemicals and service.",
  alternates: { canonical: "/testimonials/" },
  // Indexed only once approved testimonials replace the illustrative ones.
  robots: hasSamples ? { index: false, follow: true } : undefined,
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner photo={photo.towersHvac} crumbs={[{ href: "/", label: "Home" }, { href: "/about/", label: "About Us" }, { label: "Testimonials" }]} kicker="Client stories" title="What our clients say" sub="Plant heads, utility managers and EHS teams on working with Aakar." />

      <section className="bg-mist py-16 lg:py-20">
        <div className="container-x">
          <p className="eyebrow">Featured</p>
          <h2 className="title-lg mt-3">Stories from the plant floor</h2>
          <TestimonialShowcase />
        </div>
      </section>

      <section className="container-x py-16 lg:py-20">
        <h2 className="title-lg">All client stories</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, k) => (
            <li key={k} className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
              <div className="relative h-36 overflow-hidden bg-navy">
                <Photo base={t.photo} alt="" widths={[800]} sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="h-full w-full object-cover opacity-90" />
                <span className="absolute left-4 top-4 rounded bg-brand px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">{t.industry}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <blockquote className="flex-1"><Quote text={t.quote} highlight={t.highlight} className="text-[1.15rem] leading-snug text-ink [font-family:var(--font-head)]" /></blockquote>
                <p className="mt-5 text-[0.92rem]"><span className="font-semibold text-ink">Outcome:</span> {t.outcome}</p>
                <div className="mt-4 border-t border-line pt-4">
                  <span className="block font-semibold text-ink">{t.role}</span>
                  <span className="block text-[0.92rem]">{t.org}</span>
                  <Link href={t.productHref} className="mt-2 inline-block text-[0.9rem] font-semibold text-water hover:underline">{t.product} →</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-brand">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 text-white lg:flex-row lg:items-center">
          <div>
            <h2 className="title-lg !text-white">Are you an Aakar client?</h2>
            <p className="mt-2 text-lg text-white/90">We would value your feedback on our equipment and service.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="btn bg-white text-brand-dark hover:bg-white/90">Share your feedback</Link>
            <a href={whatsappLink("Hello Aakar Engineers, I would like to share feedback.")} className="btn btn-ghost-light">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
