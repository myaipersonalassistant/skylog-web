import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/landing/footer";
import { Starfield } from "@/components/landing/starfield";
import { SubscriptionNavbar } from "@/components/subscription/subscription-navbar";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Terms of Service — ${brand.name}`,
  description: `The terms that govern your use of the ${brand.name} app, website, and related services.`,
  openGraph: {
    title: `Terms of Service — ${brand.name}`,
    description: `The terms that govern your use of the ${brand.name} app, website, and related services.`,
    url: `${brand.domain}/terms`,
    siteName: brand.name,
    type: "website",
  },
};

const lastUpdated = "July 13, 2026";

const sections = [
  { id: "agreement", label: "Agreement to terms" },
  { id: "eligibility", label: "Eligibility" },
  { id: "accounts", label: "Accounts & security" },
  { id: "services", label: "The Services" },
  { id: "user-content", label: "Your content" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "subscriptions", label: "Subscriptions & billing" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "third-party", label: "Third-party services" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to the Services or Terms" },
  { id: "governing-law", label: "Governing law" },
  { id: "miscellaneous", label: "Miscellaneous" },
  { id: "contact", label: "Contact us" },
] as const;

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-skylog-night">
      <Starfield />
      <SubscriptionNavbar />

      <main className="relative px-6 pb-20 pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <nav
              aria-label="Terms of Service sections"
              className="sticky top-28 space-y-1"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-skylog-cyan">
                On this page
              </p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-md px-2 py-1.5 text-sm text-skylog-text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-skylog-cyan">
              Legal
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base leading-relaxed text-skylog-text-muted sm:text-lg">
              These Terms of Service (“Terms”) govern your access to and use of
              the {brand.name} mobile app, website, and related products and
              services (together, the “Services”).
            </p>
            <p className="mt-3 text-sm text-skylog-text-muted/80">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-12 space-y-12 text-base leading-relaxed text-skylog-text-muted">
              <section id="agreement" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  1. Agreement to terms
                </h2>
                <p className="mt-4">
                  By downloading, accessing, or using the Services, you agree to
                  be bound by these Terms and our{" "}
                  <Link
                    href={appLinks.privacy}
                    className="font-medium text-skylog-cyan transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  . If you do not agree, do not use the Services.
                </p>
                <p className="mt-4">
                  If you use the Services on behalf of an organization, you
                  represent that you have authority to bind that organization,
                  and “you” includes that organization.
                </p>
              </section>

              <section id="eligibility" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  2. Eligibility
                </h2>
                <p className="mt-4">
                  You must be at least 13 years old (or the minimum age of
                  digital consent in your country) to use the Services. If you
                  are under the age of majority where you live, you may use the
                  Services only with a parent or guardian’s consent and under
                  their supervision.
                </p>
                <p className="mt-4">
                  You must also have the legal capacity to enter into a binding
                  agreement and must not be prohibited from using the Services
                  under applicable law.
                </p>
              </section>

              <section id="accounts" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  3. Accounts & security
                </h2>
                <p className="mt-4">
                  You may use {brand.name} as a guest or by creating an account.
                  When you create an account, you agree to provide accurate
                  information and keep it up to date.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your login credentials and for all activity under your
                    account.
                  </li>
                  <li>
                    Notify us promptly at{" "}
                    <a
                      href={`mailto:${supportEmail}`}
                      className="font-medium text-skylog-cyan transition-colors hover:text-white"
                    >
                      {supportEmail}
                    </a>{" "}
                    if you suspect unauthorized access.
                  </li>
                  <li>
                    Guest / on-device data may be lost if you uninstall the
                    app, clear app data, or lose your device before enabling
                    cloud sync.
                  </li>
                  <li>
                    We may refuse, suspend, or reclaim usernames or accounts that
                    violate these Terms or that we reasonably believe are
                    inactive, abusive, or fraudulent.
                  </li>
                </ul>
              </section>

              <section id="services" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  4. The Services
                </h2>
                <p className="mt-4">
                  {brand.name} is a personal flight diary that may include
                  flight logging, journey maps and lifetime stats, milestones
                  and badges, boarding-pass style views, trip photos, cloud
                  sync, personalized insights, and optional Pro features.
                </p>
                <p className="mt-4">
                  We may change, improve, suspend, or discontinue any part of
                  the Services at any time. Features may vary by platform,
                  region, device, or subscription plan.
                </p>
                <p className="mt-4">
                  {brand.name} is a consumer journaling and visualization tool.
                  It is not an airline, travel agency, booking service,
                  navigation system, or official source of flight operations
                  data. Do not rely on {brand.name} for safety-critical,
                  operational, or official travel decisions.
                </p>
              </section>

              <section id="user-content" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  5. Your content
                </h2>
                <p className="mt-4">
                  “User Content” means flight logs, notes, photos, profile
                  details, milestone cards, and any other materials you submit,
                  upload, store, or share through the Services.
                </p>
                <p className="mt-4">
                  You retain ownership of your User Content. You grant{" "}
                  {brand.name} a worldwide, non-exclusive, royalty-free license
                  to host, store, process, display, and transmit your User
                  Content solely as needed to operate, secure, and improve the
                  Services and to provide features you enable (including cloud
                  sync and sharing).
                </p>
                <p className="mt-4">You represent and warrant that:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    You have all rights necessary to submit the User Content and
                    grant the license above
                  </li>
                  <li>
                    Your User Content does not infringe others’ rights or
                    violate applicable law
                  </li>
                  <li>
                    Any shared milestone cards or public posts accurately
                    represent material you are entitled to share
                  </li>
                </ul>
                <p className="mt-4">
                  You can delete many entries in the app. Account deletion and
                  related retention are described in our Privacy Policy.
                </p>
              </section>

              <section id="acceptable-use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  6. Acceptable use
                </h2>
                <p className="mt-4">You agree not to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Use the Services for unlawful, harmful, fraudulent, or
                    deceptive purposes
                  </li>
                  <li>
                    Upload malware, scrape or harvest data without permission, or
                    interfere with the Services’ operation or security
                  </li>
                  <li>
                    Attempt to reverse engineer, copy, or bypass technical
                    limitations of the Services except where permitted by law
                  </li>
                  <li>
                    Access another user’s account without authorization
                  </li>
                  <li>
                    Misrepresent your identity, affiliation, or travel history in
                    a way that harmfully deceives others
                  </li>
                  <li>
                    Use the Services to infringe intellectual property, privacy,
                    or other rights
                  </li>
                  <li>
                    Abuse support channels, overwhelm infrastructure, or attempt
                    to circumvent subscription paywalls or usage limits
                  </li>
                </ul>
                <p className="mt-4">
                  We may investigate violations and take action we consider
                  appropriate, including removing content or suspending access.
                </p>
              </section>

              <section id="subscriptions" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  7. Subscriptions & billing
                </h2>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  7.1 Free and Pro features
                </h3>
                <p className="mt-4">
                  Some features are available free of charge. {brand.name} Pro
                  may unlock additional capabilities such as expanded logging,
                  journey maps and lifetime stats, milestone sharing, and cloud
                  sync. Feature packaging may change over time.
                </p>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  7.2 Purchases
                </h3>
                <p className="mt-4">
                  Paid subscriptions may be offered through the Apple App Store,
                  Google Play, and/or Stripe-powered checkout on our website.
                  Prices, billing periods, and taxes will be shown at purchase.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Unless stated otherwise, subscriptions renew automatically
                    until canceled.
                  </li>
                  <li>
                    Manage or cancel App Store / Play Store subscriptions through
                    your store account settings, and website/Stripe purchases
                    through the billing portal or in-app subscription tools we
                    provide.
                  </li>
                  <li>
                    Cancellation typically stops future renewals; you generally
                    retain access for the remainder of the paid period unless
                    otherwise required by law or store policy.
                  </li>
                  <li>
                    Refunds are handled according to Apple, Google, Stripe, and
                    applicable consumer law policies. Contact the original
                    purchase channel first when required.
                  </li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  7.3 Trials and changes
                </h3>
                <p className="mt-4">
                  If we offer a free trial, we will disclose its length and what
                  happens when it ends. We may change prices or plan features
                  prospectively; where required, we will provide notice and
                  options to accept, decline, or cancel.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  8. Intellectual property
                </h2>
                <p className="mt-4">
                  The Services — including software, design, logos, text,
                  graphics, and trademarks — are owned by {brand.name} or our
                  licensors and are protected by intellectual property laws.
                </p>
                <p className="mt-4">
                  Subject to these Terms, we grant you a limited, personal,
                  non-exclusive, non-transferable, revocable license to use the
                  Services for your own non-commercial personal use. You may
                  not copy, modify, distribute, sell, lease, or create
                  derivative works of our software or branding except as
                  expressly allowed.
                </p>
                <p className="mt-4">
                  Feedback you send us may be used freely to improve the
                  Services without obligation to you.
                </p>
              </section>

              <section id="third-party" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  9. Third-party services
                </h2>
                <p className="mt-4">
                  The Services may integrate with or link to third parties such
                  as app stores, payment processors, identity providers, map or
                  data providers, and analytics tools. Those services are
                  governed by their own terms and privacy policies. We are not
                  responsible for third-party content, availability, or
                  practices.
                </p>
              </section>

              <section id="disclaimers" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  10. Disclaimers
                </h2>
                <p className="mt-4">
                  THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE
                  MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
                  WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p className="mt-4">
                  We do not warrant that the Services will be uninterrupted,
                  error-free, secure, or that flight data, maps, stats,
                  milestones, or other content will be accurate, complete, or
                  up to date. Map routes, distances, times, and achievements are
                  estimates for personal journaling purposes only.
                </p>
              </section>

              <section id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  11. Limitation of liability
                </h2>
                <p className="mt-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, {brand.name.toUpperCase()}{" "}
                  AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                  PROFITS, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, ARISING OUT
                  OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE
                  SERVICES.
                </p>
                <p className="mt-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR
                  ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICES OR THESE
                  TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID
                  US FOR THE SERVICES IN THE TWELVE (12) MONTHS BEFORE THE
                  CLAIM, OR (B) FIFTY U.S. DOLLARS (US $50).
                </p>
                <p className="mt-4">
                  Some jurisdictions do not allow certain exclusions or
                  limitations. In those jurisdictions, our liability is limited
                  to the fullest extent permitted by law. Nothing in these
                  Terms limits liability that cannot be limited under applicable
                  law (such as certain consumer rights).
                </p>
              </section>

              <section id="indemnity" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  12. Indemnification
                </h2>
                <p className="mt-4">
                  You agree to defend, indemnify, and hold harmless{" "}
                  {brand.name} and its affiliates, officers, employees, and
                  agents from and against claims, damages, losses, liabilities,
                  costs, and expenses (including reasonable attorneys’ fees)
                  arising out of or related to your User Content, your use of
                  the Services, or your violation of these Terms or applicable
                  law.
                </p>
              </section>

              <section id="termination" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  13. Termination
                </h2>
                <p className="mt-4">
                  You may stop using the Services at any time and may request
                  account deletion by contacting us or using in-app tools where
                  available.
                </p>
                <p className="mt-4">
                  We may suspend or terminate your access immediately if you
                  violate these Terms, if required by law, or if we discontinue
                  the Services. Upon termination, the license granted to you
                  ends. Sections that by their nature should survive
                  (including ownership, disclaimers, limitations of liability,
                  indemnity, and governing law) will survive.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  14. Changes to the Services or Terms
                </h2>
                <p className="mt-4">
                  We may update these Terms from time to time. When we do, we
                  will revise the “Last updated” date and, where appropriate,
                  provide additional notice in the app or on the website. If you
                  continue to use the Services after the updated Terms take
                  effect, you accept the revised Terms. If you do not agree,
                  stop using the Services and cancel any paid subscription.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  15. Governing law
                </h2>
                <p className="mt-4">
                  These Terms are governed by the laws of the jurisdiction in
                  which {brand.name} primarily operates, without regard to
                  conflict-of-law principles, except where mandatory consumer
                  protection laws in your country of residence apply and cannot
                  be waived.
                </p>
                <p className="mt-4">
                  Courts in that jurisdiction will have exclusive jurisdiction
                  over disputes arising from these Terms, except that you may
                  bring claims in your local courts where required by
                  applicable consumer law.
                </p>
              </section>

              <section id="miscellaneous" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  16. Miscellaneous
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <span className="text-white">Entire agreement:</span> these
                    Terms and the Privacy Policy are the entire agreement
                    between you and {brand.name} regarding the Services.
                  </li>
                  <li>
                    <span className="text-white">Severability:</span> if any
                    provision is unenforceable, the remaining provisions remain
                    in effect.
                  </li>
                  <li>
                    <span className="text-white">Waiver:</span> failure to
                    enforce a provision is not a waiver of our right to enforce
                    it later.
                  </li>
                  <li>
                    <span className="text-white">Assignment:</span> you may not
                    assign these Terms without our consent; we may assign them
                    in connection with a merger, acquisition, or sale of
                    assets.
                  </li>
                  <li>
                    <span className="text-white">App stores:</span> if you
                    download the app from Apple or Google, you acknowledge that
                    the store provider is not responsible for providing
                    maintenance or support for the app, and that these Terms are
                    between you and {brand.name}, not the store provider, except
                    for store-required beneficiary or warranty provisions.
                  </li>
                </ul>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  17. Contact us
                </h2>
                <p className="mt-4">
                  Questions about these Terms? Contact us at:
                </p>
                <p className="mt-4">
                  <span className="text-white">{brand.name}</span>
                  <br />
                  Email:{" "}
                  <a
                    href={`mailto:${supportEmail}`}
                    className="font-medium text-skylog-cyan transition-colors hover:text-white"
                  >
                    {supportEmail}
                  </a>
                  <br />
                  Website:{" "}
                  <Link
                    href="/"
                    className="font-medium text-skylog-cyan transition-colors hover:text-white"
                  >
                    {brand.domain.replace(/^https?:\/\//, "")}
                  </Link>
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
