import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/content/site";

/** Two rows of quote cards scrolling in opposite directions. Pauses on hover/focus; static and wrapped with reduced motion. */
export default function TestimonialWall() {
  const half = Math.ceil(testimonials.length / 2);
  const rows = [testimonials.slice(0, half), testimonials.slice(half)];
  return (
    <div className="space-y-6">
      {rows.map((row, r) => (
        <div key={r} className="marquee overflow-hidden py-3">
          <ul className={`marquee-track items-stretch ${r ? "rev" : ""}`} style={{ animationDuration: `${row.length * 11}s` }}>
            {row.map((t, k) => (
              <li key={k} className="mx-3 w-[18.5rem] shrink-0 sm:w-[24rem]"><TestimonialCard t={t} link={false} /></li>
            ))}
            {row.map((t, k) => (
              <li key={`d${k}`} aria-hidden="true" className="mx-3 w-[18.5rem] shrink-0 sm:w-[24rem]"><TestimonialCard t={t} link={false} /></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
