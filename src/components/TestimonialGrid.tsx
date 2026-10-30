"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/content/site";

/** Industry filter chips above a masonry wall of all quotes. */
export default function TestimonialGrid() {
  const industries = ["All", ...new Set(testimonials.map((t) => t.industry))];
  const [f, setF] = useState("All");
  const shown = f === "All" ? testimonials : testimonials.filter((t) => t.industry === f);
  return (
    <div>
      <div role="group" aria-label="Filter by industry" className="flex flex-wrap justify-center gap-2.5">
        {industries.map((x) => (
          <button key={x} type="button" onClick={() => setF(x)} aria-pressed={f === x} className={`rounded-full border px-4 py-2 text-[0.92rem] font-semibold transition-colors ${f === x ? "border-navy bg-navy text-white" : "border-line bg-white text-ink hover:border-ink"}`}>
            {x}
            <span className={`ml-2 text-[0.8rem] ${f === x ? "text-white/70" : "text-muted"}`}>{x === "All" ? testimonials.length : testimonials.filter((t) => t.industry === x).length}</span>
          </button>
        ))}
      </div>
      <ul className="mt-10 gap-6 [column-fill:_balance] md:columns-2 xl:columns-3">
        {shown.map((t, k) => (
          <li key={`${f}-${k}`} className="mb-6 break-inside-avoid"><TestimonialCard t={t} /></li>
        ))}
      </ul>
    </div>
  );
}
