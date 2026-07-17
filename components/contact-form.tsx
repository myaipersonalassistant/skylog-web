"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { supportEmail } from "@/lib/app-links";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const topic = String(data.get("topic") ?? "General enquiry");
    const message = String(data.get("message") ?? "");
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(
      `[${topic}] SkyLog enquiry`,
    )}&body=${encodeURIComponent(body)}`;
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[0.84rem] font-medium text-[#253f47] outline-none transition placeholder:font-normal placeholder:text-slate-400 hover:border-slate-300 focus:border-skylog-teal focus:ring-4 focus:ring-skylog-teal/10";

  return (
    <form
      onSubmit={handleSubmit}
      className="font-header rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(42,112,126,0.1)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-[0.82rem] font-bold text-[#253f47]">
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Mike Gens"
            className={fieldClass}
          />
        </label>
        <label className="text-[0.82rem] font-bold text-[#253f47]">
          Email address
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="mike@example.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block text-[0.82rem] font-bold text-[#253f47]">
        What can we help with?
        <select name="topic" className={fieldClass} defaultValue="General enquiry">
          <option>General enquiry</option>
          <option>Existing booking</option>
          <option>Flight, stay or car rental</option>
          <option>Account and sign-in</option>
          <option>Partnerships</option>
          <option>Press and media</option>
        </select>
      </label>

      <label className="mt-5 block text-[0.82rem] font-bold text-[#253f47]">
        Message
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us how we can help..."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.72rem] font-medium leading-5 text-slate-500">
          Submitting opens your email app, so you always keep a copy.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-skylog-teal px-5 py-3 text-[0.82rem] font-extrabold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal focus-visible:ring-offset-2"
        >
          Write to SkyLog
          <Send className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>

      <a
        href={`mailto:${supportEmail}`}
        className="mt-5 inline-flex items-center gap-1 text-[0.72rem] font-bold text-skylog-teal hover:text-skylog-teal-deep"
      >
        Or email {supportEmail} directly
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </form>
  );
}
