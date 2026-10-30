"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Photo from "./Photo";
import Icon from "./Icon";
import { solutions } from "@/content/site";

/** Offerings tab list with photo panel: the Thermax "Offerings" pattern, accordion on mobile. */
export default function SolutionTabs() {
  const [a, setA] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const pick = (i: number) => {
    const mobile = window.matchMedia("(max-width: 1023px)").matches;
    if (!mobile) return setA(i);
    // Mobile accordion: tap the open item to close it; opening another scrolls its heading to the top
    const next = a === i ? -1 : i;
    setA(next);
    if (next >= 0) requestAnimationFrame(() => refs.current[next]?.scrollIntoView({ block: "start", behavior: "smooth" }));
  };
  const Panel = ({ s }: { s: (typeof solutions)[number] }) => (
    <div className="overflow-hidden rounded-md bg-white shadow-[0_10px_40px_rgba(15,34,54,.10)]">
      <div className="relative aspect-[16/8] overflow-hidden bg-mist">
        <Photo base={s.photo} alt={s.alt} sizes="(min-width:1024px) 60vw, 100vw" className="h-full w-full object-cover" />
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="title-md">{s.lead}</h3>
        <p className="mt-3">{s.text}</p>
        <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {s.supplies.map((x) => (
            <li key={x} className="flex gap-2.5"><Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand" />{x}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={s.href} className="btn btn-navy">Explore</Link>
          <Link href="/contact/" className="btn btn-ghost">Discuss your requirement</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[22rem_1fr] lg:gap-10">
      <ul className="space-y-2">
        {solutions.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              aria-expanded={a === i}
              aria-controls={`sol-${s.id}`}
              ref={(el) => { refs.current[i] = el; }}
              onClick={() => pick(i)}
              className={`flex w-full items-center justify-between gap-3 rounded-md border px-5 py-4 text-left text-lg font-semibold uppercase tracking-wide transition-colors [font-family:var(--font-head)] ${a === i ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-ink"}`}
            >
              {s.name}
              <span aria-hidden="true" className={`transition-transform ${a === i ? "rotate-90 lg:rotate-0" : ""}`}>→</span>
            </button>
            {a === i && <div id={`sol-${s.id}`} className="mt-3 lg:hidden"><Panel s={s} /></div>}
          </li>
        ))}
      </ul>
      <div className="hidden lg:block" aria-live="polite"><Panel s={solutions[a] ?? solutions[0]} /></div>
    </div>
  );
}
