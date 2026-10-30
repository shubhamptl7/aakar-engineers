import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import TowerSilhouette from "@/components/diagrams/TowerSilhouette";
import QuickEnquiry from "@/components/QuickEnquiry";
import Icon from "@/components/Icon";
import { photo, towerTypes } from "@/content/site";

export const metadata: Metadata = {
  title: "FRP Cooling Tower Manufacturer in Ahmedabad, Gujarat",
  description: "FRP cooling towers from Aakar Engineers, Ahmedabad: round bottle (5–750 TR), square single and multi cell, cross flow, double-flow cross flow and natural draft towers.",
  alternates: { canonical: "/products/cooling-towers/" },
};

export default function CoolingTowers() {
  return (
    <>
      <PageBanner photo={photo.hero} alt="Bottle-type FRP cooling towers" crumbs={[{ href: "/", label: "Home" }, { href: "/products/", label: "Products" }, { label: "FRP Cooling Towers" }]} kicker="Flagship range" title="FRP Cooling Towers" sub="Six tower types in fibre-reinforced plastic for process cooling, HVAC, generator sets and machinery." />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_24rem] lg:py-20">
        <div>
          <p className="eyebrow">Cooling tower types</p>
          <h2 className="title-lg mt-3">Choose the tower for your site and duty</h2>
          <p className="mt-4 max-w-2xl text-lg">Every Aakar tower uses a corrosion-free FRP structure. Tell us your heat load, temperatures and site, and we will recommend the right type and size.</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {towerTypes.map((t) => (
              <li key={t.name} className="group flex flex-col rounded-md border border-line bg-white transition-shadow hover:shadow-[0_14px_40px_rgba(15,34,54,.12)]">
                <div className="aspect-[10/7] bg-mist p-4"><TowerSilhouette type={t.name} /></div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.45rem]">{t.name}</h3>
                  <p className="mt-1 text-[0.95rem] font-semibold text-water">{t.flow}</p>
                  <p className="mt-1 flex-1 text-[0.95rem]">{t.note}</p>
                  <div className="mt-4 border-t border-line pt-3">
                    <div className="flex items-center justify-between"><Link href={t.href!} className="link">View details →</Link><Link href="/contact/?product=cooling-towers" className="font-semibold text-brand-dark hover:underline">Quote</Link></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:sticky lg:top-36 lg:h-fit"><div className="rounded-md border-t-4 border-brand"><QuickEnquiry source="cooling-towers" title="Get a tower quote" defaultInterest="FRP cooling tower" /></div></aside>
      </section>

      <section className="bg-mist py-16 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Sizing</p>
            <h2 className="title-lg mt-3">What we need to size your tower</h2>
            <p className="mt-4 text-lg">Share these details in your enquiry for a faster, accurate offer.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Heat load (TR) or water flow (m³/h)", "Hot water inlet temperature", "Required cold water temperature", "Local wet-bulb temperature", "Site location and available space", "Make-up water quality"].map((x) => (
              <li key={x} className="flex gap-3 rounded-md bg-white p-4 font-medium text-ink shadow-[0_2px_0_#dce1e6]"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{x}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
