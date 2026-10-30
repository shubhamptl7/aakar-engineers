"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Quote from "./Quote";
import { testimonials } from "@/content/site";

/** One large centred quote; industry labels act as tabs. Auto-advances, pauses on hover/focus. */
export default function TestimonialShowcase() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const t = testimonials[i];

  useEffect(() => { setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const id = setTimeout(() => setI((x) => (x + 1) % testimonials.length), 8000);
    return () => clearTimeout(id);
  }, [i, paused, reduced]);

  return (
    <div className="mx-auto mt-10 max-w-4xl text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div role="tablist" aria-label="Client stories by industry" className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-9">
        {testimonials.map((x, k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={k === i}
            aria-controls="testimonial-panel"
            onClick={() => setI(k)}
            className={`relative pb-2 text-[0.82rem] font-bold uppercase tracking-[0.12em] transition-colors sm:text-[0.88rem] ${k === i ? "text-brand-dark" : "text-muted hover:text-ink"}`}
          >
            {x.industry}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-line" aria-hidden="true" />
            {k === i && <span key={`${i}-${paused}`} aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-0.5 bg-brand ${reduced ? "" : "tprogress"}`} style={{ animationPlayState: paused ? "paused" : "running" }} />}
          </button>
        ))}
      </div>

      <figure id="testimonial-panel" role="tabpanel" key={i} className="animate-[fadeIn_.6s_ease] mt-10 sm:mt-12" aria-live="polite">
        <svg viewBox="0 0 44 34" className="mx-auto h-8 w-11 text-brand sm:h-10 sm:w-14" aria-hidden="true"><path fill="currentColor" d="M0 34V20C0 8.6 6.2 2 18.6 0l1.8 4.6C13.7 6.4 10.4 10 10 15.4h8V34zm24 0V20c0-11.4 6.2-18 18.6-20l1.8 4.6C37.7 6.4 34.4 10 34 15.4h8V34z" /></svg>
        <blockquote className="mt-6 min-h-[9rem] sm:min-h-[8rem]">
          <Quote text={t.quote} highlight={t.highlight} className="text-[1.4rem] leading-snug text-ink [font-family:var(--font-head)] sm:text-[1.9rem] lg:text-[2.1rem]" />
        </blockquote>
        <figcaption className="mt-8">
          <span className="block text-lg font-semibold text-ink">{t.role}</span>
          <span className="block text-[0.98rem]">{t.org}</span>
          <span className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.92rem]">
            <span className="text-muted">{t.outcome}</span>
            <span aria-hidden="true" className="hidden text-line sm:inline">|</span>
            <Link href={t.productHref} className="font-semibold text-water hover:underline">{t.product} →</Link>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
