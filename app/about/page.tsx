import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CircleCheck,
  CloudSun,
  Compass,
  Globe2,
  Heart,
  Laptop,
  Map,
  PlaneTakeoff,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TicketCheck,
} from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `About — ${brand.name}`,
  description:
    "Meet SkyLog, the connected travel platform for booking, managing, recording, and remembering every journey.",
};

const journey = [
  {
    icon: Compass,
    number: "01",
    title: "Imagine",
    description: "Explore destinations, watch routes, and decide where the next story begins.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Book",
    description: "Bring flights, stays, cars, and eligible extras into one clear journey.",
  },
  {
    icon: TicketCheck,
    number: "03",
    title: "Travel",
    description: "Keep itineraries, passes, updates, and useful trip details close at hand.",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Remember",
    description: "Turn routes, photos, notes, expenses, and milestones into a personal history.",
  },
] as const;

const principles = [
  {
    icon: Heart,
    title: "Personal, not transactional",
    description:
      "A trip is more than a confirmation number. SkyLog keeps the practical details without losing the memories.",
  },
  {
    icon: Sparkles,
    title: "Simple, not simplistic",
    description:
      "Travel is complex behind the scenes. The experience should still feel calm, clear, and considered.",
  },
  {
    icon: ShieldCheck,
    title: "Trust through clarity",
    description:
      "Prices, supplier rules, permissions, operational updates, and unavailable states should be explained honestly.",
  },
  {
    icon: Globe2,
    title: "Built for the whole journey",
    description:
      "Before takeoff, during the trip, and years later, every SkyLog surface should contribute to one story.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="font-header bg-white">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(145deg,#f4faf9_0%,#ffffff_50%,#edf8f6_100%)]">
          <div className="pointer-events-none absolute -right-28 top-0 h-[32rem] w-[32rem] rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-skylog-mint/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_0.78fr] lg:px-8 lg:py-24">
            <div className="order-2 max-w-3xl lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
                <PlaneTakeoff className="h-3.5 w-3.5" aria-hidden="true" />
                The story behind SkyLog
              </span>
              <h1 className="mt-6 text-4xl font-[790] leading-[1.05] tracking-[-0.05em] text-[#193f48] sm:text-5xl lg:text-[3.6rem]">
                Travel deserves a
                <span className="block text-skylog-teal">better memory.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                SkyLog is one connected home for booking the journey, managing
                the details, carrying what matters, and remembering every mile.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={appLinks.flights}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-skylog-teal px-5 py-3.5 text-[0.82rem] font-extrabold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
                >
                  Start a journey
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={appLinks.download}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3.5 text-[0.82rem] font-bold text-[#253f47] transition-colors hover:border-skylog-mint hover:text-skylog-teal"
                >
                  Discover the mobile app
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative isolate mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[3rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.98)_0%,rgba(203,236,232,0.9)_42%,rgba(127,179,179,0.28)_69%,transparent_80%)]" />
                <div className="absolute inset-x-[14%] top-[16%] h-[66%] rounded-full bg-skylog-cyan/25 blur-3xl" />

                <div className="about-speed-field absolute inset-0" aria-hidden="true">
                  {Array.from({ length: 10 }, (_, index) => (
                    <span key={index} className="about-speed-line" />
                  ))}
                </div>

                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <span className="about-wind-ring about-wind-ring-one" />
                  <span className="about-wind-ring about-wind-ring-two" />
                  <span className="about-wind-ring about-wind-ring-three" />
                </div>

                <div className="about-flight-trail absolute left-1/2 top-[59%] h-[45%] w-16 -translate-x-1/2 bg-gradient-to-b from-skylog-cyan/85 via-skylog-teal/35 to-transparent blur-lg" />

                <div className="about-logo-flight relative z-10 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={585}
                    height={710}
                    className="h-44 w-auto object-contain drop-shadow-[0_24px_24px_rgba(15,23,42,0.24)] sm:h-52 lg:h-56"
                    aria-hidden="true"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                Why SkyLog exists
              </p>
              <h2 className="mt-3 text-3xl font-[770] tracking-[-0.04em] text-[#193f48]">
                Your journey should not disappear into an inbox.
              </h2>
            </div>
            <div className="space-y-5 text-[0.94rem] leading-8 text-[#5a7077]">
              <p>
                Travel information is usually scattered across booking emails,
                airline apps, screenshots, camera rolls, wallet passes, and
                spreadsheets. It solves the immediate problem, then the story
                quietly fades.
              </p>
              <p>
                SkyLog brings those moments together. A flight booked on the
                website, a boarding pass added on the go, a manually logged
                route, and a photo remembered years later can all belong to the
                same personal travel history.
              </p>
              <p className="border-l-2 border-skylog-teal pl-5 font-[650] text-[#38545c]">
                The goal is not simply to sell a trip. It is to give every
                journey a useful place before departure and a meaningful life
                after landing.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-skylog-scrim">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                One connected journey
              </p>
              <h2 className="mt-3 text-3xl font-[770] tracking-[-0.04em] text-[#193f48]">
                From an idea to a lifelong memory.
              </h2>
            </div>

            <div className="relative mt-12 grid gap-4 md:grid-cols-4">
              <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-gradient-to-r from-skylog-mint via-skylog-teal to-skylog-mint md:block" />
              {journey.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.number} className="relative rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="relative flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-skylog-teal text-white shadow-lg shadow-skylog-teal/15">
                        <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span className="text-[0.66rem] font-extrabold tracking-[0.16em] text-slate-400">{step.number}</span>
                    </div>
                    <h3 className="mt-6 text-base font-[740] text-[#253f47]">{step.title}</h3>
                    <p className="mt-2 text-[0.78rem] leading-6 text-[#5a7077]">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
              Two products, one SkyLog
            </p>
            <h2 className="mt-3 text-3xl font-[770] tracking-[-0.04em] text-[#193f48]">
              Built for the desk and the departure gate.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(42,112,126,0.08)] sm:p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-skylog-cyan/10 blur-2xl" />
              <Laptop className="relative h-7 w-7 text-skylog-teal" strokeWidth={1.6} aria-hidden="true" />
              <p className="mt-5 text-[0.66rem] font-extrabold uppercase tracking-[0.16em] text-skylog-teal">
                SkyLog website
              </p>
              <h3 className="mt-2 text-2xl font-[750] tracking-[-0.03em] text-[#193f48]">
                Plan and manage with room to think.
              </h3>
              <p className="mt-3 text-[0.84rem] leading-7 text-[#5a7077]">
                Search and book flights, stays, cars, and eligible extras.
                Access your account and manage supported trip details from any
                modern browser.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Travel booking", "Trip management", "Account access", "Support and policies"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.76rem] font-semibold text-[#53676e]">
                    <CircleCheck className="h-4 w-4 text-skylog-teal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(145deg,#edf8f6,#ffffff)] p-7 shadow-[0_18px_55px_rgba(42,112,126,0.08)] sm:p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-skylog-mint/15 blur-2xl" />
              <Smartphone className="relative h-7 w-7 text-skylog-teal" strokeWidth={1.6} aria-hidden="true" />
              <p className="mt-5 text-[0.66rem] font-extrabold uppercase tracking-[0.16em] text-skylog-teal">
                SkyLog mobile app
              </p>
              <h3 className="mt-2 text-2xl font-[750] tracking-[-0.03em] text-[#193f48]">
                Carry the journey. Keep the story.
              </h3>
              <p className="mt-3 text-[0.84rem] leading-7 text-[#5a7077]">
                Keep flights, boarding passes, live updates, expenses, photos,
                notes, maps, and personal travel insights together wherever the
                journey takes you.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Flight vault", "Boarding passes", "Live flight updates", "Insights and memories"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.76rem] font-semibold text-[#53676e]">
                    <CircleCheck className="h-4 w-4 text-skylog-teal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#fbfdfd]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                What guides us
              </p>
              <h2 className="mt-3 text-3xl font-[770] tracking-[-0.04em] text-[#193f48]">
                Product principles with a human center.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article key={principle.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[0.9rem] font-[740] text-[#253f47]">{principle.title}</h3>
                      <p className="mt-2 text-[0.78rem] leading-6 text-[#5a7077]">{principle.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#245f6c,#174d59)] p-8 text-white shadow-[0_24px_70px_rgba(42,112,126,0.18)] sm:p-10">
              <CloudSun className="h-7 w-7 text-skylog-cyan" strokeWidth={1.6} aria-hidden="true" />
              <p className="mt-6 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-cyan">
                Live travel, trusted partners
              </p>
              <h2 className="mt-3 text-2xl font-[760] tracking-[-0.035em] sm:text-3xl">
                Useful information starts with honest sources.
              </h2>
              <p className="mt-4 max-w-2xl text-[0.86rem] leading-7 text-white/70">
                Duffel supports SkyLog&apos;s travel shopping and booking
                experiences. AirLabs supports live operational flight
                information in the mobile app. Supplier and official airline
                information remains authoritative.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-skylog-scrim p-8 sm:p-10">
              <div>
                <Map className="h-7 w-7 text-skylog-teal" strokeWidth={1.6} aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-[760] tracking-[-0.03em] text-[#193f48]">
                  Your next chapter is waiting.
                </h2>
                <p className="mt-3 text-[0.84rem] leading-7 text-[#5a7077]">
                  Begin on the web, carry it in the app, and let every journey
                  become part of your story.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={appLinks.flights} className="inline-flex items-center gap-2 rounded-xl bg-skylog-teal px-5 py-3 text-[0.8rem] font-bold text-white">
                  Explore travel
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href={appLinks.contact} className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-[0.8rem] font-bold text-[#253f47]">
                  Contact SkyLog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
