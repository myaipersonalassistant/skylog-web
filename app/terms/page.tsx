import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  FileCheck2,
  PlaneTakeoff,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { PolicyHeroAnimation } from "@/components/policy-hero-animation";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Terms of Service — ${brand.name}`,
  description: `The terms governing the ${brand.name} website, mobile app, travel bookings, and related services.`,
  openGraph: {
    title: `Terms of Service — ${brand.name}`,
    description: `The terms governing the ${brand.name} website, mobile app, travel bookings, and related services.`,
    url: `${brand.domain}/terms`,
    siteName: brand.name,
    type: "website",
  },
};

const lastUpdated = "July 17, 2026";

type TermsSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

const sections: readonly TermsSection[] = [
  {
    id: "agreement",
    title: "Agreement to these Terms",
    paragraphs: [
      "These Terms of Service govern your access to and use of the SkyLog website, mobile applications, booking experiences, account features, travel tools, and related services (together, the “Services”). By accessing or using the Services, you agree to these Terms and our Privacy Policy.",
      "If you do not agree, do not use the Services. If you use SkyLog for an organization, you confirm that you have authority to bind that organization to these Terms.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    paragraphs: [
      "You must be at least 13 years old, or the minimum digital-consent age in your country, to hold a SkyLog account. To make a travel booking, you must also be old enough and legally capable of entering the relevant booking contract.",
      "A parent or guardian must supervise use by anyone below the age of majority where required. Suppliers may apply higher minimum ages for flights, accommodation, car rentals, or other products.",
    ],
  },
  {
    id: "accounts",
    title: "Accounts and security",
    paragraphs: [
      "You agree to provide accurate information, keep it current, protect your credentials, and accept responsibility for activity under your account. Contact us promptly if you suspect unauthorized access.",
    ],
    bullets: [
      "Do not share passwords, verification codes, or payment credentials.",
      "Traveler names and details must match the identification used for travel.",
      "Guest or device-only information may be lost if the app or local data is removed.",
      "We may restrict accounts connected to fraud, abuse, security risks, or violations of these Terms.",
    ],
  },
  {
    id: "services",
    title: "What SkyLog provides",
    paragraphs: [
      "SkyLog is a travel platform and personal travel companion. The Services may include searching and booking flights, stays, car rentals, and flight extras; managing trips; storing travel records; logging flights; boarding-pass tools; destination discovery; expenses; insights; and SkyLog Pro.",
      "Features may differ by website, mobile platform, country, device, supplier, or membership. We may improve, change, suspend, or discontinue features where reasonably necessary.",
    ],
  },
  {
    id: "travel-bookings",
    title: "Travel searches and bookings",
    paragraphs: [
      "Travel inventory and supported booking actions are supplied through third parties. SkyLog uses the Duffel API for supported flight, stay, car-rental, and flight-extra experiences. SkyLog is not an airline, hotel, property owner, or vehicle-rental operator.",
      "When you confirm a booking, you also agree to the applicable airline, accommodation, rental-company, fare, and supplier terms shown during checkout. Those terms form part of your booking and may include restrictions, deadlines, age rules, baggage limits, deposit requirements, and no-refund conditions.",
    ],
    bullets: [
      "Review names, dates, destinations, documents, and traveler details before paying.",
      "A search result is not reserved until the booking is confirmed.",
      "Availability and prices can change before confirmation.",
      "A booking is complete only when a confirmation or booking reference is issued.",
    ],
  },
  {
    id: "pricing",
    title: "Prices, payments, and taxes",
    paragraphs: [
      "The price and currency presented before confirmation are the basis of your purchase. A total may include fare or room cost, taxes, fees, selected extras, and other disclosed charges. Some suppliers may collect deposits, local taxes, resort fees, fuel charges, or other amounts separately where this is clearly stated.",
      "You authorize the displayed payment to be processed using your selected method. Your bank or card provider may apply currency-conversion or international-transaction fees that SkyLog does not control.",
    ],
  },
  {
    id: "changes-refunds",
    title: "Changes, cancellations, and refunds",
    paragraphs: [
      "Change, cancellation, credit, and refund rights depend on the product and supplier rules accepted at booking. Some bookings cannot be changed or refunded. Others may involve supplier charges, fare differences, or administration costs disclosed before an action is confirmed.",
      "Where online management is supported, options appear in Manage trips. If an action must be completed by a supplier, SkyLog may direct you to that supplier. Refund timing depends on supplier approval, the payment method, and the financial institution.",
    ],
  },
  {
    id: "travel-information",
    title: "Travel and operational information",
    paragraphs: [
      "Schedules, gates, terminals, delays, cancellations, and other operational information can change quickly. The mobile app may use the AirLabs API for supported live flight information.",
      "SkyLog provides this information for convenience and does not guarantee that it is complete, current, or error-free. Always follow official instructions from the airline, airport, accommodation provider, rental company, government, or emergency authority.",
    ],
  },
  {
    id: "documents",
    title: "Passports, visas, health, and travel requirements",
    paragraphs: [
      "You are responsible for checking and meeting passport, visa, transit, immigration, health, vaccination, insurance, licence, and other entry or travel requirements for every traveler and destination.",
      "SkyLog content is general information, not legal, immigration, medical, or safety advice. Requirements can change, so verify them with official authorities before travel.",
    ],
  },
  {
    id: "user-content",
    title: "Your travel records and content",
    paragraphs: [
      "You retain ownership of flight logs, notes, photos, receipts, profile details, and other content you provide. You grant SkyLog a non-exclusive, worldwide, royalty-free licence to host, process, display, and transmit that content only as needed to operate, secure, and improve features you choose to use.",
      "You confirm that you have the right to provide and share your content and that it does not violate law, privacy, intellectual property, or another person’s rights.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: ["You must use SkyLog lawfully and responsibly."],
    bullets: [
      "Do not commit fraud, make deceptive bookings, or impersonate another person.",
      "Do not access another account or restricted administrative area without permission.",
      "Do not upload malware, scrape the Services, overload systems, or bypass security or usage limits.",
      "Do not infringe intellectual property, privacy, publicity, or other legal rights.",
      "Do not misuse support channels, payment disputes, promotions, trials, or refunds.",
    ],
  },
  {
    id: "pro",
    title: "SkyLog Pro and subscriptions",
    paragraphs: [
      "SkyLog Pro may provide premium app features through a recurring subscription. Current features, price, billing period, trial terms, taxes, and renewal details are shown before purchase.",
      "Unless stated otherwise, subscriptions renew automatically until cancelled. Cancellation normally stops the next renewal while access continues through the paid period. Purchases made through an app store or payment provider may need to be managed through that provider.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    paragraphs: [
      "SkyLog works with travel suppliers, Duffel, AirLabs, payment providers, app stores, mapping and place providers, identity services, and other partners. Their services, content, and booking fulfilment may be governed by separate terms and privacy policies.",
      "We are not responsible for a third party’s independent acts, omissions, outages, content, or changes, except where applicable law requires otherwise.",
    ],
  },
  {
    id: "intellectual-property",
    title: "SkyLog intellectual property",
    paragraphs: [
      "The Services, including SkyLog software, design, brand, logo, text, illustrations, and original content, are owned by SkyLog or its licensors and protected by intellectual-property laws.",
      "We grant you a limited, personal, non-exclusive, non-transferable, revocable licence to use the Services for their intended purpose. You may not copy, sell, modify, reverse engineer, or commercially exploit them except where law expressly permits.",
    ],
  },
  {
    id: "availability",
    title: "Availability and disclaimers",
    paragraphs: [
      "The Services are provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim implied warranties including merchantability, fitness for a particular purpose, title, and non-infringement.",
      "We do not promise uninterrupted availability or that every price, route, map, statistic, status, suggestion, or supplier detail will always be complete or error-free. Nothing in these Terms excludes warranties or consumer rights that cannot legally be excluded.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, SkyLog and its affiliates will not be liable for indirect, incidental, special, consequential, exemplary, or punitive loss, or loss of profits, data, goodwill, or opportunity arising from the Services.",
      "Where liability may legally be limited, SkyLog’s total liability relating to the Services or these Terms will not exceed the greater of the amount you paid directly to SkyLog in the preceding 12 months or US $50. This limitation does not apply where prohibited by law.",
    ],
  },
  {
    id: "termination",
    title: "Suspension and termination",
    paragraphs: [
      "You may stop using SkyLog at any time and may request account deletion through available account tools. We may restrict or terminate access where you materially breach these Terms, create a security or fraud risk, fail to pay amounts due, or where required by law.",
      "Termination does not cancel supplier obligations, payment duties, confirmed bookings, or provisions that by their nature should continue.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    paragraphs: [
      "We may update these Terms as SkyLog, partner services, or legal requirements change. We will update the date above and provide additional notice where appropriate or legally required.",
      "Continuing to use the Services after revised Terms take effect means you accept them. If you do not agree, stop using the Services and cancel applicable subscriptions.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of the jurisdiction in which SkyLog primarily operates, without regard to conflict-of-law principles. Mandatory consumer protections in your country of residence continue to apply where they cannot be waived.",
      "Courts in that jurisdiction will have authority over disputes, except where applicable consumer law gives you the right to bring a claim elsewhere.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      `Questions about these Terms can be sent to ${supportEmail}. Please include enough information for us to understand your request, but never send passwords or full payment-card details.`,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="font-header bg-white">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(145deg,#f5faf9_0%,#ffffff_54%,#edf8f6_100%)]">
          <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.55fr]">
            <div className="order-2 max-w-3xl lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
                <Scale className="h-3.5 w-3.5" aria-hidden="true" />
                Legal agreement
              </span>
              <h1 className="mt-6 text-4xl font-[780] tracking-[-0.045em] text-[#193f48] sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                The agreement for using SkyLog&apos;s website, mobile app,
                travel-booking experiences, and personal travel tools.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.75rem] font-semibold text-slate-500">
                <span>Effective: {lastUpdated}</span>
                <span aria-hidden="true">•</span>
                <span>Applies to website and mobile app</span>
              </div>
            </div>
              <div className="order-1 lg:order-2">
                <PolicyHeroAnimation policy="terms" />
              </div>
            </div>

            <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
              {[
                { icon: PlaneTakeoff, label: "Travel bookings", text: "Flights, stays, cars, and extras" },
                { icon: ShieldCheck, label: "Your account", text: "Security, content, and acceptable use" },
                { icon: FileCheck2, label: "Clear conditions", text: "Payments, changes, refunds, and suppliers" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
                      <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[0.8rem] font-bold text-[#253f47]">{item.label}</p>
                      <p className="mt-0.5 text-[0.7rem] leading-5 text-slate-500">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-8 lg:py-20">
          <aside>
            <nav aria-label="Terms sections" className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 lg:block">
              <p className="mb-3 text-[0.66rem] font-extrabold uppercase tracking-[0.16em] text-skylog-teal">
                On this page
              </p>
              <ol className="space-y-0.5 border-l border-slate-200">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block border-l border-transparent py-1.5 pl-3 text-[0.75rem] font-medium text-slate-500 transition-colors hover:border-skylog-teal hover:text-skylog-teal"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <details className="rounded-2xl border border-slate-200 bg-skylog-scrim p-4 lg:hidden">
              <summary className="cursor-pointer text-[0.8rem] font-bold text-[#253f47]">
                Jump to a section
              </summary>
              <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-[0.75rem] font-medium text-skylog-teal">
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </aside>

          <article className="min-w-0 max-w-4xl">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
              <p className="text-[0.82rem] font-bold text-amber-900">A quick note before you travel</p>
              <p className="mt-2 text-[0.8rem] leading-6 text-amber-900/75">
                Supplier terms and fare rules are part of every booking. Review
                the final price, traveler details, cancellation conditions, and
                travel requirements before confirming.
              </p>
            </div>

            <div className="mt-5 divide-y divide-slate-200">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 py-9 first:pt-7">
                  <div className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-skylog-teal/[0.08] text-[0.68rem] font-extrabold text-skylog-teal">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-xl font-[740] tracking-[-0.02em] text-[#193f48] sm:text-2xl">
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-4 text-[0.88rem] leading-7 text-[#5a7077]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {section.bullets && (
                          <ul className="space-y-2.5">
                            {section.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2.5">
                                <span className="mt-[0.68rem] h-1.5 w-1.5 shrink-0 rounded-full bg-skylog-teal" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-[1.75rem] bg-skylog-scrim p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-lg font-[740] text-[#193f48]">Questions about these Terms?</h2>
                <p className="mt-1 text-[0.82rem] text-[#5a7077]">
                  Contact SkyLog and we&apos;ll help direct your enquiry.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={appLinks.contact} className="inline-flex items-center gap-2 rounded-xl bg-skylog-teal px-4 py-3 text-[0.8rem] font-bold text-white">
                  Contact us
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link href={appLinks.privacy} className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-[0.8rem] font-bold text-[#253f47]">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
