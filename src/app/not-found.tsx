import Link from "next/link";
import Photo from "@/components/Photo";
import { photo, site, whatsappLink } from "@/content/site";

const quick = [
  { href: "/products/", t: "Products", d: "Cooling towers, treatment plants, chemicals, spares" },
  { href: "/products/cooling-towers/", t: "FRP Cooling Towers", d: "Six tower types, 5–750 TR round bottle range" },
  { href: "/solutions/", t: "Solutions", d: "Cooling, process water, effluent, ZLD, O&M" },
  { href: "/contact/", t: "Contact", d: "Get a quote or talk to an engineer" },
];

export default function NotFound() {
  return (
    <>
      <section className="dark relative isolate overflow-hidden bg-navy text-white">
        <Photo base={photo.towersField} alt="" priority className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <div className="container-x grid items-center gap-10 py-20 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-28">
          <p aria-hidden="true" className="select-none text-[8rem] font-bold leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,122,128,.9)] [font-family:var(--font-head)] sm:text-[11rem] lg:text-[14rem]">404</p>
          <div>
            <p className="eyebrow">Page not found</p>
            <h1 className="title-xl mt-4 !text-white">We couldn&apos;t find that page.</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">The page you are looking for does not exist or has moved. Use the links below, or tell us what you need and an engineer will help.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="btn btn-red">Back to home</Link>
              <a href={`tel:${site.phones.sales.tel}`} className="btn btn-ghost">Call {site.phones.sales.display}</a>
              <a href={whatsappLink("Hello Aakar Engineers, I could not find a page on your website.")} className="btn btn-ghost">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container-x py-14 lg:py-16">
        <h2 className="title-md">Popular pages</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quick.map((q) => (
            <li key={q.href}>
              <Link href={q.href} className="group block h-full rounded-md border border-line border-t-4 border-t-brand bg-white p-5 transition-shadow hover:shadow-[0_14px_40px_rgba(15,34,54,.12)]">
                <span className="block text-xl font-semibold text-ink [font-family:var(--font-head)] group-hover:text-brand-dark">{q.t} →</span>
                <span className="mt-1 block text-[0.95rem]">{q.d}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.95rem]">Looking for something else? See the <Link href="/site-map/" className="link">full sitemap</Link>.</p>
      </section>
    </>
  );
}
