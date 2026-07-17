import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Clock3,
  Headphones,
  HelpCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Contact us — ${brand.name}`,
  description:
    "Contact the SkyLog team for booking support, account help, partnerships, or general enquiries.",
};

const contactRoutes = [
  {
    icon: Headphones,
    title: "Booking support",
    description: "Questions about a flight, stay, rental, or travel extra.",
    detail: "Include your booking reference",
  },
  {
    icon: ShieldCheck,
    title: "Account help",
    description: "Sign-in, profile, privacy, or account-management support.",
    detail: "Never share your password",
  },
  {
    icon: Building2,
    title: "Work with SkyLog",
    description: "Partnership, press, affiliate, and commercial enquiries.",
    detail: "Select Partnerships in the form",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="font-header relative overflow-hidden bg-white pt-[4.5rem]">
        <section className="relative border-b border-slate-200 bg-[linear-gradient(145deg,#f7fbfa_0%,#ffffff_48%,#edf8f6_100%)]">
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Contact SkyLog
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-[780] tracking-[-0.045em] text-[#193f48] sm:text-5xl">
              How can we help?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#526970] sm:text-lg">
              Whether you&apos;re planning a journey or managing one already in
              motion, our team is here to point you in the right direction.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
                Start here
              </p>
              <h2 className="mt-3 text-2xl font-[760] tracking-[-0.025em] text-[#193f48]">
                Tell us what you need.
              </h2>
              <p className="mt-3 max-w-md text-[0.86rem] leading-7 text-[#5a7077]">
                Choose the closest topic and share the useful details. Please
                avoid including payment-card information or passwords.
              </p>

              <div className="mt-8 space-y-3">
                {contactRoutes.map((route) => {
                  const Icon = route.icon;
                  return (
                    <article
                      key={route.title}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-[#fbfdfd] p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
                        <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-[0.86rem] font-bold text-[#253f47]">
                          {route.title}
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-6 text-[#5a7077]">
                          {route.description}
                        </p>
                        <p className="mt-1.5 text-[0.7rem] font-bold text-skylog-teal">
                          {route.detail}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-slate-200 pt-6">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-skylog-teal" aria-hidden="true" />
                <p className="text-[0.72rem] font-medium leading-5 text-slate-500">
                  We aim to respond within two business days. For urgent travel
                  changes, contact the airline or travel provider shown on your
                  booking confirmation.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="border-t border-slate-200 bg-skylog-scrim">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-skylog-teal shadow-sm">
                <HelpCircle className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-[0.86rem] font-bold text-[#253f47]">Looking for a quick answer?</h2>
                <p className="mt-1 text-[0.82rem] text-[#5a7077]">Browse account, booking, and trip-management guidance.</p>
              </div>
            </div>
            <Link
              href={appLinks.help}
              className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-[0.82rem] font-bold text-[#253f47] transition-colors hover:border-skylog-mint hover:text-skylog-teal"
            >
              Visit the help centre
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
