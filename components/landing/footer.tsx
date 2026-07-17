"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

const footerNavigation = {
  Book: [
    { label: "Flights", href: appLinks.flights },
    { label: "Stays", href: appLinks.stays },
    { label: "Car rentals", href: appLinks.cars },
    { label: "Flight extras", href: appLinks.extras },
  ],
  "Manage & explore": [
    { label: "Manage trips", href: appLinks.trips },
    { label: "Why SkyLog", href: "/#features" },
    { label: "Pricing", href: appLinks.pricing },
    { label: "Download the app", href: appLinks.download },
  ],
  Company: [
    { label: "About", href: appLinks.about },
    { label: "Careers", href: appLinks.careers },
    { label: "Help centre", href: appLinks.help },
    { label: "Contact", href: appLinks.contact },
  ],
  Legal: [
    { label: "Terms of service", href: appLinks.terms },
    { label: "Privacy policy", href: appLinks.privacy },
    { label: "Cookie policy & settings", href: appLinks.cookies },
    { label: "Accessibility", href: appLinks.accessibility },
  ],
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="font-header relative overflow-hidden border-t border-slate-200 bg-[#f7faf9]">
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-skylog-mint/10 blur-3xl" />

      <div className="relative mx-auto max-w-[90rem] px-5 pb-8 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 border-b border-slate-200 pb-14 lg:grid-cols-[1.2fr_3fr] lg:gap-14">
          <div className="max-w-sm">
            <Link href={appLinks.home} className="inline-flex rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal/40" aria-label={`${brand.name} home`}>
              <BrandLogo />
            </Link>
            <p className="mt-6 text-[0.86rem] font-medium leading-7 text-[#536a71]">
              Book, organize, and remember every journey. SkyLog brings your flights,
              stays, rides, extras, and travel history together.
            </p>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-5 inline-flex items-center gap-2 text-[0.82rem] font-bold text-skylog-teal transition-colors hover:text-skylog-teal-deep"
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              {supportEmail}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-8">
            {Object.entries(footerNavigation).map(([title, links]) => (
              <div key={title}>
                <h2 className="ml-4 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#253f47]">
                  {title}
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-[0.82rem] font-medium tracking-[-0.005em] text-[#53676e] outline-none transition-all duration-200 ease-out hover:translate-x-1 hover:text-skylog-teal focus-visible:translate-x-1 focus-visible:text-skylog-teal"
                      >
                        <ArrowRight
                          className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                          aria-hidden="true"
                        />
                        <span className="relative">
                          {link.label}
                          <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-skylog-teal transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 py-7 text-[0.72rem] font-medium text-slate-500 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>© {year} {brand.name}. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <LockKeyhole className="h-3.5 w-3.5 text-skylog-teal" aria-hidden="true" />
              Secure checkout
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-skylog-teal" aria-hidden="true" />
              Trusted travel partners
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5 text-skylog-teal" aria-hidden="true" />
              Global travel inventory
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
