import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import { photo, site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us & Get a Quote",
  description: "Contact Aakar Engineers, Ahmedabad, for cooling towers, water and effluent treatment plants, chemicals, spares and O&M. Call +91 79 2640 9000 or send an enquiry.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  const cards = [
    { t: "Call us", v: site.phones.sales.display, s: `Mobile ${site.phones.mobile.display}`, href: `tel:${site.phones.sales.tel}` },
    { t: "WhatsApp", v: site.phones.mobile.display, s: "Message an engineer", href: whatsappLink() },
    { t: "Email", v: site.email, s: "Send drawings or specifications", href: `mailto:${site.email}` },
  ];
  return (
    <>
      <PageBanner photo={photo.ro} alt="Water treatment plant" crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]} kicker="Contact us" title="Tell us about your requirement" sub="Know the equipment you need, or only know something is wrong? Either way, start here." />

      <section className="relative z-10 -mt-8">
        <ul className="container-x grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <li key={c.t}>
              <a href={c.href} className="block h-full rounded-md border-t-4 border-brand bg-white p-6 shadow-[0_14px_40px_rgba(15,34,54,.12)] transition-transform hover:-translate-y-0.5">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted">{c.t}</span>
                <span className="mt-1 block break-words text-2xl font-semibold text-ink [font-family:var(--font-head)]">{c.v}</span>
                <span className="mt-1 block text-[0.95rem]">{c.s}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.25fr_1fr] lg:py-20">
        <div className="rounded-md border border-line bg-white p-6 shadow-[0_14px_40px_rgba(15,34,54,.06)] sm:p-9">
          <h2 className="title-lg">Send an enquiry</h2>
          <p className="mb-7 mt-2">An Aakar engineer will contact you to discuss your requirement.</p>
          <EnquiryForm />
        </div>
        <div>
          <h2 className="title-lg">Our offices</h2>
          <div className="mt-6 space-y-5">
            {Object.values(site.offices).map((o) => (
              <address key={o.label} className="rounded-md bg-mist p-6 not-italic">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-dark">{o.label}</span>
                <span className="mt-2 block text-lg font-medium leading-relaxed text-ink">{o.lines.map((l) => <span key={l} className="block">{l}</span>)}</span>
                <a href={o.map} rel="noopener" className="link mt-3 inline-block">Get directions →</a>
              </address>
            ))}
            <p>Registered office phone: <a className="link" href={`tel:${site.phones.registered.tel}`}>{site.phones.registered.display}</a></p>
          </div>
          <div className="mt-6 overflow-hidden rounded-md border border-line">
            <iframe title="Map: Aakar Engineers sales office, Ellisbridge, Ahmedabad" src="https://www.google.com/maps?q=Wallstreet+2,+Opp+Orient+Club,+Ellisbridge,+Ahmedabad+380006&output=embed" className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="container-x">
          <h2 className="title-md text-center">What happens next</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {["We review your enquiry and call you.", "We discuss the requirement and ask for site or water data.", "You receive a techno-commercial offer."].map((t, i) => (
              <li key={t} className="flex items-start gap-4 rounded-md bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">{i + 1}</span>
                <span className="pt-1.5 font-medium text-ink">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
