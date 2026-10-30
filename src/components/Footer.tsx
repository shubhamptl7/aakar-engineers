import Link from "next/link";
import Image from "next/image";
import { categories, site, whatsappLink } from "@/content/site";
import { solutionsTree } from "@/content/sitemap";

export default function Footer() {
  const col = "text-[0.95rem] text-white/75 hover:text-white";
  return (
    <footer className="dark bg-navy pb-20 text-white/75 lg:pb-0">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_1.2fr]">
        <div>
          <div className="inline-block rounded bg-white px-4 py-2.5">
            <Image src="/images/aakar/logo.png" alt="Aakar Engineers" width={216} height={38} className="h-9 w-auto" />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed">FRP cooling towers, water and effluent treatment plants, treatment chemicals, spares and operation &amp; maintenance for industry. Ahmedabad, since {site.est}.</p>
          <div className="mt-6 flex gap-3">
            <a href={whatsappLink()} className="btn btn-ghost !min-h-10 !px-4 text-sm">WhatsApp</a>
            <Link href="/contact/" className="btn btn-red !min-h-10 !px-4 text-sm">Get a Quote</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg uppercase tracking-wider text-white">Products</h2>
          <ul className="space-y-2.5">{categories.map((c) => <li key={c.slug}><Link className={col} href={`/products/${c.slug}/`}>{c.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg uppercase tracking-wider text-white">Solutions</h2>
          <ul className="space-y-2.5">{solutionsTree.children!.map((c) => <li key={c.href}><Link className={col} href={c.href}>{c.title}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg uppercase tracking-wider text-white">Company</h2>
          <ul className="space-y-2.5">
            {[["/about/", "About Us"], ["/about/group-companies/", "Group Companies"], ["/industries/", "Industries"], ["/clients/", "Clients"], ["/testimonials/", "Testimonials"], ["/#brochure", "Brochure"], ["/careers/", "Careers"], ["/contact/", "Contact"]].map(([h, l]) => <li key={h}><Link className={col} href={h}>{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg uppercase tracking-wider text-white">Contact</h2>
          {Object.values(site.offices).map((o) => (
            <address key={o.label} className="mb-5 not-italic">
              <span className="block font-semibold text-white">{o.label}</span>
              <span className="block text-[0.95rem]">{o.lines.join(", ")}</span>
            </address>
          ))}
          <p className="space-y-1 text-[0.95rem]">
            <a className="block hover:text-white" href={`tel:${site.phones.sales.tel}`}>{site.phones.sales.display}</a>
            <a className="block hover:text-white" href={`tel:${site.phones.mobile.tel}`}>{site.phones.mobile.display}</a>
            <a className="block hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="container-x flex flex-col gap-2 py-5 text-[0.85rem] text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Aakar Engineers, Ahmedabad. All rights reserved.</p>
          <span className="flex gap-5"><Link href="/privacy-policy/" className="hover:text-white">Privacy policy</Link><Link href="/site-map/" className="hover:text-white">Sitemap</Link><Link href="/credits/" className="hover:text-white">Image credits</Link></span>
        </div>
      </div>
    </footer>
  );
}
