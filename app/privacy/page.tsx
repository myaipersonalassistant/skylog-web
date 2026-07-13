import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/landing/footer";
import { Starfield } from "@/components/landing/starfield";
import { SubscriptionNavbar } from "@/components/subscription/subscription-navbar";
import { brand } from "@/lib/brand";
import { supportEmail } from "@/lib/app-links";

export const metadata: Metadata = {
  title: `Privacy Policy — ${brand.name}`,
  description: `How ${brand.name} collects, uses, stores, and protects your personal and flight data.`,
  openGraph: {
    title: `Privacy Policy — ${brand.name}`,
    description: `How ${brand.name} collects, uses, stores, and protects your personal and flight data.`,
    url: `${brand.domain}/privacy`,
    siteName: brand.name,
    type: "website",
  },
};

const lastUpdated = "July 13, 2026";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "who-we-are", label: "Who we are" },
  { id: "scope", label: "Scope" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use information" },
  { id: "legal-bases", label: "Legal bases" },
  { id: "sharing", label: "How we share information" },
  { id: "payments", label: "Payments & subscriptions" },
  { id: "cookies", label: "Cookies & similar technologies" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your rights" },
  { id: "children", label: "Children’s privacy" },
  { id: "international", label: "International transfers" },
  { id: "third-party", label: "Third-party links & services" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-skylog-night">
      <Starfield />
      <SubscriptionNavbar />

      <main className="relative px-6 pb-20 pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <nav
              aria-label="Privacy Policy sections"
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-skylog-text-muted sm:text-lg">
              This Privacy Policy explains how {brand.name} (“we”, “us”, or
              “our”) collects, uses, stores, and shares information when you
              use our mobile app, website, and related services (together, the
              “Services”).
            </p>
            <p className="mt-3 text-sm text-skylog-text-muted/80">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-12 space-y-12 text-base leading-relaxed text-skylog-text-muted">
              <section id="introduction" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  1. Introduction
                </h2>
                <p className="mt-4">
                  {brand.name} is a personal flight diary. You can log trips,
                  map routes, earn milestones, attach trip photos, and optionally
                  sync your logbook across devices. We designed {brand.name} so
                  your travel history stays yours — we collect only what we need
                  to run the Services and improve them.
                </p>
                <p className="mt-4">
                  By using the Services, you acknowledge this Privacy Policy. If
                  you do not agree, please do not use the Services.
                </p>
              </section>

              <section id="who-we-are" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  2. Who we are
                </h2>
                <p className="mt-4">
                  The controller of your personal data for the Services is{" "}
                  {brand.name}, operating the website at{" "}
                  <a
                    href={brand.domain}
                    className="font-medium text-skylog-cyan transition-colors hover:text-white"
                  >
                    {brand.domain.replace(/^https?:\/\//, "")}
                  </a>
                  .
                </p>
                <p className="mt-4">
                  Privacy questions:{" "}
                  <a
                    href={`mailto:${supportEmail}`}
                    className="font-medium text-skylog-cyan transition-colors hover:text-white"
                  >
                    {supportEmail}
                  </a>
                  .
                </p>
              </section>

              <section id="scope" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  3. Scope
                </h2>
                <p className="mt-4">This Policy applies to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>The {brand.name} mobile application (iOS and Android)</li>
                  <li>
                    The marketing and account-related website at{" "}
                    {brand.domain.replace(/^https?:\/\//, "")}
                  </li>
                  <li>
                    Account, cloud sync, subscription, and billing flows
                    connected to {brand.name}
                  </li>
                </ul>
                <p className="mt-4">
                  It does not cover third-party websites, app stores, payment
                  processors, or services that we do not control, even if they
                  are linked from {brand.name}.
                </p>
              </section>

              <section id="information-we-collect" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  4. Information we collect
                </h2>
                <p className="mt-4">
                  The information we collect depends on how you use{" "}
                  {brand.name} — for example as a guest, with an account, or as
                  a Pro subscriber.
                </p>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  4.1 Information you provide
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <span className="text-white">Account details:</span> email
                    address, display name, authentication credentials or tokens
                    from sign-in providers you choose, and profile preferences
                    such as home base or travel frequency.
                  </li>
                  <li>
                    <span className="text-white">Flight logbook data:</span>{" "}
                    flight entries you create or import, including airlines,
                    airports, dates, times, routes, notes, and related
                    metadata you add.
                  </li>
                  <li>
                    <span className="text-white">Media:</span> photos or images
                    you attach to flights or shared milestone cards.
                  </li>
                  <li>
                    <span className="text-white">Communications:</span> messages
                    you send us (for example support requests) and any
                    information included in them.
                  </li>
                  <li>
                    <span className="text-white">Shared content:</span>{" "}
                    milestone cards or other content you choose to share outside
                    the app.
                  </li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  4.2 Information collected automatically
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <span className="text-white">Device & app data:</span>{" "}
                    device type, operating system, app version, language, time
                    zone, and diagnostic or crash information.
                  </li>
                  <li>
                    <span className="text-white">Usage data:</span> features you
                    use, screens viewed, approximate session timing, and similar
                    product analytics needed to maintain and improve the
                    Services.
                  </li>
                  <li>
                    <span className="text-white">Website data:</span> when you
                    visit our website, standard log and device information may
                    be collected (such as IP address, browser type, pages
                    visited, and referral URLs), including through cookies or
                    similar technologies described below.
                  </li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  4.3 Information from third parties
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <span className="text-white">Sign-in providers:</span> if
                    you create or access an account using a third-party
                    identity provider, we receive basic profile information
                    they share with your permission (typically email and name).
                  </li>
                  <li>
                    <span className="text-white">App stores & billing:</span>{" "}
                    Apple, Google, and/or Stripe may provide subscription status,
                    purchase confirmation, and limited billing metadata needed
                    to unlock Pro features — not your full payment card number.
                  </li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  4.4 Guest / offline use
                </h3>
                <p className="mt-4">
                  You may start using {brand.name} without an account. In guest
                  mode, flight data typically remains on your device until you
                  sign in and enable cloud sync. Local device storage is still
                  subject to your device’s security and backup settings.
                </p>
              </section>

              <section id="how-we-use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  5. How we use information
                </h2>
                <p className="mt-4">We use information to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Provide, operate, and maintain the Services — including your
                    logbook, maps, lifetime stats, milestones, and boarding-pass
                    style views
                  </li>
                  <li>
                    Sync your data across devices when you choose cloud sync
                  </li>
                  <li>
                    Personalize insights and milestones based on preferences you
                    set (such as home base or travel frequency)
                  </li>
                  <li>
                    Process subscriptions, restore purchases, and manage billing
                    portals
                  </li>
                  <li>
                    Respond to support requests and communicate about the
                    Services
                  </li>
                  <li>
                    Monitor reliability, prevent abuse, debug issues, and improve
                    performance and features
                  </li>
                  <li>
                    Comply with legal obligations and enforce our terms
                  </li>
                  <li>
                    Protect the security and integrity of users, the Services,
                    and our business
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information. We do not use your
                  flight history to build advertising profiles for sale to data
                  brokers.
                </p>
              </section>

              <section id="legal-bases" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  6. Legal bases (EEA/UK and similar laws)
                </h2>
                <p className="mt-4">
                  Where required, we process personal data under one or more of
                  these bases:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <span className="text-white">Contract:</span> to provide the
                    Services you request (account, sync, Pro features)
                  </li>
                  <li>
                    <span className="text-white">Legitimate interests:</span> to
                    secure, improve, and understand the Services in ways that do
                    not override your rights
                  </li>
                  <li>
                    <span className="text-white">Consent:</span> where we ask for
                    it (for example certain optional analytics, marketing, or
                    device permissions such as photo library access)
                  </li>
                  <li>
                    <span className="text-white">Legal obligation:</span> when we
                    must retain or disclose information to comply with law
                  </li>
                </ul>
              </section>

              <section id="sharing" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  7. How we share information
                </h2>
                <p className="mt-4">
                  We share information only as needed to operate {brand.name},
                  and with the safeguards described here.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <span className="text-white">Service providers:</span>{" "}
                    trusted vendors who help us host data, authenticate users,
                    process payments, deliver email, analyze product usage, or
                    provide customer support — under contractual obligations to
                    protect your data and use it only for our instructions.
                  </li>
                  <li>
                    <span className="text-white">Sharing you initiate:</span> if
                    you share a milestone card, image, or link, the recipients
                    and platforms you choose will receive that content under
                    their own policies.
                  </li>
                  <li>
                    <span className="text-white">Legal & safety:</span> we may
                    disclose information if we believe in good faith that it is
                    required by law, or necessary to protect rights, safety, or
                    security.
                  </li>
                  <li>
                    <span className="text-white">Business transfers:</span> if{" "}
                    {brand.name} is involved in a merger, acquisition, financing,
                    or sale of assets, information may be transferred as part of
                    that transaction, subject to appropriate confidentiality
                    measures.
                  </li>
                </ul>
              </section>

              <section id="payments" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  8. Payments & subscriptions
                </h2>
                <p className="mt-4">
                  {brand.name} Pro subscriptions may be purchased through the
                  Apple App Store, Google Play, and/or Stripe-powered checkout or
                  customer portal flows on our website.
                </p>
                <p className="mt-4">
                  Payment card details are processed by those payment providers —
                  we do not store your full card number on our servers. We
                  receive confirmation of purchase status, plan type, renewal or
                  cancellation events, and related billing metadata so we can
                  unlock and manage Pro features.
                </p>
                <p className="mt-4">
                  Those providers’ privacy policies govern their handling of
                  payment information.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  9. Cookies & similar technologies
                </h2>
                <p className="mt-4">
                  Our website may use cookies, local storage, pixels, and
                  similar technologies to operate the site, remember
                  preferences, measure traffic, and support security. The{" "}
                  {brand.name} app may use on-device identifiers and software
                  development kits for analytics, crash reporting, and
                  subscription status.
                </p>
                <p className="mt-4">
                  Depending on your browser or device settings, you may be able
                  to block or delete cookies, or limit ad and tracking
                  identifiers. Doing so may affect some site or app features.
                </p>
              </section>

              <section id="retention" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  10. Data retention
                </h2>
                <p className="mt-4">
                  We retain personal data only as long as needed for the
                  purposes described in this Policy, including to provide the
                  Services, comply with legal obligations, resolve disputes, and
                  enforce agreements.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Account and synced logbook data are generally kept while
                    your account remains active.
                  </li>
                  <li>
                    If you delete your account or request deletion, we will
                    delete or anonymize personal data within a reasonable period,
                    except where we must retain limited information for legal,
                    security, or accounting reasons.
                  </li>
                  <li>
                    Backup copies may persist for a short additional period
                    before being overwritten in the ordinary course of
                    operations.
                  </li>
                  <li>
                    Guest data stored only on your device remains until you
                    delete it in the app or uninstall the app (subject to device
                    backups).
                  </li>
                </ul>
              </section>

              <section id="security" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  11. Security
                </h2>
                <p className="mt-4">
                  We use administrative, technical, and organizational measures
                  designed to protect personal data against unauthorized access,
                  loss, misuse, or alteration. These may include encryption in
                  transit, access controls, and secure cloud infrastructure.
                </p>
                <p className="mt-4">
                  No method of transmission or storage is 100% secure. You are
                  responsible for keeping your account credentials confidential
                  and for the security of devices where {brand.name} is
                  installed.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  12. Your rights & choices
                </h2>
                <p className="mt-4">
                  Depending on where you live, you may have rights to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Access the personal data we hold about you</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Delete your personal data</li>
                  <li>Export or receive a portable copy of your data</li>
                  <li>Object to or restrict certain processing</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>
                    Lodge a complaint with your local data protection authority
                  </li>
                </ul>
                <p className="mt-4">
                  You can often manage flight entries, photos, and preferences
                  directly in the app. To exercise privacy rights, or to request
                  account deletion, contact{" "}
                  <a
                    href={`mailto:${supportEmail}`}
                    className="font-medium text-skylog-cyan transition-colors hover:text-white"
                  >
                    {supportEmail}
                  </a>
                  . We may need to verify your identity before fulfilling a
                  request.
                </p>
                <p className="mt-4">
                  California residents and residents of other U.S. states with
                  privacy laws may have additional rights regarding disclosure,
                  deletion, and opt-outs. We do not sell personal information as
                  “sale” is commonly defined under those laws, and we do not
                  share it for cross-context behavioral advertising in the
                  manner those laws typically regulate for consumer apps of this
                  type. If that changes, we will update this Policy and provide
                  required notices.
                </p>
              </section>

              <section id="children" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  13. Children’s privacy
                </h2>
                <p className="mt-4">
                  The Services are not directed to children under 13 (or the
                  minimum age required in your country), and we do not knowingly
                  collect personal information from children. If you believe a
                  child has provided us personal information, contact us and we
                  will take appropriate steps to delete it.
                </p>
              </section>

              <section id="international" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  14. International transfers
                </h2>
                <p className="mt-4">
                  We may process and store information in countries other than
                  the one where you live, including jurisdictions that may have
                  different data-protection laws. When we transfer personal data
                  internationally, we use appropriate safeguards required by
                  applicable law (such as standard contractual clauses where
                  relevant).
                </p>
              </section>

              <section id="third-party" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  15. Third-party links & services
                </h2>
                <p className="mt-4">
                  The Services may link to or integrate with third-party
                  platforms (app stores, maps data providers, social networks,
                  payment processors, or analytics tools). Their privacy
                  practices are governed by their own policies. We encourage you
                  to review those policies before providing information to them.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  16. Changes to this policy
                </h2>
                <p className="mt-4">
                  We may update this Privacy Policy from time to time. When we
                  do, we will revise the “Last updated” date at the top of this
                  page and, where appropriate, provide additional notice in the
                  app or on the website. Continued use of the Services after an
                  update means you acknowledge the revised Policy.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  17. Contact us
                </h2>
                <p className="mt-4">
                  If you have questions about this Privacy Policy or how{" "}
                  {brand.name} handles your information, contact us at:
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
