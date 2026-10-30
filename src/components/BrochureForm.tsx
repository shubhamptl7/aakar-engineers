"use client";

import { useState } from "react";
import { brochureUrl, site } from "@/content/site";

/** Brochure request (Netlify form "brochure"). If a PDF is configured, the download starts after submit. */
export default function BrochureForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!String(data.get("name") ?? "").trim() || (!String(data.get("email") ?? "").includes("@") && String(data.get("phone") ?? "").replace(/\D/g, "").length < 8)) {
      setErr("Please enter your name and an email or phone number.");
      return;
    }
    setErr("");
    setStatus("sending");
    try {
      const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data as unknown as Record<string, string>).toString() });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok && brochureUrl) window.location.href = brochureUrl;
    } catch { setStatus("error"); }
  }

  if (status === "ok") {
    return <p role="status" className="rounded-md bg-white/10 p-5 text-lg font-semibold text-white">Thank you. {brochureUrl ? "Your download has started." : "We will send the brochure to you shortly."}</p>;
  }

  return (
    <form name="brochure" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} noValidate className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
      <input type="hidden" name="form-name" value="brochure" />
      <p className="hidden"><label>Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <label className="sr-only" htmlFor="b-name">Your name</label>
      <input id="b-name" name="name" placeholder="Your name *" autoComplete="name" className="field" />
      <label className="sr-only" htmlFor="b-email">Email</label>
      <input id="b-email" name="email" type="email" placeholder="Email" autoComplete="email" className="field" />
      <label className="sr-only" htmlFor="b-phone">Phone / WhatsApp</label>
      <input id="b-phone" name="phone" type="tel" placeholder="Phone / WhatsApp" autoComplete="tel" className="field" />
      <button type="submit" disabled={status === "sending"} className="btn btn-red">{status === "sending" ? "Sending…" : "Get brochure"}</button>
      <div role="alert" className="sm:col-span-2 lg:col-span-4">
        {err && <p className="text-sm text-brand-soft">{err}</p>}
        {status === "error" && <p className="text-sm text-brand-soft">Could not send. Email <a className="underline" href={`mailto:${site.email}?subject=Brochure request`}>{site.email}</a>.</p>}
      </div>
    </form>
  );
}
