"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Cloud,
  Map,
  Plane,
  Sparkles,
  Trophy,
} from "lucide-react";
import { appLinks } from "@/lib/app-links";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

const billingOptions = {
  monthly: {
    label: "Monthly",
    total: 14.99,
    monthlyEquivalent: 14.99,
    cadence: "billed every month",
    savings: null,
  },
  quarterly: {
    label: "Quarterly",
    total: 39.99,
    monthlyEquivalent: 13.33,
    cadence: "billed every 3 months",
    savings: "Save $4.98 each quarter",
  },
  yearly: {
    label: "Yearly",
    total: 129.99,
    monthlyEquivalent: 10.83,
    cadence: "billed once a year",
    savings: "Save $49.89 each year",
  },
} as const;

const includedFeatures = [
  { icon: Plane, text: "Unlimited flight logs" },
  { icon: Map, text: "Journey maps and lifetime statistics" },
  { icon: Trophy, text: "Milestones, badges, and shareable cards" },
  { icon: Cloud, text: "Cloud sync across your devices" },
] as const;

export function PricingSelector() {
  const [period, setPeriod] = useState<BillingPeriod>("yearly");
  const selected = billingOptions[period];
  const checkoutHref = `${appLinks.signUp}?plan=pro&billing=${period}`;

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-10 rounded-full bg-skylog-cyan/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_32px_100px_rgba(42,112,126,0.16)]">
        <div className="border-b border-slate-200 bg-[linear-gradient(145deg,#f1faf8,#ffffff)] p-5 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-1.5 text-[0.66rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                <Sparkles className="h-3.5 w-3.5 text-skylog-amber" fill="currentColor" aria-hidden="true" />
                SkyLog Pro
              </p>
              <h2 className="mt-2 text-2xl font-[790] tracking-[-0.04em] text-skylog-ink">
                One plan. Every journey.
              </h2>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-wider text-amber-800">
                7 days free
              </span>
              <BadgeCheck className="hidden h-8 w-8 text-skylog-teal sm:block" strokeWidth={1.6} aria-hidden="true" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 rounded-xl border border-slate-200 bg-white p-1 shadow-sm" aria-label="Choose a billing period">
            {(Object.keys(billingOptions) as BillingPeriod[]).map((option) => {
              const active = period === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPeriod(option)}
                  aria-pressed={active}
                  className={`relative rounded-lg px-2 py-2.5 text-[0.72rem] font-extrabold transition-all sm:text-xs ${
                    active
                      ? "bg-skylog-teal text-white shadow-md shadow-skylog-teal/15"
                      : "text-[#60747a] hover:bg-skylog-scrim hover:text-skylog-teal"
                  }`}
                >
                  {billingOptions[option].label}
                  {option === "yearly" && (
                    <span className="absolute -right-1 -top-2 rounded-full bg-skylog-amber px-1.5 py-0.5 text-[0.46rem] font-black uppercase tracking-wider text-amber-950">
                      Best
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-[820] tracking-[-0.065em] text-skylog-ink">
                  ${selected.monthlyEquivalent.toFixed(2)}
                </span>
                <span className="pb-1.5 text-sm font-bold text-slate-500">/ month</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-[#60747a]">
                ${selected.total.toFixed(2)} {selected.cadence}
              </p>
            </div>
            {selected.savings && (
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[0.68rem] font-extrabold text-emerald-700">
                {selected.savings}
              </span>
            )}
          </div>

          <div className="my-7 border-t border-dashed border-slate-200" />

          <ul className="grid gap-4">
            {includedFeatures.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm font-semibold text-[#415b63]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
                  <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <Link
            href={checkoutHref}
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-skylog-teal px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-skylog-teal/20 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
          >
            Choose {selected.label} · ${selected.total.toFixed(2)} total
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[0.68rem] font-semibold text-slate-500">
            <Check className="h-3.5 w-3.5 text-skylog-teal" aria-hidden="true" />
            7 days free, then ${selected.total.toFixed(2)} {selected.cadence}. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
