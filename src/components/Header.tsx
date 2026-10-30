"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/content/site";
import { companyTree, industriesTree, productsTree, solutionsTree, type PageNode } from "@/content/sitemap";

type Key = "products" | "solutions" | "industries" | "about";
const menus: { key: Key; tree: PageNode; label: string }[] = [
  { key: "products", tree: productsTree, label: "Products" },
  { key: "solutions", tree: solutionsTree, label: "Solutions" },
  { key: "industries", tree: industriesTree, label: "Industries" },
  { key: "about", tree: companyTree, label: "About Us" },
];

const Chevron = ({ open }: { open: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
);


export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<Key | null>(null);
  const [acc, setAcc] = useState<Key | null>(null);
  const pathname = usePathname();
  const btnRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobile(false); setOpen(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); if (mobile) { setMobile(false); btnRef.current?.focus(); } } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobile]);

  const enter = (k: Key) => { if (timer.current) clearTimeout(timer.current); setOpen(k); };
  const leave = () => { timer.current = setTimeout(() => setOpen(null), 160); };
  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isActiveMenu = (m: (typeof menus)[number]) => m.key === "about" ? ["/about", "/clients", "/careers"].some((x) => pathname.startsWith(x)) : active(m.tree.href);
  const navCls = (on: boolean) => `flex items-center gap-1.5 px-3.5 xl:px-4 font-semibold uppercase tracking-wide text-[0.95rem] [font-family:var(--font-head)] ${on ? "text-brand" : "text-ink hover:text-brand"}`;

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_#dce1e6]">
      <div className="dark hidden bg-navy text-white/90 md:block">
        <div className="container-x flex h-10 items-center justify-between text-[0.9rem]">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phones.sales.tel}`} className="flex items-center gap-2 hover:text-white">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>
              {site.phones.sales.display}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/careers/" className="hidden hover:text-white lg:inline">Careers</Link>
            <a href={whatsappLink()} className="font-semibold text-[#7ee2a0] hover:text-white">WhatsApp {site.phones.mobile.display}</a>
          </div>
        </div>
      </div>

      <div className="container-x flex h-[4.25rem] items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label="Aakar Engineers home" className="shrink-0">
          <Image src="/images/aakar/logo.png" alt="Aakar Engineers" width={216} height={38} priority className="h-8 w-auto lg:h-9 xl:h-10" />
        </Link>

        <nav aria-label="Primary" className="hidden h-full items-stretch lg:flex">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={navCls(pathname === "/")}>Home</Link>
          {menus.map((m) => (
            <div key={m.key} className="flex" onMouseEnter={() => enter(m.key)} onMouseLeave={leave}>
              <button type="button" aria-expanded={open === m.key} aria-controls={`menu-${m.key}`} onClick={() => setOpen(open === m.key ? null : m.key)} className={navCls(isActiveMenu(m) || open === m.key)}>
                {m.label}<Chevron open={open === m.key} />
              </button>
            </div>
          ))}
          <Link href="/contact/" aria-current={active("/contact/") ? "page" : undefined} className={navCls(active("/contact/"))}>Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact/" className="btn btn-red hidden !min-h-11 sm:inline-flex">Get a Quote</Link>
          <button ref={btnRef} type="button" className="flex h-11 w-11 items-center justify-center text-ink lg:hidden" aria-expanded={mobile} aria-controls="mobile-menu" aria-label={mobile ? "Close menu" : "Open menu"} onClick={() => setMobile((v) => !v)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{mobile ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}</svg>
          </button>
        </div>
      </div>

      {/* Products mega menu */}
      <div id="menu-products" hidden={open !== "products"} onMouseEnter={() => enter("products")} onMouseLeave={leave} className="absolute inset-x-0 top-full hidden border-t-[3px] border-brand bg-white shadow-[0_24px_50px_rgba(15,34,54,.18)] lg:block">
        <div className="container-x grid grid-cols-[repeat(4,1fr)_17rem] gap-8 py-8">
          {productsTree.children!.filter((c) => c.children).map((cat) => (
            <div key={cat.href}>
              <Link href={cat.href} className="block border-b-2 border-line pb-2 text-lg font-semibold uppercase tracking-wide text-ink hover:text-brand [font-family:var(--font-head)]">{cat.title}</Link>
              <ul className="mt-3 space-y-1.5">
                {cat.children!.map((it) => (
                  <li key={it.href}><Link href={it.href} className="flex items-center text-[0.95rem] text-body hover:text-brand-dark">{it.title.replace(/ Cooling Tower$/, "")}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-3 rounded-md bg-mist p-5">
            <Link href="/products/spares/" className="text-lg font-semibold uppercase tracking-wide text-ink hover:text-brand [font-family:var(--font-head)]">Spares &amp; Accessories →</Link>
            <p className="text-[0.9rem]">Membranes, housings, media, resins, valves, dosing pumps.</p>
            <div className="mt-auto grid gap-2">
              <Link href="/products/" className="btn btn-navy !min-h-10 text-sm">View all products</Link>
              <Link href="/contact/" className="btn btn-red !min-h-10 text-sm">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Simple dropdowns */}
      {menus.filter((m) => m.key !== "products").map((m) => (
        <div key={m.key} id={`menu-${m.key}`} hidden={open !== m.key} onMouseEnter={() => enter(m.key)} onMouseLeave={leave} className="absolute inset-x-0 top-full hidden border-t-[3px] border-brand bg-white shadow-[0_24px_50px_rgba(15,34,54,.18)] lg:block">
          <div className="container-x grid grid-cols-[17rem_1fr] gap-10 py-8">
            <div>
              <Link href={m.tree.href} className="text-2xl font-semibold uppercase text-ink hover:text-brand [font-family:var(--font-head)]">{m.label} →</Link>
              <p className="mt-2 text-[0.95rem]">{m.tree.blurb}</p>
            </div>
            <ul className="grid grid-cols-3 gap-x-8 gap-y-1">
              {m.tree.children!.map((c) => (
                <li key={c.href + c.title}><Link href={c.href} className="flex items-center rounded border-l-2 border-transparent px-3 py-2.5 font-semibold text-ink hover:border-brand hover:bg-mist hover:text-brand-dark">{c.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {mobile && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[4.25rem] z-30 overflow-y-auto bg-white md:top-[6.75rem] lg:hidden">
          <nav aria-label="Mobile" className="container-x py-3">
            <ul>
              <li className="border-b border-line"><Link href="/" className="block py-4 text-xl font-semibold uppercase text-ink [font-family:var(--font-head)]">Home</Link></li>
              {menus.map((m) => (
                <li key={m.key} className="border-b border-line">
                  <button type="button" aria-expanded={acc === m.key} onClick={() => setAcc(acc === m.key ? null : m.key)} className="flex w-full items-center justify-between py-4 text-xl font-semibold uppercase text-ink [font-family:var(--font-head)]">
                    {m.label}<Chevron open={acc === m.key} />
                  </button>
                  {acc === m.key && (
                    <ul className="pb-4">
                      <li><Link href={m.tree.href} className="block py-2 font-semibold text-brand-dark">All {m.label.toLowerCase()} →</Link></li>
                      {m.tree.children!.filter((c) => !(m.key === "about" && c.href === "/about/")).map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="flex items-center py-2 pl-3 font-medium text-ink">{c.title}</Link>
                          {m.key === "products" && c.children && (
                            <ul className="mb-1 border-l border-line pl-4">
                              {c.children.map((it) => <li key={it.href}><Link href={it.href} className="block py-1.5 text-[0.95rem] text-body">{it.title}</Link></li>)}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="border-b border-line"><Link href="/contact/" className="block py-4 text-xl font-semibold uppercase text-ink [font-family:var(--font-head)]">Contact</Link></li>
            </ul>
            <div className="mt-6 grid gap-3 pb-10">
              <Link href="/contact/" className="btn btn-red">Get a Quote</Link>
              <a href={`tel:${site.phones.sales.tel}`} className="btn btn-ghost">Call {site.phones.sales.display}</a>
              <a href={whatsappLink()} className="btn btn-ghost">WhatsApp us</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
