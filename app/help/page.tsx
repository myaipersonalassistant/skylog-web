import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LifeBuoy } from "lucide-react";
import { HelpCenter } from "@/components/help-center";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Help Centre — ${brand.name}`,
  description:
    "Find answers about SkyLog bookings, trip management, flight extras, accounts, and payments.",
};

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main className="font-header bg-[#fbfdfd] pt-[4.5rem]">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(145deg,#f4faf9_0%,#ffffff_55%,#edf8f6_100%)]">
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 text-center sm:pb-16 sm:pt-20 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
              <LifeBuoy className="h-3.5 w-3.5" aria-hidden="true" />
              SkyLog support
            </span>
            <h1 className="mt-5 text-4xl font-[780] tracking-[-0.045em] text-[#193f48] sm:text-5xl">
              How can we help?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#526970]">
              Find quick answers for bookings, travel extras, accounts, and
              everything in between.
            </p>

            <HelpCenter />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex flex-col gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(42,112,126,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                Still need a hand?
              </p>
              <h2 className="mt-2 text-2xl font-[760] tracking-[-0.025em] text-[#193f48]">
                Talk to the SkyLog team.
              </h2>
              <p className="mt-2 text-[0.86rem] leading-6 text-[#5a7077]">
                Share your booking reference when contacting us about an existing trip.
              </p>
            </div>
            <Link
              href={appLinks.contact}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-skylog-teal px-5 py-3 text-[0.82rem] font-extrabold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
            >
              Contact support
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
