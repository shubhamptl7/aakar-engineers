"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/content/site";

type Status = "idle" | "sending" | "ok" | "error";

const interests = [
  { group: "I know the equipment", options: [
    "FRP cooling tower: round bottle",
    "FRP cooling tower: other type",
    "Water treatment plant (RO, DM, softener, filtration)",
    "Effluent / sewage treatment plant or equipment",
    "Water treatment chemicals",
    "Spares & accessories",
  ]},
  { group: "I have a water problem or project", options: [
    "Zero liquid discharge / water recycling",
    "Operation & maintenance / AMC for an existing plant",
    "Turnkey project",
    "Not sure, I need technical guidance",
  ]},
];

const prefill: Record<string, string> = {
  "round-bottle": "FRP cooling tower: round bottle",
  "cooling-towers": "FRP cooling tower: other type",
};

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [type, setType] = useState<"product" | "problem">("product");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const p = q.get("product");
    if (p && prefill[p]) setInterest(prefill[p]);
    if (q.get("type") === "problem") setType("problem");
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) errs.name = "Please enter your name.";
    if (!String(data.get("company") ?? "").trim()) errs.company = "Please enter your company.";
    const phone = String(data.get("phone") ?? "").replace(/[^\d+]/g, "");
    if (phone.replace(/\D/g, "").length < 8) errs.phone = "Please enter a phone number we can call.";
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errs.email = "That email address looks incomplete.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      (form.querySelector("[aria-invalid='true']") as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="rounded-md border border-ok bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-ok">Enquiry received</p>
        <h3 className="title-md mt-3">Thank you. An Aakar engineer will contact you.</h3>
        <p className="mt-3 text-muted">If your requirement is urgent, call <a className="link" href={`tel:${site.phones.sales.tel}`}>{site.phones.sales.display}</a>.</p>
      </div>
    );
  }

  const err = (k: string) => (errors[k] ? <p id={`e-${k}`} className="mt-1 text-sm text-err">{errors[k]}</p> : null);
  const inv = (k: string) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `e-${k}` : undefined }) as const;
  const L = "mb-1.5 block text-[0.9rem] font-semibold";

  return (
    <form name="enquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={onSubmit} noValidate className="space-y-5">
      <input type="hidden" name="form-name" value="enquiry" />
      <p className="hidden"><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

      <fieldset>
        <legend className={L}>What brings you here?</legend>
        <div className="grid gap-px border border-navy bg-navy sm:grid-cols-2">
          {([["product", "I need a product or equipment"], ["problem", "I have a water problem"]] as const).map(([v, t]) => (
            <label key={v} className={`flex cursor-pointer items-center gap-3 px-4 py-3 text-[0.95rem] font-medium has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-water ${type === v ? "bg-navy text-white" : "bg-white"}`}>
              <input type="radio" name="enquiry_type" value={v} checked={type === v} onChange={() => setType(v)} className="sr-only" />
              <span aria-hidden="true" className={`h-4 w-4 rounded-full border-2 ${type === v ? "border-white bg-brand" : "border-navy"}`} />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="interest" className={L}>{type === "product" ? "Product / equipment" : "Area of interest"}</label>
        <select id="interest" name="interest" className="field" value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select…</option>
          {interests.map((g) => (
            <optgroup key={g.group} label={g.group}>{g.options.map((o) => <option key={o} value={o}>{o}</option>)}</optgroup>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className={L}>{type === "product" ? "Capacity, quantity or specification" : "Describe the problem"}</label>
        <textarea id="details" name="details" rows={compact ? 3 : 4} className="field" placeholder={type === "product" ? "e.g. cooling load or flow, number of units, location of the plant" : "e.g. what is failing, current plant, discharge or quality limits you must meet"} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={L}>Your name <span className="text-brand-dark">*</span></label>
          <input id="name" name="name" autoComplete="name" className="field" required {...inv("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="company" className={L}>Company <span className="text-brand-dark">*</span></label>
          <input id="company" name="company" autoComplete="organization" className="field" required {...inv("company")} />
          {err("company")}
        </div>
        <div>
          <label htmlFor="phone" className={L}>Phone / WhatsApp <span className="text-brand-dark">*</span></label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" required {...inv("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="email" className={L}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className="field" {...inv("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="city" className={L}>Plant location (city / state)</label>
          <input id="city" name="city" autoComplete="address-level2" className="field" />
        </div>
        <div>
          <label htmlFor="industry" className={L}>Industry</label>
          <select id="industry" name="industry" className="field" defaultValue="">
            <option value="">Select…</option>
            {["Textile & processing", "Pharmaceutical & chemical", "Food & beverage", "Engineering & manufacturing", "Other"].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-red sm:min-w-52" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"} <span aria-hidden="true">→</span>
        </button>
        <p className="text-[0.82rem] leading-snug text-muted">We use your details only to respond to this enquiry.</p>
      </div>

      <div role="alert" aria-live="assertive">
        {status === "error" && (
          <p className="border border-err bg-white p-4 text-[0.92rem] text-err">
            We could not send your enquiry. Please call <a className="underline" href={`tel:${site.phones.sales.tel}`}>{site.phones.sales.display}</a>, message us on <a className="underline" href={whatsappLink()}>WhatsApp</a>, or email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
