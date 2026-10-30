"use client";

import { useEffect, useState } from "react";

const slides = [
  { base: "/images/photos/hero-bottle-towers", widths: [800, 1280, 2400], alt: "Bottle-type FRP cooling towers on an industrial site", pos: "60% center" },
  { base: "/images/photos/towers-field", widths: [800, 1600], alt: "Industrial cooling tower with pumps and pipework", pos: "70% center" },
  { base: "/images/photos/stp-aerial", widths: [800, 1600], alt: "Aerial view of a wastewater treatment plant", pos: "center" },
  { base: "/images/photos/towers-hvac", widths: [800, 1600], alt: "Induced-draft cooling towers with pipework on a rooftop", pos: "center" },
];

/** Crossfading background with a slow zoom. The first image loads with the page; the rest load after it. */
export default function HeroSlideshow() {
  const [i, setI] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setReady(true);
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {slides.map((s, n) => (n === 0 || ready) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.base}
          src={`${s.base}-${s.widths[s.widths.length - 1]}.webp`}
          srcSet={s.widths.map((w) => `${s.base}-${w}.webp ${w}w`).join(", ")}
          sizes="100vw"
          alt=""
          loading={n === 0 ? "eager" : "lazy"}
          fetchPriority={n === 0 ? "high" : "low"}
          style={{ objectPosition: s.pos }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out ${n === i ? "opacity-100" : "opacity-0"} ${n === i && ready ? "kenburns" : ""}`}
        />
      ))}
      {ready && (
        <div className="absolute bottom-24 right-6 z-10 hidden gap-2 lg:flex">
          {slides.map((s, n) => <span key={s.base} className={`h-1 rounded-full transition-all duration-500 ${n === i ? "w-8 bg-white" : "w-3 bg-white/40"}`} />)}
        </div>
      )}
    </div>
  );
}
