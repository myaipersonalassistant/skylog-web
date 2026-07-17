import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  CircleCheck,
  Eye,
  Keyboard,
  MousePointer2,
  ScanText,
  Volume2,
} from "lucide-react";
import { AccessibilityHeroAnimation } from "@/components/accessibility-hero-animation";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Accessibility — ${brand.name}`,
  description:
    "Learn about SkyLog's approach to accessible travel planning, booking, and trip management.",
};

const accessibilityAreas = [
  {
    icon: Eye,
    title: "Clear and readable",
    description:
      "Strong color contrast, meaningful visual hierarchy, scalable text, and content that does not rely on color alone.",
  },
  {
    icon: Keyboard,
    title: "Keyboard friendly",
    description:
      "Logical focus order, visible focus states, and support for navigating important website actions without a mouse.",
  },
  {
    icon: Volume2,
    title: "Screen-reader aware",
    description:
      "Semantic structure, descriptive labels, useful alternative text, and announcements for important interface changes.",
  },
  {
    icon: MousePointer2,
    title: "Comfortable interaction",
    description:
      "Generous touch targets, clear controls, predictable behavior, and alternatives to interactions that depend on hovering.",
  },
  {
    icon: ScanText,
    title: "Understandable content",
    description:
      "Plain language, descriptive headings, helpful errors, and booking information designed to be easy to review.",
  },
] as const;

const commitments = [
  "Review new customer experiences with accessibility in mind",
  "Test essential journeys across different input methods and screen sizes",
  "Improve barriers reported by travelers and support teams",
  "Consider accessibility when selecting and integrating travel partners",
] as const;

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main className="font-header bg-white">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(145deg,#f5faf9_0%,#ffffff_52%,#edf8f6_100%)]">
          <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-skylog-mint/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-24">
            <div className="order-2 max-w-3xl lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
                <Accessibility className="h-3.5 w-3.5" aria-hidden="true" />
                Travel should include everyone
              </span>
              <h1 className="mt-6 text-4xl font-[780] leading-[1.06] tracking-[-0.045em] text-[#193f48] sm:text-5xl">
                Accessibility at SkyLog
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                We want planning, booking, and remembering a journey to feel
                straightforward for as many people as possible—regardless of
                ability, technology, or how they interact with SkyLog.
              </p>
              <p className="mt-4 text-[0.78rem] font-semibold text-slate-500">
                Last updated: July 17, 2026
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <AccessibilityHeroAnimation />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
              Our approach
            </p>
            <h2 className="mt-3 text-3xl font-[760] tracking-[-0.035em] text-[#193f48]">
              Designed for different ways of navigating.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5a7077]">
              Accessibility is an ongoing practice. These are the areas we
              consider as SkyLog&apos;s website and mobile experiences evolve.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accessibilityAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfdfd] p-6 transition-all hover:-translate-y-0.5 hover:border-skylog-mint hover:shadow-[0_16px_45px_rgba(42,112,126,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
                    <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-extrabold text-skylog-ink">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}

            <article className="rounded-2xl bg-skylog-teal p-6 text-white shadow-[0_18px_50px_rgba(42,112,126,0.16)]">
              <Accessibility className="h-6 w-6 text-skylog-cyan" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-5 text-base font-extrabold">Our direction</h3>
              <p className="mt-2 text-sm leading-7 text-white/75">
                We use WCAG 2.2 Level AA as a guiding standard while continuing
                to review, test, and improve the experience.
              </p>
            </article>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-skylog-scrim">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                What we commit to
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-skylog-ink">
                Improvement, not a one-time finish line.
              </h2>
              <ul className="mt-7 space-y-4">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-skylog-teal" strokeWidth={1.8} aria-hidden="true" />
                    {commitment}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(42,112,126,0.08)] sm:p-8">
              <h2 className="text-xl font-extrabold tracking-tight text-skylog-ink">
                Third-party travel content
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Some flight, stay, car-rental, payment, or destination content
                comes from travel partners. Their experiences may not always
                meet the same accessibility level as SkyLog. We still want to
                hear when partner content creates a barrier so we can offer
                guidance and raise the issue where appropriate.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[linear-gradient(135deg,#245f6c,#174d59)] p-8 shadow-[0_24px_70px_rgba(42,112,126,0.18)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-skylog-cyan">
                Found an accessibility barrier?
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Tell us what made your journey difficult.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Include the page, device, browser, assistive technology, and
                what you were trying to do. Please do not include passwords or
                payment-card details.
              </p>
              <p className="mt-2 text-sm text-white/70">
                You can also email{" "}
                <a href={`mailto:${supportEmail}`} className="font-bold text-white underline decoration-white/40 underline-offset-4">
                  {supportEmail}
                </a>
                .
              </p>
            </div>
            <Link
              href={appLinks.contact}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-skylog-teal shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Report an accessibility issue
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
