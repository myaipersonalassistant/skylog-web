import type { Metadata } from "next";
import {
  ArrowRight,
  Braces,
  CircleCheck,
  Compass,
  Headphones,
  HeartHandshake,
  Lightbulb,
  Map,
  Plane,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { CareersHeroAnimation } from "@/components/careers-hero-animation";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Careers — ${brand.name}`,
  description:
    "Explore careers at SkyLog and help build a more personal, connected future for travel.",
};

const principles = [
  {
    icon: Compass,
    title: "Start with the traveler",
    description:
      "We look beyond the booking to understand the complete journey—before takeoff, while traveling, and long after landing.",
  },
  {
    icon: Lightbulb,
    title: "Make complexity feel simple",
    description:
      "Travel is full of rules, providers, and edge cases. Our work turns that complexity into calm, understandable experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Earn trust in every detail",
    description:
      "Clear prices, honest states, thoughtful privacy, and dependable support matter as much as beautiful interfaces.",
  },
  {
    icon: Sparkles,
    title: "Build with imagination",
    description:
      "SkyLog is practical travel infrastructure with a human story. We make room for craft, curiosity, and memorable ideas.",
  },
] as const;

const teams = [
  {
    icon: Braces,
    name: "Engineering & data",
    description:
      "Build reliable booking, account, travel-data, mobile, and web experiences.",
  },
  {
    icon: Map,
    name: "Product & design",
    description:
      "Shape clear journeys that connect planning, booking, management, and memories.",
  },
  {
    icon: Plane,
    name: "Travel operations",
    description:
      "Help bookings, suppliers, disruptions, and traveler needs move smoothly.",
  },
  {
    icon: Headphones,
    name: "Customer experience",
    description:
      "Turn questions and difficult travel moments into confident next steps.",
  },
  {
    icon: ShieldCheck,
    name: "Trust & business",
    description:
      "Support responsible growth across partnerships, privacy, risk, finance, and people.",
  },
] as const;

const hiringSteps = [
  {
    number: "01",
    title: "A human review",
    description: "We review your experience against the role, not a keyword checklist.",
  },
  {
    number: "02",
    title: "An honest conversation",
    description: "Meet the team, learn the challenge, and ask the questions that matter to you.",
  },
  {
    number: "03",
    title: "Show how you think",
    description: "Role-relevant discussions or exercises focus on judgment and collaboration.",
  },
  {
    number: "04",
    title: "A clear decision",
    description: "We aim to communicate the outcome and next steps without unnecessary delay.",
  },
] as const;

export default function CareersPage() {
  const talentHref = `mailto:${supportEmail}?subject=${encodeURIComponent(
    "Careers at SkyLog",
  )}&body=${encodeURIComponent(
    "Hello SkyLog team,\n\nI would like to be considered for future opportunities.\n\nArea of interest:\nPortfolio or LinkedIn:\nA little about me:\n",
  )}`;

  return (
    <>
      <Navbar />
      <main className="font-header bg-white">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(145deg,#f4faf9_0%,#ffffff_50%,#edf8f6_100%)]">
          <div className="pointer-events-none absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-skylog-mint/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-20">
            <div className="order-2 max-w-3xl lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
                <UsersRound className="h-3.5 w-3.5" aria-hidden="true" />
                Careers at SkyLog
              </span>
              <h1 className="mt-6 text-4xl font-[790] leading-[1.05] tracking-[-0.05em] text-[#193f48] sm:text-5xl lg:text-[3.6rem]">
                Help every journey
                <span className="block text-skylog-teal">mean more.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                We&apos;re building one connected home for booking, managing,
                recording, and remembering travel. That takes people who care
                about both the hard details and the human story.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#open-roles"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-skylog-teal px-5 py-3.5 text-[0.82rem] font-extrabold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
                >
                  Explore opportunities
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#how-we-hire"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3.5 text-[0.82rem] font-bold text-[#253f47] transition-colors hover:border-skylog-mint hover:text-skylog-teal"
                >
                  How we hire
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <CareersHeroAnimation />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-[770] tracking-[-0.04em] text-[#193f48]">
              Ambitious about the product. Grounded in the traveler.
            </h2>
            <p className="mt-4 text-[0.9rem] leading-7 text-[#5a7077]">
              These principles guide how we make decisions, collaborate, and
              decide what excellent looks like.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.title}
                  className="group rounded-2xl border border-slate-200 bg-[#fbfdfd] p-6 transition-all hover:-translate-y-0.5 hover:border-skylog-mint hover:shadow-[0_16px_45px_rgba(42,112,126,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal transition-colors group-hover:bg-skylog-teal group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-[740] text-[#253f47]">{principle.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-[#5a7077]">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-skylog-scrim">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                Many skills. One journey.
              </p>
              <h2 className="mt-3 text-3xl font-[770] tracking-[-0.04em] text-[#193f48]">
                Where you could make an impact.
              </h2>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {teams.map((team) => {
                const Icon = team.icon;
                return (
                  <article key={team.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <Icon className="h-5 w-5 text-skylog-teal" strokeWidth={1.7} aria-hidden="true" />
                    <h3 className="mt-5 text-[0.86rem] font-[740] text-[#253f47]">{team.name}</h3>
                    <p className="mt-2 text-[0.76rem] leading-6 text-[#5a7077]">{team.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-we-hire" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                How we hire
              </p>
              <h2 className="mt-3 text-3xl font-[770] tracking-[-0.04em] text-[#193f48]">
                A two-way conversation.
              </h2>
              <p className="mt-4 text-[0.86rem] leading-7 text-[#5a7077]">
                Hiring should help both sides make a thoughtful decision.
                Individual roles may vary, but clarity and respect should not.
              </p>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              {hiringSteps.map((step) => (
                <li key={step.number} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="text-[0.68rem] font-extrabold tracking-[0.16em] text-skylog-teal">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[0.9rem] font-[740] text-[#253f47]">{step.title}</h3>
                  <p className="mt-2 text-[0.78rem] leading-6 text-[#5a7077]">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="open-roles" className="scroll-mt-24 border-t border-slate-200 bg-[#fbfdfd]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 rounded-[2rem] bg-[linear-gradient(135deg,#245f6c,#174d59)] p-8 shadow-[0_24px_70px_rgba(42,112,126,0.18)] sm:p-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-cyan">
                  Open roles
                </p>
                <h2 className="mt-3 text-2xl font-[770] tracking-[-0.035em] text-white sm:text-3xl">
                  No roles are posted right now.
                </h2>
                <p className="mt-3 max-w-xl text-[0.86rem] leading-7 text-white/70">
                  We&apos;d rather be honest than publish placeholder jobs. If
                  SkyLog&apos;s mission matches your work, introduce yourself
                  and tell us where you could contribute.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6">
                <h3 className="text-base font-[740] text-white">Join our talent network</h3>
                <p className="mt-2 text-[0.78rem] leading-6 text-white/65">
                  Share a portfolio or profile, your area of interest, and a
                  short note. This is not an application to a current vacancy.
                </p>
                <a
                  href={talentHref}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[0.8rem] font-extrabold text-skylog-teal transition-transform hover:-translate-y-0.5"
                >
                  Introduce yourself
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-10 flex gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-skylog-teal" strokeWidth={1.7} aria-hidden="true" />
              <p className="text-[0.78rem] leading-6 text-[#5a7077]">
                SkyLog values fair access to opportunity. Role requirements,
                location, working arrangements, and the selection process will
                be clearly stated when a vacancy is published. If you need a
                reasonable adjustment during hiring, tell us when you feel
                comfortable doing so.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
