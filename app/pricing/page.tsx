import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarSync,
  ChartNoAxesCombined,
  Cloud,
  LockKeyhole,
  MapPinned,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { PricingSelector } from "@/components/pricing-selector";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Pricing — ${brand.name}`,
  description:
    "Start a 7-day SkyLog Pro free trial, then choose monthly, quarterly, or yearly billing for unlimited flight logs, journey maps, statistics, milestones, and cloud sync.",
};

const proHighlights = [
  {
    icon: PlaneTakeoff,
    eyebrow: "No artificial ceilings",
    title: "Log every flight",
    description:
      "Keep a complete record of your journeys without limiting how much of your travel history belongs in SkyLog.",
  },
  {
    icon: MapPinned,
    eyebrow: "See the whole story",
    title: "Maps that grow with you",
    description:
      "Watch routes, airports, countries, distance, and time in the air become a visual record of where you have been.",
  },
  {
    icon: ChartNoAxesCombined,
    eyebrow: "Your travel, understood",
    title: "Lifetime statistics",
    description:
      "Turn individual flights into meaningful patterns, milestones, and a clearer picture of your life in motion.",
  },
  {
    icon: Cloud,
    eyebrow: "Always within reach",
    title: "Sync across devices",
    description:
      "Keep your SkyLog connected so your travel history follows you between supported devices.",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="font-header overflow-hidden bg-white mt-8 sm:mt-0">
 
        <section className="relative border-b border-slate-200 bg-[linear-gradient(145deg,#f2faf8_0%,#ffffff_48%,#f8f5e9_100%)]">
          <div className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-36 bottom-0 h-96 w-96 rounded-full bg-skylog-mint/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(42,112,126,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(42,112,126,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/90 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-amber-800 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-skylog-amber" fill="currentColor" aria-hidden="true" />
                SkyLog Pro pricing
              </span>
              <h1 className="mt-6 text-4xl font-[810] leading-[1.04] tracking-[-0.055em] text-[#193f48] sm:text-5xl lg:text-[4rem]">
                More sky.
                <span className="block text-skylog-teal">More of your story.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                Unlock the complete SkyLog experience with one Pro plan and
                choose the billing rhythm that works for you. Every option
                begins with a 7-day free trial.
              </p>

              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                {[
                  { value: "$14.99", label: "Monthly" },
                  { value: "$39.99", label: "Quarterly" },
                  { value: "$129.99", label: "Yearly" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-3 shadow-sm">
                    <p className="text-lg font-[790] tracking-[-0.035em] text-skylog-ink">{item.value}</p>
                    <p className="mt-0.5 text-[0.65rem] font-extrabold uppercase tracking-[0.13em] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs font-semibold leading-5 text-slate-500">
                All prices are in USD. Taxes may apply. Already subscribed?{" "}
                <Link href={appLinks.signIn} className="font-extrabold text-skylog-teal hover:text-skylog-teal-deep">
                  Manage your plan
                </Link>
              </p>
            </div>

            <PricingSelector />
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-3 lg:px-8">
            {[
              { icon: LockKeyhole, text: "Secure account checkout" },
              { icon: CalendarSync, text: "Flexible billing periods" },
              { icon: ShieldCheck, text: "Cancel renewal anytime" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 sm:justify-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-skylog-scrim text-skylog-teal">
                  <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="text-xs font-bold text-[#526970]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-skylog-teal">
              Everything in Pro
            </p>
            <h2 className="mt-4 text-3xl font-[790] tracking-[-0.045em] text-[#193f48] sm:text-4xl">
              Built for a lifetime of journeys.
            </h2>
            <p className="mt-4 text-sm font-medium leading-7 text-[#60747a] sm:text-base">
              Pro gives your travel history the room, context, and continuity it deserves.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {proHighlights.map(({ icon: Icon, eyebrow, title, description }) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-slate-200 bg-[#fbfdfd] p-6 transition-all hover:-translate-y-1 hover:border-skylog-mint/60 hover:shadow-[0_22px_65px_rgba(42,112,126,0.1)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-skylog-teal/[0.08] text-skylog-teal transition-colors group-hover:bg-skylog-teal group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-skylog-teal">{eyebrow}</p>
                    <h3 className="mt-1.5 text-xl font-[760] tracking-[-0.03em] text-[#193f48]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-[#60747a]">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f5faf9]">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-skylog-teal">
                Upgrade on your terms
              </p>
              <h2 className="mt-4 text-3xl font-[790] leading-tight tracking-[-0.045em] text-[#193f48] sm:text-4xl">
                Start monthly. Move when it makes sense.
              </h2>
              <p className="mt-5 max-w-xl text-base font-medium leading-8 text-[#60747a]">
                Move from monthly to quarterly or yearly billing as your travel
                story grows. SkyLog shows the billing change before you confirm.
              </p>
              <Link
                href={`${appLinks.signUp}?plan=pro&billing=monthly`}
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-skylog-teal px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
              >
                Start with monthly
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-skylog-cyan/15 blur-3xl" />
              <div className="relative grid gap-3 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_28px_80px_rgba(42,112,126,0.13)] sm:p-7">
                {[
                  { number: "01", title: "Monthly", price: "$14.99", note: "Maximum flexibility" },
                  { number: "02", title: "Quarterly", price: "$39.99", note: "Save $4.98 per quarter" },
                  { number: "03", title: "Yearly", price: "$129.99", note: "Best value · Save $49.89" },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 rounded-2xl border p-4 ${
                      index === 0
                        ? "border-skylog-mint/100 bg-skylog-scrim shadow-sm"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <span className="text-[0.62rem] font-black tracking-[0.14em] text-skylog-teal">{item.number}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-[760] text-skylog-ink">{item.title}</p>
                      <p className="mt-0.5 text-[0.68rem] font-semibold text-slate-500">{item.note}</p>
                    </div>
                    <p className="text-lg font-[790] tracking-[-0.035em] text-skylog-ink">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
