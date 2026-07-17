import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Check,
  Clock3,
  Cookie,
  LockKeyhole,
  Settings2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { OpenCookieSettingsButton } from "@/components/open-cookie-settings-button";
import { PolicyHeroAnimation } from "@/components/policy-hero-animation";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Cookie Policy & Settings — ${brand.name}`,
  description:
    "Understand how SkyLog uses cookies and manage your website cookie preferences.",
};

const lastUpdated = "July 17, 2026";

const categories = [
  {
    icon: LockKeyhole,
    name: "Essential",
    status: "Always active",
    description:
      "Required for security, consent records, account sessions, and core website functions. These cannot be switched off through SkyLog.",
    examples: "Consent choice, authentication, security, fraud prevention",
  },
  {
    icon: Sparkles,
    name: "Preferences",
    status: "Optional",
    description:
      "Remember choices that make the website more personal or convenient. These remain off unless you allow them.",
    examples: "Display preferences, remembered website choices",
  },
  {
    icon: BarChart3,
    name: "Analytics",
    status: "Optional",
    description:
      "Help us understand website use, performance, errors, and accessibility so we can improve SkyLog.",
    examples: "Page usage, performance, and aggregated interaction insights",
  },
] as const;

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="font-header bg-white">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(145deg,#f5faf9_0%,#ffffff_52%,#fff9ec_100%)]">
          <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_0.55fr] lg:px-8">
            <div className="order-2 max-w-3xl lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-amber-700 shadow-sm">
                <Cookie className="h-3.5 w-3.5" aria-hidden="true" />
                Clear choices, no crumbs hidden
              </span>
              <h1 className="mt-6 text-4xl font-[780] tracking-[-0.045em] text-[#193f48] sm:text-5xl">
                Cookie Policy & Settings
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                Learn what cookies do on SkyLog and decide whether optional
                preference and analytics cookies may be used.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <OpenCookieSettingsButton id="settings" />
                <span className="text-[0.74rem] font-medium text-slate-500">
                  Last updated: {lastUpdated}
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <PolicyHeroAnimation policy="cookies" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
              The essentials
            </p>
            <h2 className="mt-3 text-3xl font-[760] tracking-[-0.035em] text-[#193f48]">
              What cookies are—and why choice matters.
            </h2>
            <p className="mt-4 text-[0.9rem] leading-7 text-[#5a7077]">
              Cookies are small text files stored by your browser. They can keep
              a website secure, remember a choice, maintain a session, or help
              its operator understand how it performs. Similar technologies,
              such as local storage, may serve related purposes.
            </p>
            <p className="mt-4 text-[0.9rem] leading-7 text-[#5a7077]">
              SkyLog uses essential cookies without optional consent because
              they are needed for core functions. Preference and analytics
              categories remain disabled unless you choose to allow them.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article key={category.name} className="rounded-2xl border border-slate-200 bg-[#fbfdfd] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.1em] ${
                      category.status === "Always active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}>
                      {category.status}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-[740] text-[#253f47]">{category.name}</h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-[#5a7077]">{category.description}</p>
                  <p className="mt-4 border-t border-slate-200 pt-4 text-[0.7rem] leading-5 text-slate-500">
                    <span className="font-bold text-[#53676e]">Examples:</span>{" "}
                    {category.examples}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-skylog-scrim">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                  Cookies currently used
                </p>
                <h2 className="mt-3 text-2xl font-[760] tracking-[-0.025em] text-[#193f48]">
                  A transparent record.
                </h2>
                <p className="mt-3 text-[0.84rem] leading-7 text-[#5a7077]">
                  The exact set can change as account and booking features
                  evolve. We will update this page when cookie purposes change
                  materially.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <div className="grid min-w-[36rem] grid-cols-[1.15fr_0.85fr_0.55fr] gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                  <span>Cookie</span>
                  <span>Purpose</span>
                  <span>Duration</span>
                </div>
                <div className="grid min-w-[36rem] grid-cols-[1.15fr_0.85fr_0.55fr] gap-3 px-5 py-5 text-[0.76rem] leading-5 text-[#5a7077]">
                  <code className="break-all font-semibold text-skylog-teal">skylog_cookie_consent</code>
                  <span>Stores your cookie-category choices</span>
                  <span>180 days</span>
                </div>
                <div className="grid min-w-[36rem] grid-cols-[1.15fr_0.85fr_0.55fr] gap-3 border-t border-slate-200 px-5 py-5 text-[0.76rem] leading-5 text-[#5a7077]">
                  <span className="font-semibold text-[#253f47]">Session and security cookies</span>
                  <span>Account access, checkout security, and fraud prevention when those features are used</span>
                  <span>Session or limited duration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <PolicyBlock
              icon={ShieldCheck}
              title="Third-party services"
              paragraphs={[
                "Travel, identity, payment, mapping, and support partners may set their own cookies when you use an embedded feature, follow a link, or continue to their service.",
                "Those providers control their own cookies under their privacy and cookie policies. SkyLog’s settings cannot remove cookies already placed directly by another website.",
              ]}
            />
            <PolicyBlock
              icon={Settings2}
              title="Browser and device controls"
              paragraphs={[
                "Most browsers let you view, block, or delete cookies. Blocking essential cookies may prevent sign-in, checkout, consent storage, or other core features from working.",
                "Deleting the SkyLog consent cookie resets your choice, so the consent banner may appear again.",
              ]}
            />
            <PolicyBlock
              icon={Clock3}
              title="How long choices last"
              paragraphs={[
                "SkyLog remembers your consent choice for up to 180 days unless you clear cookies or update your selection sooner.",
                "We may ask again when the choice expires or when cookie practices change enough to require renewed consent.",
              ]}
            />
            <PolicyBlock
              icon={Check}
              title="Changing your mind"
              paragraphs={[
                "You can reopen Cookie settings from this page at any time. A new choice replaces the earlier SkyLog consent record.",
                "Withdrawing optional consent does not affect processing that occurred lawfully before your choice changed.",
              ]}
            />
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#fbfdfd]">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <h2 className="text-xl font-[750] text-[#193f48]">Questions about cookies?</h2>
              <p className="mt-2 text-[0.82rem] text-[#5a7077]">
                Email{" "}
                <a href={`mailto:${supportEmail}`} className="font-bold text-skylog-teal">
                  {supportEmail}
                </a>{" "}
                or read our Privacy Policy for broader information practices.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <OpenCookieSettingsButton />
              <Link href={appLinks.privacy} className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-[0.8rem] font-bold text-[#253f47]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

type PolicyBlockProps = {
  icon: typeof ShieldCheck;
  title: string;
  paragraphs: readonly string[];
};

function PolicyBlock({ icon: Icon, title, paragraphs }: PolicyBlockProps) {
  return (
    <article className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
        <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} aria-hidden="true" />
      </span>
      <div>
        <h2 className="text-lg font-[740] text-[#193f48]">{title}</h2>
        <div className="mt-3 space-y-3 text-[0.84rem] leading-7 text-[#5a7077]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
