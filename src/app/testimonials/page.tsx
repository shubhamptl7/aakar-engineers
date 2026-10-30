import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import FeaturedQuote from "@/components/FeaturedQuote";
import TestimonialGrid from "@/components/TestimonialGrid";
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

      <section className="py-16 lg:py-24">
        <div className="container-x"><FeaturedQuote t={testimonials[0]} /></div>
      </section>

      <section className="bg-mist py-16 lg:py-20">
        <div className="container-x">
          <h2 className="title-lg text-center">All client stories</h2>
          <div className="mt-10"><TestimonialGrid /></div>
          {hasSamples && <p className="mt-10 text-center text-[0.82rem] text-muted">Illustrative testimonials shown for the website preview. Approved client quotes will replace them.</p>}
        </div>
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
