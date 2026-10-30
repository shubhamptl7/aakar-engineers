import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import Icon from "@/components/Icon";
import { categories, categoryPhoto, photo } from "@/content/site";
import { productsTree } from "@/content/sitemap";

export const metadata: Metadata = {
  title: "Products: Cooling Towers, Water & Effluent Treatment Plants, Chemicals, Spares",
  description: "Aakar Engineers product range: FRP cooling towers, water treatment plants, effluent and sewage treatment equipment, water treatment chemicals, spares and accessories.",
  alternates: { canonical: "/products/" },
};

export default function Products() {
  return (
    <>
      <PageBanner photo={photo.towersField} alt="Industrial cooling tower" crumbs={[{ href: "/", label: "Home" }, { label: "Products" }]} kicker="Our Products" title="Products built to work together" sub="Cooling towers, treatment plants, chemicals and spares, from one manufacturer in Ahmedabad." />

      <nav aria-label="Product categories" className="sticky top-[4.25rem] z-20 border-b border-line bg-white md:top-[6.75rem] lg:top-[7.5rem]">
        <ul className="container-x flex gap-1 overflow-x-auto py-3">
          {categories.map((c) => <li key={c.slug} className="shrink-0"><a href={`#${c.slug}`} className="block rounded px-3.5 py-2 text-[0.95rem] font-semibold text-ink hover:bg-mist">{c.name}</a></li>)}
        </ul>
      </nav>

      <div className="container-x divide-y divide-line">
        {categories.map((c, i) => {
          const ph = categoryPhoto[c.slug];
          return (
            <section key={c.slug} id={c.slug} className="grid scroll-mt-40 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
              <div className={`overflow-hidden rounded-md ${i % 2 ? "lg:order-2" : ""}`}>
                {ph.src ? (
                  <Photo base={ph.src} alt={ph.alt} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,#16304b,#0f2236)] p-10 text-center text-xl text-white/85 [font-family:var(--font-head)]">Membranes · housings · vessels · valves · media · resins · pumps · diffusers</div>
                )}
              </div>
              <div>
                <p className="eyebrow">{c.no} · Product family</p>
                <h2 className="title-lg mt-3">{c.name}</h2>
                <p className="mt-3 text-lg">{c.short}</p>
                <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {(productsTree.children!.find((n) => n.href === `/products/${c.slug}/`)?.children?.map((n) => ({ name: n.title, href: n.href })) ?? c.items).map((it) => (
                    <li key={it.name} className="flex gap-2.5">
                      <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                      {it.href ? <Link href={it.href} className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-brand-dark hover:decoration-brand">{it.name}</Link> : <span className="text-ink">{it.name}</span>}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/contact/?product=${c.slug}`} className="btn btn-red">Get a Quote</Link>
                  <Link href={`/products/${c.slug}/`} className="btn btn-ghost">View range</Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-navy py-14 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="title-lg !text-white">Have a specification or drawing?</h2>
            <p className="mt-2 text-lg text-white/80">Plants are designed to your feed water and effluent. Send us what you have.</p>
          </div>
          <Link href="/contact/" className="btn btn-red shrink-0">Send your requirement</Link>
        </div>
      </section>
    </>
  );
}
