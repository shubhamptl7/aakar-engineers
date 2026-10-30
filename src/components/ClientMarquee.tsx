"use client";

import Image from "next/image";
import { useState } from "react";
import { clientLogos } from "@/content/site";

function Logo({ f, n, hidden = false }: { f: string; n: string; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className="flex h-20 shrink-0 items-center px-7 sm:h-24 sm:px-10">
      <Image src={`/images/clients/trimmed/${f}.png`} alt={hidden ? "" : n} width={220} height={110} className="h-full w-auto max-w-[11rem] object-contain sm:max-w-[13rem]" />
    </li>
  );
}

/** Two slow rows scrolling in opposite directions; pauses on hover/focus; static with reduced motion; full grid on request. */
export default function ClientMarquee() {
  const [grid, setGrid] = useState(false);
  const half = Math.ceil(clientLogos.length / 2);
  const rows = [clientLogos.slice(0, half), clientLogos.slice(half)];

  if (grid) {
    return (
      <div className="container-x mt-12">
        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {clientLogos.map(([f, n]) => (
            <li key={f} className="flex h-20 items-center justify-center sm:h-24">
              <Image src={`/images/clients/trimmed/${f}.png`} alt={n} width={220} height={110} className="h-full w-auto max-w-full object-contain" />
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center"><button type="button" onClick={() => setGrid(false)} className="btn btn-ghost">Show scrolling view</button></div>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="space-y-8">
        {rows.map((row, r) => (
          <div key={r} className="marquee overflow-hidden">
            <ul className={`marquee-track ${r ? "rev" : ""}`} style={{ animationDuration: `${row.length * 5}s` }}>
              {row.map(([f, n]) => <Logo key={f} f={f} n={n} />)}
              {row.map(([f, n]) => <Logo key={`${f}-dup`} f={f} n={n} hidden />)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button type="button" onClick={() => setGrid(true)} className="btn btn-navy">View all {clientLogos.length} clients</button>
      </div>
    </div>
  );
}
