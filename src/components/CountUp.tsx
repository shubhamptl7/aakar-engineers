"use client";

import { useEffect, useRef, useState } from "react";

/** Animates every number inside a label like "30+", "5–750" or "70+" when it scrolls into view. */
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nums = value.match(/\d+/g)?.map(Number) ?? [];
    if (!nums.length) return;
    const render = (t: number) => { let i = 0; return value.replace(/\d+/g, () => String(Math.round(nums[i++] * t))); };
    setText(render(0));
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / 1400, 1);
        setText(render(1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref} className={className} aria-label={value}><span aria-hidden="true">{text}</span></span>;
}
