"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export function SubscriptionNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal/40" aria-label={`${brand.name} home`}>
          <BrandLogo />
        </Link>

        <div className="flex items-center gap-2">
          <Link href={appLinks.signIn} className="hidden rounded-lg px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 sm:block">
            Sign in
          </Link>
          <Link
            href={appLinks.flights}
            className="inline-flex items-center gap-2 rounded-xl bg-skylog-teal px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-skylog-teal-deep"
          >
            Book a trip
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
