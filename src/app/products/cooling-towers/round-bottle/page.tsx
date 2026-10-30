import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import QuickEnquiry from "@/components/QuickEnquiry";
import Icon from "@/components/Icon";
import DemoNote from "@/components/DemoNote";
import TowerSilhouette from "@/components/diagrams/TowerSilhouette";
import CoolingTowerSection, { towerParts } from "@/components/diagrams/CoolingTowerSection";
import { photo, site, towerTypes, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Round Bottle FRP Cooling Tower 5–750 TR | Manufacturer in Ahmedabad",
  description: "Round bottle FRP cooling tower by Aakar Engineers: induced-draft counter-flow, 5 TR to 750 TR, corrosion-free, non-clogging design, Energy Efficiency Series option. Get a quote.",
  alternates: { canonical: "/products/cooling-towers/round-bottle/" },
};

const spec: [string, string][] = [
  ["Type", "Induced draft, counter flow"],
  ["Shape", "Round, bottle-neck top"],
  ["Capacity range", "5 TR to 750 TR"],
  ["Structure", "FRP (fibre-reinforced plastic)"],
  ["Water distribution", "Rotating sprinkler (low pump head) or spray nozzles"],
  ["Basin", "With or without basin"],
  ["Options", "Energy Efficiency Series, Non Blockage Design"],
  ["Performance basis", "Local wet-bulb temperature"],
];

const features = [
  ["Corrosion-free FRP", "Lightweight, weather-proof structure with a long service life."],
  ["Non-clogging design", "Water path designed to resist blockage, for easy maintenance."],
  ["Self-supporting", "The FRP structure is designed to bear the tower's weight."],
  ["Energy Efficiency Series", "Optional. Designed for lower fan-motor HP, on request."],
];

const apps = ["Air conditioning & chillers", "Diesel generator sets", "Heat exchangers", "Refrigeration systems", "Blow-moulding machines", "Industrial process cooling"];

const ld = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Round bottle FRP cooling tower",
  description: "Induced-draft, counter-flow FRP cooling tower with bottle-neck top, 5 TR to 750 TR.",
  brand: { "@type": "Brand", name: "Aakar Engineers" },
  category: "Cooling towers",
};

export default function RoundBottle() {
  return (
    <>
      <PageBanner photo={photo.hero} alt="Bottle-type FRP cooling towers" crumbs={[{ href: "/", label: "Home" }, { href: "/products/", label: "Products" }, { href: "/products/cooling-towers/", label: "Cooling Towers" }, { label: "Round Bottle" }]} kicker="FRP cooling tower · 5–750 TR" title="Round Bottle Cooling Tower" sub="Induced-draft, counter-flow FRP tower for process, HVAC and machinery cooling." />

      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1fr_23rem] lg:py-20">
        <div className="min-w-0">
          {/* overview + spec */}
          <section className="grid gap-8 xl:grid-cols-[1fr_1fr]">
            <div>
              <p className="eyebrow">Overview</p>
              <h2 className="title-lg mt-3">Compact, corrosion-free cooling</h2>
              <p className="mt-4">The round bottle tower sprinkles hot water over heat-exchange fill, where it flows down as a thin film against rising ambient air. Part of the water evaporates, carrying the heat away, and cooled water collects in the basin for return to the plant.</p>
              <p className="mt-3">Towers are sized to the client&apos;s duty, and performance is designed against the local wet-bulb temperature.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact/?product=round-bottle" className="btn btn-red">Get a Quote</Link>
                <Link href="/contact/?product=round-bottle" className="btn btn-ghost">Request datasheet</Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-line">
              <h3 className="bg-navy px-5 py-3 text-lg uppercase tracking-wider !text-white">Technical specification</h3>
              <table className="w-full text-left text-[0.97rem]">
                <tbody>
                  {spec.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-mist" : "bg-white"}>
                      <th scope="row" className="w-[42%] px-5 py-3 align-top font-semibold text-ink">{k}</th>
                      <td className="px-5 py-3">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* functions & components (industry convention) with section drawing */}
          <section className="mt-16 lg:mt-20">
            <p className="eyebrow">Functions &amp; components</p>
            <h2 className="title-lg mt-3">How the round bottle tower works</h2>
            <div className="mt-8 grid items-start gap-8 xl:grid-cols-2">
              <figure className="rounded-md border border-line bg-white p-4">
                <CoolingTowerSection uid="rb" label="Sectional drawing of a round bottle cooling tower with eight numbered parts listed beside it" />
                <figcaption className="mt-2 border-t border-line pt-2 text-sm text-muted">Schematic section, not to scale</figcaption>
              </figure>
              <ol className="space-y-1">
                {towerParts.map((p) => (
                  <li key={p.n} className="flex gap-4 rounded-md p-3 hover:bg-mist">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white" aria-hidden="true">{p.n}</span>
                    <span><strong className="block text-ink">{p.name}</strong><span className="text-[0.95rem]">{p.text}</span></span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* features + applications */}
          <section className="mt-16 grid gap-10 lg:mt-20 xl:grid-cols-2">
            <div>
              <p className="eyebrow">Features</p>
              <h2 className="title-lg mt-3">Built for long, low-maintenance service</h2>
              <ul className="mt-6 space-y-4">
                {features.map(([h, t]) => (
                  <li key={h} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand/10 text-brand"><Icon name="check" className="h-5 w-5" /></span>
                    <span><strong className="block text-ink">{h}</strong>{t}</span>
                  </li>
                ))}
              </ul>
              <DemoNote>“Lower fan-motor HP” is Aakar&apos;s own website claim; confirm supporting data.</DemoNote>
            </div>
            <div>
              <p className="eyebrow">Applications</p>
              <h2 className="title-lg mt-3">Where it is used</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {apps.map((a) => <li key={a} className="rounded-md border-l-4 border-brand bg-mist px-4 py-3 font-medium text-ink">{a}</li>)}
              </ul>
            </div>
          </section>

          {/* gallery */}
          <section className="mt-16 lg:mt-20">
            <p className="eyebrow">Gallery</p>
            <h2 className="title-lg mt-3">Round bottle towers</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-md sm:col-span-2"><Photo base={photo.hero} widths={[800, 1280]} alt="Three bottle-type FRP cooling towers on an industrial site" sizes="(min-width:640px) 60vw, 100vw" className="aspect-[16/10] h-full w-full object-cover" /></div>
              <div className="grid gap-4">
                <figure className="flex items-center justify-center overflow-hidden rounded-md border border-line bg-white p-2"><Image src="/images/aakar/ROUND-BOTTLE4.jpg" alt="Aakar round bottle FRP cooling tower" width={250} height={200} className="h-auto w-full max-w-[250px]" /></figure>
                <figure className="flex items-center justify-center overflow-hidden rounded-md border border-line bg-white p-2"><Image src="/images/aakar/Round-Bottle-Neck.jpg" alt="Aakar round bottle-neck cooling tower" width={250} height={200} className="h-auto w-full max-w-[250px]" /></figure>
              </div>
            </div>
            <DemoNote>The large photo is licensed stock (see Image credits). The two small photos are from Aakar&apos;s current website. Replace all with high-resolution photos of Aakar installations.</DemoNote>
          </section>

          {/* other types */}
          <section className="mt-16 lg:mt-20">
            <p className="eyebrow">Related products</p>
            <h2 className="title-lg mt-3">Other cooling tower types</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {towerTypes.filter((t) => t.name !== "Round bottle").map((t) => (
                <li key={t.name} className="rounded-md border border-line bg-white">
                  <div className="aspect-[10/7] bg-mist p-3"><TowerSilhouette type={t.name} /></div>
                  <div className="p-4"><h3 className="text-lg"><Link href={t.href!} className="hover:text-brand-dark">{t.name}</Link></h3><Link href={t.href!} className="mt-1 inline-block text-[0.92rem] font-semibold text-water hover:underline">View details →</Link></div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* sidebar enquiry (Towertech / Delta convention) */}
        <aside className="lg:sticky lg:top-36 lg:h-fit">
          <div className="rounded-md border-t-4 border-brand"><QuickEnquiry source="round-bottle" title="Get a quote" defaultInterest="FRP cooling tower" /></div>
          <div className="mt-5 rounded-md bg-mist p-5">
            <p className="font-semibold text-ink">Prefer to talk?</p>
            <a href={`tel:${site.phones.sales.tel}`} className="mt-2 block text-xl font-bold text-brand-dark [font-family:var(--font-head)]">{site.phones.sales.display}</a>
            <a href={whatsappLink("Hello Aakar Engineers, I need a quote for a round bottle cooling tower.")} className="link mt-1 inline-block">WhatsApp an engineer</a>
          </div>
          <div className="mt-5 rounded-md border border-line p-5">
            <p className="font-semibold text-ink">Keep your tower efficient</p>
            <p className="mt-1 text-[0.95rem]">Cooling-water antiscalants, corrosion inhibitors and biocides, plus spares.</p>
            <div className="mt-3 flex flex-col gap-1.5">
              <Link href="/products/water-treatment-chemicals/" className="link">Cooling water chemicals</Link>
              <Link href="/products/spares/" className="link">Spares &amp; accessories</Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="bg-brand">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 text-white lg:flex-row lg:items-center">
          <h2 className="title-lg !text-white">Need a round bottle tower sized for your plant?</h2>
          <Link href="/contact/?product=round-bottle" className="btn bg-white text-brand-dark hover:bg-white/90">Request a quote</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
