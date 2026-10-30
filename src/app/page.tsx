import Link from "next/link";
import Image from "next/image";
import Photo from "@/components/Photo";
import QuickEnquiry from "@/components/QuickEnquiry";
import SolutionTabs from "@/components/SolutionTabs";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import DemoNote from "@/components/DemoNote";
import HeroSlideshow from "@/components/HeroSlideshow";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import ClientMarquee from "@/components/ClientMarquee";
import TestimonialShowcase from "@/components/TestimonialShowcase";
import BrochureForm from "@/components/BrochureForm";
import { categories, categoryPhoto, industryClients, photo, proof, site, steps, testimonials, whatsappLink, whyAakar } from "@/content/site";

function Title({ kicker, children, sub, center = false }: { kicker: string; children: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{kicker}</p>
      <h2 className="title-lg mt-3">{children}</h2>
      {sub && <p className="mt-4 text-lg">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  const [first, ...rest] = categories;
  return (
    <>
      {/* HERO: full-bleed installation photo + callback form (industry convention) */}
      <section className="dark relative isolate overflow-hidden bg-navy">
        <HeroSlideshow />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/20" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="container-x grid items-center gap-10 pb-28 pt-14 lg:grid-cols-[1fr_25rem] lg:gap-16 lg:pb-36 lg:pt-24">
          <div className="text-white">
            <p className="eyebrow">Since {site.est} · Ahmedabad, Gujarat</p>
            <h1 className="title-xl mt-4 !text-white">
              Cooling Towers &amp; Water Treatment Systems <span className="text-brand-soft">for Industry</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/88 lg:text-xl">
              Aakar Engineers manufactures FRP cooling towers, water and effluent treatment plants, and supplies the treatment chemicals, spares and maintenance that keep them running.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn btn-red text-[1.05rem]">Get a Quote</Link>
              <Link href="/products/" className="btn btn-ghost text-[1.05rem]">Explore Products</Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-[0.98rem] text-white/85">
              {["Design & manufacture in-house", "Chemicals & spares", "O&M and AMC"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Icon name="check" className="h-5 w-5 text-brand-soft" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block"><QuickEnquiry source="home-hero" /></div>
        </div>
      </section>

      {/* PROOF STRIP overlapping hero */}
      <section className="relative z-10 -mt-16 lg:-mt-20">
        <div className="container-x">
          <dl className="grid grid-cols-2 overflow-hidden rounded-md bg-white shadow-[0_18px_50px_rgba(15,34,54,.16)] lg:grid-cols-4">
            {proof.map((p, i) => (
              <div key={p.l} className={`border-line p-5 sm:p-7 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
                <dt className="sr-only">{p.l}</dt>
                <dd>
                  <CountUp value={p.n} className="block text-[2.6rem] font-bold leading-none text-brand [font-family:var(--font-head)] lg:text-[3.2rem]" />
                  <span className="mt-2 block font-semibold leading-snug text-ink">{p.l}</span>
                  <span className="mt-0.5 block text-[0.88rem] text-muted">{p.sub}</span>
                </dd>
              </div>
            ))}
          </dl>
          <DemoNote>“30+ years” assumes Aakar Engineers was founded in 1992; the About page says 1988. Add installation counts if Aakar can supply them.</DemoNote>
        </div>
      </section>

      {/* PRODUCTS: photo grid with quote buttons */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <Title kicker="Our Products" sub="Five product families, built to work together in one plant.">Equipment, chemicals and spares for industrial water</Title>
            <Link href="/products/" className="btn btn-ghost shrink-0">View all products</Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* flagship: cooling towers */}
            <article className="dark group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-md bg-navy p-7 text-white photo-zoom lg:col-span-2 lg:row-span-2 lg:min-h-full">
              <Photo base={categoryPhoto[first.slug].src!} alt={categoryPhoto[first.slug].alt} sizes="(min-width:1024px) 66vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/75 to-navy/25" />
              <span className="mb-auto w-fit rounded bg-brand px-3 py-1 text-sm font-semibold uppercase tracking-wider">Flagship range</span>
              <h3 className="title-lg !text-white">{first.name}</h3>
              <p className="mt-2 max-w-xl text-white/85">{first.short} Round bottle towers from 5 to 750 TR.</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {first.items.map((it) => <li key={it.name} className="rounded border border-white/35 px-2.5 py-1 text-[0.85rem]">{it.name}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/products/${first.slug}/`} className="btn btn-red">View cooling towers</Link>
                <Link href="/contact/?product=cooling-towers" className="btn btn-ghost">Get a quote</Link>
              </div>
            </article>

            {rest.map((c) => {
              const ph = categoryPhoto[c.slug];
              return (
                <article key={c.slug} className="group flex flex-col overflow-hidden rounded-md border border-line bg-white transition-shadow hover:shadow-[0_14px_40px_rgba(15,34,54,.12)]">
                  {ph.src ? (
                    <div className="aspect-[16/9] overflow-hidden bg-mist photo-zoom"><Photo base={ph.src} alt={ph.alt} sizes="(min-width:1024px) 33vw, 100vw" className="h-full w-full object-cover" /></div>
                  ) : (
                    <div className="flex aspect-[16/9] items-end bg-[linear-gradient(135deg,#16304b,#0f2236)] p-5">
                      <p className="text-[0.95rem] leading-relaxed text-white/80">RO membranes · housings · FRP vessels · multiport valves · media · resins · dosing pumps · diffusers</p>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="title-md">{c.name}</h3>
                    <p className="mt-2 flex-1 text-[0.98rem]">{c.short}</p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                      <Link href={`/products/${c.slug}/`} className="link">View range</Link>
                      <Link href={`/contact/?product=${c.slug}`} className="text-[0.95rem] font-semibold text-brand-dark hover:underline">Get a quote →</Link>
                    </div>
                  </div>
                </article>
              );
            })}

            <article className="flex flex-col justify-between rounded-md bg-mist p-7">
              <div>
                <h3 className="title-md">Not sure what you need?</h3>
                <p className="mt-2 text-[0.98rem]">Tell us the problem: overheating, scaling, failing discharge limits, high water bills. Our engineers will recommend the right equipment and treatment.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact/?type=problem" className="btn btn-red">Ask an engineer</Link>
                <a href={`tel:${site.phones.sales.tel}`} className="btn btn-ghost">Call {site.phones.sales.display}</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT split */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-md"><Photo base={photo.stpAerial} alt="Aerial view of a wastewater treatment plant in India" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" /></div>
            <div className="absolute -bottom-6 right-4 rounded-md bg-brand px-6 py-5 text-white shadow-xl sm:right-8">
              <span className="block text-4xl font-bold leading-none [font-family:var(--font-head)]">{site.est}</span>
              <span className="mt-1 block text-sm font-semibold uppercase tracking-wider">Aakar Engineers founded</span>
            </div>
          </div>
          <div>
            <Title kicker="About Aakar Engineers">One engineering team for your plant&apos;s water</Title>
            <p className="mt-5">
              Aakar Engineers is part of an Ahmedabad group that began in 1972 and entered the cooling tower industry in 1988. Founded by Mr. Parag Vasa in {site.est}, Aakar was among the early makers of FRP cooling towers and has grown into water treatment plants, effluent treatment, chemicals and plant operation.
            </p>
            <p className="mt-4">Most suppliers sell either the machine or the chemicals. Aakar supplies both, and can maintain them, so one team is responsible for how your system performs.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["FRP cooling towers, 5–750 TR", "WTP, RO and DM plants", "ETP, STP and ZLD systems", "Cooling, boiler and RO chemicals", "Spares and accessories", "O&M and AMC contracts"].map((t) => (
                <li key={t} className="flex gap-2.5 font-medium text-ink"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about/" className="btn btn-navy">About the company</Link>
              <a href={`tel:${site.phones.sales.tel}`} className="btn btn-ghost">Call {site.phones.sales.display}</a>
            </div>
            <DemoNote>History is from the current aakarengineers.com About and Group Companies pages; the site gives both 1988 and 1992 for Aakar.</DemoNote>
          </div>
        </div>
      </section>

      {/* SOLUTIONS tabs */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Title kicker="Solutions" sub="Start from the problem in your plant. We will point you to the right equipment, chemistry and service.">Solutions for every stage of your plant&apos;s water</Title>
          <SolutionTabs />
        </div>
      </section>

      {/* INDUSTRIES with client evidence */}
      <section className="dark bg-navy py-20 text-white/85 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Industries we serve</p>
            <h2 className="title-lg mt-3 !text-white">Water systems for the plants that drive Indian industry</h2>
            <p className="mt-4 text-lg">Every industry stresses water differently. Our references span textile mills, pharma and chemical plants, food and beverage units, and engineering works.</p>
            <div className="mt-8 overflow-hidden rounded-md"><Photo base={photo.textile} alt="Looms in a textile weaving mill in India" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[16/10] w-full object-cover" /></div>
          </div>
          <ul className="grid gap-4 self-center sm:grid-cols-2">
            {industryClients.map((x) => (
              <li key={x.name} className="rounded-md border border-white/15 bg-white/[0.04] p-6">
                <h3 className="text-2xl !text-white">{x.name}</h3>
                <p className="mt-2 text-[0.98rem] text-white/80">{x.line}</p>
                <p className="mt-4 border-t border-white/15 pt-3 text-[0.9rem] text-white/65"><span className="font-semibold text-white/90">Clients include:</span> {x.clients.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLIENT LOGOS: two-row marquee */}
      <section className="overflow-hidden py-20 lg:py-24">
        <div className="container-x">
          <Title center kicker="Our Clients" sub="Leading Indian manufacturers have relied on Aakar's equipment and services.">Trusted by industry leaders</Title>
        </div>
        <ClientMarquee />
        <div className="container-x text-center"><DemoNote>Logos are from Aakar&apos;s current Clients page. Confirm each relationship and permission before public launch.</DemoNote></div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x">
          <Title center kicker="Client stories">What our clients say</Title>
          <TestimonialShowcase />
          <div className="mt-10 text-center"><Link href="/testimonials/" className="link">Read all client stories</Link></div>
        </div>
      </section>

      {/* WHY HIRE AAKAR: photo band with stat cards (industry pattern) */}
      <section className="relative">
        <div className="dark relative isolate overflow-hidden bg-navy pb-40 pt-20 text-center lg:pb-48 lg:pt-24">
          <Photo base={photo.hero} widths={[800, 1280, 2400]} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-navy/80" />
          <Reveal className="container-x">
            <p className="eyebrow">Why choose Aakar</p>
            <h2 className="title-lg mt-3 !text-white">Experience you can rely on, <span className="text-brand-soft">since {site.est}</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">One team that designs, builds, treats and maintains, so you deal with one supplier for your plant&apos;s water.</p>
          </Reveal>
        </div>
        <div className="container-x relative -mt-28 lg:-mt-32">
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {[
              { n: "1992", l: "Aakar Engineers founded" },
              { n: "5", l: "Product families" },
              { n: "6", l: "Cooling tower types" },
              { n: "1", l: "Team from design to maintenance" },
            ].map((x, k) => (
              <Reveal as="li" key={x.l} delay={k * 90} className="rounded-md border-b-4 border-brand bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,34,54,.16)] lg:p-8">
                <CountUp value={x.n} className="block text-[2.6rem] font-bold leading-none text-brand [font-family:var(--font-head)] lg:text-[3.4rem]" />
                <span className="mt-2 block font-semibold text-ink">{x.l}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="container-x py-16 lg:py-20">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyAakar.map((w, k) => (
              <Reveal as="li" key={w.t} delay={(k % 3) * 90} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Icon name={w.icon} className="h-6 w-6" /></span>
                <div>
                  <h3 className="text-[1.4rem]">{w.t}</h3>
                  <p className="mt-1 text-[0.98rem]">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Title center kicker="How we work">From first call to commissioning</Title>
          <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-line lg:block" />
            {steps.map((s, i) => (
              <li key={s.t} className="relative text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-brand text-xl font-bold text-white shadow-md [font-family:var(--font-head)]">{i + 1}</span>
                <h3 className="mt-5 text-[1.4rem]">{s.t}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[0.98rem]">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BROCHURE */}
      <section id="brochure" className="dark scroll-mt-32 bg-navy py-14 text-white lg:py-16">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12">
          <Reveal className="flex items-center gap-5">
            <span className="flex h-16 w-14 shrink-0 items-center justify-center rounded bg-white text-brand shadow-lg" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M12 12v6M9 15l3 3 3-3"/></svg>
            </span>
            <div>
              <h2 className="text-3xl !text-white">Download our brochure</h2>
              <p className="mt-1 text-white/80">Products, capabilities and contact details in one PDF to share with your team.</p>
            </div>
          </Reveal>
          <BrochureForm />
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brand">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 text-white lg:flex-row lg:items-center">
          <div>
            <h2 className="title-lg !text-white">Planning a new plant or fixing an existing one?</h2>
            <p className="mt-2 text-lg text-white/90">Talk to an Aakar engineer about cooling, water or effluent treatment.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${site.phones.sales.tel}`} className="btn bg-white text-brand-dark hover:bg-white/90">Call {site.phones.sales.display}</a>
            <a href={whatsappLink()} className="btn btn-ghost-light">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="py-20 lg:py-24" id="enquiry">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Title kicker="Enquiry">Tell us about your requirement</Title>
            <p className="mt-4">Send capacity, location and any water analysis or drawings you have. We will come back with the right solution.</p>
            <dl className="mt-8 space-y-5">
              {[["Sales office", site.offices.sales.lines.join(", ")], ["Phone", `${site.phones.sales.display} · ${site.phones.mobile.display}`], ["Email", site.email]].map(([k, v]) => (
                <div key={k} className="border-l-4 border-brand pl-4"><dt className="text-sm font-semibold uppercase tracking-wider text-muted">{k}</dt><dd className="mt-0.5 font-medium text-ink">{v}</dd></div>
              ))}
            </dl>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-[0_14px_40px_rgba(15,34,54,.08)] sm:p-9"><EnquiryForm compact /></div>
        </div>
      </section>
    </>
  );
}
