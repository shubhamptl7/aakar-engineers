import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { allPages, otherPages, trees, type PageNode } from "@/content/sitemap";
import { photo } from "@/content/site";

export const metadata: Metadata = { title: "Sitemap", description: "All pages of the Aakar Engineers website.", alternates: { canonical: "/site-map/" } };

function Item({ n, depth = 0 }: { n: PageNode; depth?: number }) {
  return (
    <li>
      <Link href={n.href} className={`flex items-center justify-between gap-3 rounded px-3 py-2 hover:bg-mist ${depth === 0 ? "font-semibold text-ink" : "text-body"}`}>
        <span>{n.title}</span>
        {n.live ? <span className="shrink-0 whitespace-nowrap rounded bg-ok/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-ok">Live</span> : <span className="shrink-0 whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-muted">Coming soon</span>}
      </Link>
      {n.children && (
        <ul className="ml-3 border-l border-line pl-2">
          {n.children.filter((c) => c.href !== n.href).map((c) => <Item key={c.href} n={c} depth={depth + 1} />)}
        </ul>
      )}
    </li>
  );
}

export default function SiteMap() {
  const pages = allPages();
  const live = pages.filter((p) => p.live).length;
  return (
    <>
      <PageBanner photo={photo.towersField} crumbs={[{ href: "/", label: "Home" }, { label: "Sitemap" }]} kicker="Sitemap" title="Every page on this website" sub={`${pages.length} pages: ${live} live now, ${pages.length - live} being prepared.`} />
      <section className="container-x py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <h2 className="mb-3 text-2xl uppercase">Main</h2>
            <ul><Item n={{ href: "/", title: "Home", live: true }} /></ul>
            <h2 className="mb-3 mt-8 text-2xl uppercase">More</h2>
            <ul>{otherPages.map((n) => <Item key={n.href} n={n} />)}</ul>
          </div>
          {trees.map((t) => (
            <div key={t.href + t.title} className={t.title === "Products" ? "md:row-span-2" : ""}>
              <h2 className="mb-3 text-2xl uppercase">{t.title}</h2>
              <ul><Item n={t} /></ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
