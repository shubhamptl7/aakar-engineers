import Link from "next/link";
import Photo from "./Photo";

/** Photo banner + breadcrumb: the inner-page convention across Indian competitor sites. */
export default function PageBanner({ photo, alt = "", crumbs, title, sub, kicker }: { photo: string; alt?: string; crumbs: { href?: string; label: string }[]; title: string; sub?: string; kicker?: string }) {
  return (
    <section className="dark relative isolate overflow-hidden bg-navy text-white">
      <Photo base={photo} alt={alt} priority className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
      <div className="container-x py-14 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.9rem] text-white/75">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? <Link href={c.href} className="hover:text-white hover:underline">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {kicker && <p className="eyebrow mt-6">{kicker}</p>}
        <h1 className="title-xl mt-3 max-w-3xl !text-white">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-white/85">{sub}</p>}
      </div>
    </section>
  );
}
