"use client";

import { useState } from "react";
import { site } from "@/content/site";

/** Short "request a call back" form: the hero/sidebar lead form pattern used by Towertech, Delta and others. Netlify form "callback". */
export default function QuickEnquiry({ title = "Request a call back", source, defaultInterest = "" }: { title?: string; source: string; defaultInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [err, setErr] = useState<Record<string, string>>({});

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const er: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) er.name = "Enter your name";
    if (String(data.get("phone") ?? "").replace(/\D/g, "").length < 8) er.phone = "Enter a valid phone number";
    setErr(er);
    if (Object.keys(er).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data as unknown as Record<string, string>).toString() });
      setStatus(res.ok ? "ok" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "ok") {
    return (
      <div role="status" className="rounded-md bg-white p-7 shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-ok">Request received</p>
        <p className="mt-2 text-2xl font-semibold text-ink [font-family:var(--font-head)]">Thank you. Our engineer will call you shortly.</p>
      </div>
    );
  }

  const id = `q-${source}`;
  return (
    <form name="callback" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} noValidate className="rounded-md bg-white p-6 text-body shadow-2xl sm:p-7">
      <input type="hidden" name="form-name" value="callback" />
      <input type="hidden" name="source" value={source} />
      <p className="hidden"><label>Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <h2 className="text-[1.6rem] uppercase">{title}</h2>
      <p className="mt-1 text-[0.95rem] text-muted">Share a few details. An Aakar engineer will call you.</p>
      <div className="mt-5 space-y-3.5">
        <div>
          <label htmlFor={`${id}-name`} className="sr-only">Your name</label>
          <input id={`${id}-name`} name="name" placeholder="Your name *" autoComplete="name" className="field" aria-invalid={!!err.name || undefined} aria-describedby={err.name ? `${id}-en` : undefined} />
          {err.name && <p id={`${id}-en`} className="mt-1 text-sm text-err">{err.name}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="sr-only">Phone or WhatsApp</label>
          <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" placeholder="Phone / WhatsApp *" autoComplete="tel" className="field" aria-invalid={!!err.phone || undefined} aria-describedby={err.phone ? `${id}-ep` : undefined} />
          {err.phone && <p id={`${id}-ep`} className="mt-1 text-sm text-err">{err.phone}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-company`} className="sr-only">Company and city</label>
          <input id={`${id}-company`} name="company" placeholder="Company & city" autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor={`${id}-req`} className="sr-only">Requirement</label>
          <select id={`${id}-req`} name="requirement" className="field" defaultValue={defaultInterest}>
            <option value="">Requirement</option>
            <option>FRP cooling tower</option>
            <option>Water treatment / RO plant</option>
            <option>Effluent or sewage treatment plant</option>
            <option>Water treatment chemicals</option>
            <option>Spares & accessories</option>
            <option>ZLD / water recycling</option>
            <option>O&M / AMC</option>
          </select>
        </div>
      </div>
      <button type="submit" disabled={status === "sending"} className="btn btn-red mt-5 w-full">{status === "sending" ? "Sending…" : "Request call back"}</button>
      <div role="alert">
        {status === "error" && <p className="mt-3 text-sm text-err">Could not send. Please call <a className="underline" href={`tel:${site.phones.sales.tel}`}>{site.phones.sales.display}</a>.</p>}
      </div>
    </form>
  );
}
