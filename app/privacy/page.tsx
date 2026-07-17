import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Cookie,
  Database,
  PlaneTakeoff,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { PolicyHeroAnimation } from "@/components/policy-hero-animation";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Privacy Policy — ${brand.name}`,
  description: `How ${brand.name} collects, uses, shares, and protects information across its website, mobile app, and travel services.`,
  openGraph: {
    title: `Privacy Policy — ${brand.name}`,
    description: `How ${brand.name} handles information across its website, mobile app, and travel services.`,
    url: `${brand.domain}/privacy`,
    siteName: brand.name,
    type: "website",
  },
};

const lastUpdated = "July 17, 2026";

type PrivacySection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

const sections: readonly PrivacySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how SkyLog collects, uses, shares, stores, and protects personal information when you use our website, mobile applications, booking experiences, travel tools, support channels, and related services (together, the “Services”).",
      "It also explains the choices and rights available to you. The information we handle depends on which SkyLog features you choose to use and whether you browse, create an account, make a booking, or use the mobile app.",
    ],
  },
  {
    id: "scope",
    title: "Who this policy applies to",
    paragraphs: [
      "This Policy applies to travelers, website visitors, mobile-app users, account holders, people included in a booking, support contacts, and others who interact with SkyLog.",
      "If you provide information about another traveler, you must have permission to do so and should make this Policy available to them.",
    ],
  },
  {
    id: "account-profile",
    title: "Account and profile information",
    paragraphs: [
      "When you create or manage an account, we may collect information needed to identify you, secure access, personalize SkyLog, and connect bookings or travel records to your profile.",
    ],
    bullets: [
      "Name, email address, profile photo, and sign-in details or identity-provider tokens",
      "Home city or airport, preferred units, travel preferences, and notification choices",
      "Account status, membership, subscription, and communication preferences",
      "Security information such as verification, password-reset, and sign-in activity",
    ],
  },
  {
    id: "booking-data",
    title: "Booking and traveler information",
    paragraphs: [
      "When you search for or book flights, stays, car rentals, or flight extras, we process information required to search, price, confirm, fulfil, support, and manage that travel.",
    ],
    bullets: [
      "Origin, destination, dates, times, passenger count, cabin, and search preferences",
      "Traveler names, contact details, date of birth, title, gender marker, and loyalty details where required",
      "Passport, identity, visa, driving-licence, or other document information where a supplier requires it",
      "Booking references, itineraries, fare or rate conditions, extras, special requests, and supplier messages",
      "Stay guest details, rental-car driver details, pickup information, and related requirements",
    ],
  },
  {
    id: "payments",
    title: "Payments and transaction information",
    paragraphs: [
      "Payment providers process card or payment credentials needed to complete purchases. SkyLog generally receives transaction confirmation and limited payment details rather than your complete card number.",
    ],
    bullets: [
      "Amount, currency, taxes, fees, discounts, and selected products",
      "Payment status, method type, limited card details, receipts, and transaction references",
      "Refund, dispute, cancellation, fraud-screening, and billing information",
      "SkyLog Pro purchase, trial, renewal, and entitlement information",
    ],
  },
  {
    id: "travel-vault",
    title: "Travel records and content you add",
    paragraphs: [
      "The mobile app lets you build a personal travel history. We process the information you choose to save so that SkyLog can display, organize, synchronize, and enrich your travel story.",
    ],
    bullets: [
      "Logged flights, routes, airports, cabins, seats, aircraft, distances, and trip purposes",
      "Boarding-pass details, barcodes, files, scans, and screenshots",
      "Photos, notes, ratings, milestones, receipts, and expenses",
      "Saved places, Sky Atlas entries, Trip Ideas, and destination interests",
      "Imports you review and approve from Email Sync or boarding passes",
    ],
  },
  {
    id: "email-sync",
    title: "Email Sync",
    paragraphs: [
      "If you choose Email Sync, SkyLog may access supported travel messages or content you paste into the app to identify possible flights and boarding passes. Connected-inbox access is limited to the permissions presented when you connect it.",
      "Detected travel information becomes a suggestion for your review. It is not added to Flights or Boarding Passes until you approve it. You can disconnect an inbox or dismiss suggestions through available controls.",
    ],
  },
  {
    id: "device-permissions",
    title: "Device information and permissions",
    paragraphs: [
      "The mobile app asks for device permissions only when they support a feature you choose. You can manage permissions in your device settings, although disabling one may prevent that feature from working.",
    ],
    bullets: [
      "Camera or photo-library access for boarding passes, receipts, profile images, and flight photos",
      "Notification permission for booking, boarding-pass, account, and flight updates",
      "Location or selected-place information for nearby discovery and destination context",
      "Files and wallet handoff for supported boarding-pass experiences",
      "Device type, operating system, app version, language, time zone, and diagnostic information",
    ],
  },
  {
    id: "website-data",
    title: "Website usage and cookies",
    paragraphs: [
      "When you use the website, we may collect standard browser, device, network, and interaction information needed to operate, secure, remember, and understand the website.",
    ],
    bullets: [
      "IP address, browser type, device type, language, time zone, and approximate location",
      "Pages viewed, referral source, session timing, interactions, and error information",
      "Authentication, security, preference, analytics, and consent records",
      "Cookie and similar-technology identifiers, subject to your choices and applicable law",
    ],
  },
  {
    id: "sources",
    title: "Where information comes from",
    paragraphs: ["We may receive information from:"],
    bullets: [
      "You, when you browse, register, book, contact us, or add travel content",
      "Other travelers who include you in a booking",
      "Airlines, accommodation providers, rental companies, and other travel suppliers",
      "Duffel for supported searches, bookings, extras, and booking-management activity",
      "AirLabs for supported operational flight information",
      "Identity, payment, app-store, mapping, place, support, and communications providers",
    ],
  },
  {
    id: "uses",
    title: "How we use information",
    paragraphs: ["We use information where necessary to provide and improve SkyLog, including to:"],
    bullets: [
      "Create accounts, authenticate users, and protect the Services",
      "Search, price, book, fulfil, and manage travel",
      "Display bookings, flight records, boarding passes, expenses, maps, and insights",
      "Provide supported flight-status, gate, terminal, delay, and cancellation information",
      "Personalize routes, price feeds, destination ideas, and app experiences",
      "Process payments, subscriptions, refunds, and transaction records",
      "Respond to support, rights, safety, and account requests",
      "Detect fraud, misuse, security incidents, and technical problems",
      "Measure performance, understand feature use, and improve accessibility",
      "Comply with legal obligations and enforce our agreements",
    ],
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    paragraphs: [
      "Where laws such as the UK GDPR or EU GDPR apply, we rely on one or more legal bases depending on the information and purpose.",
    ],
    bullets: [
      "Contract, when processing is needed to provide an account, booking, subscription, or requested feature",
      "Legitimate interests, such as securing, supporting, understanding, and improving SkyLog",
      "Consent, for optional permissions, certain cookies, connected services, or communications",
      "Legal obligation, where we must retain, verify, disclose, or otherwise process information",
      "Vital interests or public interest in limited safety or emergency circumstances where legally applicable",
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    paragraphs: [
      "We share personal information only where needed for the Services, a transaction, safety, legal compliance, or a purpose described in this Policy. We do not sell personal information to data brokers.",
    ],
    bullets: [
      "Duffel and relevant travel suppliers for searches, bookings, extras, fulfilment, changes, and support",
      "AirLabs for flight-data requests, which may include flight, route, airport, or schedule identifiers",
      "Payment providers, app stores, identity providers, and fraud-prevention services",
      "Cloud, communications, analytics, support, mapping, and place-information providers",
      "Professional advisers, authorities, or courts where reasonably necessary or legally required",
      "A buyer, investor, or successor in connection with a merger, financing, reorganization, or business transfer",
      "People or services you direct us to share with, such as when you share a travel card or export content",
    ],
  },
  {
    id: "administration",
    title: "Authorized administration",
    paragraphs: [
      "Authorized SkyLog team members may access limited user, booking, transaction, or support information when needed to operate the Services, resolve an issue, prevent fraud, protect travelers, or meet legal duties.",
      "Administrative access is restricted to approved business purposes. Team members must not use personal information for unrelated personal purposes.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep information",
    paragraphs: [
      "We retain information only as long as reasonably needed for the purposes described here, including providing accounts and bookings, keeping records you request, meeting tax or legal duties, resolving disputes, preventing fraud, and enforcing agreements.",
      "Retention periods vary by information type, supplier requirements, account status, legal obligations, and whether information is stored only on your device. When information is no longer needed, we delete, anonymize, or securely isolate it, subject to backup cycles and lawful exceptions.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "SkyLog uses administrative, organizational, and technical safeguards designed to protect personal information against loss, misuse, unauthorized access, alteration, and disclosure.",
      "No service can guarantee absolute security. Protect your credentials, use trusted devices, and contact us immediately if you believe your account or booking information has been compromised.",
    ],
  },
  {
    id: "international",
    title: "International data transfers",
    paragraphs: [
      "Travel is international, and SkyLog or its providers may process information in countries outside your residence. Those countries may have different data-protection laws.",
      "Where required, we use recognized safeguards for international transfers, such as adequacy decisions, approved contractual protections, or another lawful transfer mechanism.",
    ],
  },
  {
    id: "rights",
    title: "Your privacy rights",
    paragraphs: [
      "Depending on your location, you may have rights over your personal information. We may need to verify your identity before fulfilling a request, and lawful exceptions may apply.",
    ],
    bullets: [
      "Access or receive a copy of personal information",
      "Correct inaccurate or incomplete information",
      "Delete personal information",
      "Object to or restrict certain processing",
      "Receive portable information where applicable",
      "Withdraw consent without affecting earlier lawful processing",
      "Opt out of certain cookies or communications",
      "Complain to your local data-protection authority",
    ],
  },
  {
    id: "choices",
    title: "Your choices and controls",
    paragraphs: [
      "SkyLog provides controls through account settings, device settings, cookie settings, inbox connections, notification preferences, and feature-specific review screens.",
    ],
    bullets: [
      "Review Email Sync suggestions before adding anything to your travel vault",
      "Change or withdraw optional device permissions",
      "Manage communication and notification preferences",
      "Use Cookie policy & settings to control non-essential website cookies",
      "Edit or delete supported travel records and request account deletion",
    ],
  },
  {
    id: "children",
    title: "Children’s privacy",
    paragraphs: [
      "SkyLog is not directed to children below 13 or the minimum age required by local law. We do not knowingly create accounts for children below that age without appropriate authorization.",
      "Travelers may provide child-passenger information when making a family booking. We process that information only as needed for the booking, supplier requirements, safety, and legal obligations.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party services and links",
    paragraphs: [
      "SkyLog may link to or integrate with travel suppliers, maps, wallets, payment services, app stores, and other third parties. Their privacy practices are governed by their own policies when they act independently.",
      "Review the relevant provider’s policy before submitting information directly to them.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    paragraphs: [
      "We may update this Policy as SkyLog, partner services, or legal requirements change. We will revise the date above and provide additional notice where a change is material or where law requires it.",
    ],
  },
  {
    id: "contact",
    title: "Contact and privacy requests",
    paragraphs: [
      `For privacy questions, rights requests, or account-deletion assistance, contact ${supportEmail}. Please do not send passwords, full payment-card details, or unnecessary identity documents by email.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="font-header bg-white">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(145deg,#f4faf9_0%,#ffffff_52%,#eef8f7_100%)]">
          <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.55fr]">
            <div className="order-2 max-w-3xl lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Your information, clearly explained
              </span>
              <h1 className="mt-6 text-4xl font-[780] tracking-[-0.045em] text-[#193f48] sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                How SkyLog handles information across travel bookings, personal
                travel records, our website, and the mobile app.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.75rem] font-semibold text-slate-500">
                <span>Effective: {lastUpdated}</span>
                <span aria-hidden="true">•</span>
                <span>Website and mobile app</span>
              </div>
            </div>
              <div className="order-1 lg:order-2">
                <PolicyHeroAnimation policy="privacy" />
              </div>
            </div>

            <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
              {[
                { icon: UserRoundCheck, label: "You stay in control", text: "Choices for accounts, imports, cookies, and permissions" },
                { icon: Database, label: "Purpose-led data", text: "Information used to provide and protect your journeys" },
                { icon: PlaneTakeoff, label: "Travel partners", text: "Clear sharing for bookings and live flight information" },
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
            <nav aria-label="Privacy Policy sections" className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 lg:block">
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
            <div className="rounded-2xl border border-skylog-mint/40 bg-skylog-scrim p-5">
              <div className="flex gap-3">
                <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-skylog-teal" strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <p className="text-[0.82rem] font-bold text-[#253f47]">Your website choices</p>
                  <p className="mt-1 text-[0.8rem] leading-6 text-[#5a7077]">
                    Essential cookies support security and core features.
                    Optional cookies should follow the choices available in our{" "}
                    <Link href={appLinks.cookies} className="font-bold text-skylog-teal hover:text-skylog-teal-deep">
                      Cookie policy & settings
                    </Link>
                    .
                  </p>
                </div>
              </div>
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

            <div className="mt-8 flex flex-col gap-5 rounded-[1.75rem] bg-[linear-gradient(135deg,#245f6c,#174d59)] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-lg font-[740]">A question about your information?</h2>
                <p className="mt-1 text-[0.82rem] text-white/70">
                  Contact SkyLog for privacy help or to exercise a privacy right.
                </p>
              </div>
              <Link
                href={appLinks.contact}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3 text-[0.8rem] font-bold text-skylog-teal"
              >
                Contact us
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
