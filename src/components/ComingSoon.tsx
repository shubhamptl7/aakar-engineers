import Link from "next/link";
import PageBanner from "./PageBanner";
import Icon from "./Icon";
import { photo, site, whatsappLink } from "@/content/site";
import { findTrail, plannedFor, siblingsOf, type PageNode } from "@/content/sitemap";

function bannerPhoto(href: string) {
  if (href.startsWith("/products/cooling-towers")) return photo.towersHvac;
  if (href.startsWith("/products/water-treatment-plants") || href.includes("industrial-water")) return photo.ro;
  if (href.includes("effluent") || href.includes("sewage")) return photo.aeration;
  if (href.includes("chemicals") || href.includes("operation")) return photo.clarifier;
  if (href.includes("zero-liquid") || href.includes("turnkey")) return photo.stpAerial;
  if (href.startsWith("/industries")) return photo.textile;
  if (href.startsWith("/products")) return photo.towersField;
  return photo.towersHvac;
}

export default function ComingSoon({ href, title }: { href: string; title: string }) {
  const trail = findTrail(href);
  const crumbs = [{ href: "/", label: "Home" }, ...trail.filter((n, i) => !(i > 0 && n.href === trail[i - 1].href)).map((n) => ({ href: n.href === href ? undefined : n.href, label: n.title }))];
  const { blurb, planned } = plannedFor(href);
  const self = trail[trail.length - 1];
  const children = (self?.children ?? []).filter((c) => c.href !== href);
  const siblings = siblingsOf(href);
  const list: PageNode[] = children.length ? children : siblings;

  return (
    <>
      <PageBanner photo={bannerPhoto(href)} crumbs={crumbs} kicker="Page in preparation" title={title} sub={blurb} />
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_24rem] lg:py-20">
        <div>
          <h2 className="title-lg">Detailed information is on its way</h2>
          <p className="mt-3 max-w-2xl text-lg">We are preparing accurate, detailed content for this page. Until then, our engineers can answer your questions directly.</p>
          {planned.length > 0 && (
            <>
              <h3 className="mt-10 text-xl uppercase tracking-wide">This page will include</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {planned.map((x) => <li key={x} className="flex gap-3 rounded-md border border-line bg-mist px-4 py-3.5 font-medium text-ink"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{x}</li>)}
              </ul>
            </>
          )}
          {list.length > 0 && (
            <>
              <h3 className="mt-12 text-xl uppercase tracking-wide">{children.length ? "In this section" : "Related pages"}</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {list.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="group flex items-center justify-between gap-3 rounded-md border border-line px-4 py-3 font-semibold text-ink hover:border-brand hover:text-brand-dark">
                      {c.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <aside className="h-fit rounded-md bg-navy p-7 text-white dark lg:sticky lg:top-36">
          <h2 className="text-2xl uppercase !text-white">Talk to our engineers</h2>
          <p className="mt-2 text-white/80">Tell us your requirement and we will call you back.</p>
          <div className="mt-6 grid gap-3">
            <Link href="/contact/" className="btn btn-red">Send an enquiry</Link>
            <a href={`tel:${site.phones.sales.tel}`} className="btn btn-ghost">Call {site.phones.sales.display}</a>
            <a href={whatsappLink()} className="btn btn-ghost">WhatsApp us</a>
          </div>
          <div className="mt-7 border-t border-white/15 pt-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Available now</p>
            <ul className="mt-3 space-y-2">
              <li><Link href="/products/" className="text-white underline-offset-4 hover:underline">Product range</Link></li>
              <li><Link href="/products/cooling-towers/round-bottle/" className="text-white underline-offset-4 hover:underline">Round bottle cooling tower</Link></li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
