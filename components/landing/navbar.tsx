"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CarFront,
  ChevronDown,
  CircleUserRound,
  Luggage,
  Menu,
  PlaneTakeoff,
  Sparkles,
  X,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

const bookingProducts = [
  {
    label: "Flights",
    description: "Compare and book global air travel",
    href: appLinks.flights,
    icon: PlaneTakeoff,
  },
  {
    label: "Stays",
    description: "Hotels and vacation rentals",
    href: appLinks.stays,
    icon: BedDouble,
  },
  {
    label: "Car rentals",
    description: "Reliable rides at your destination",
    href: appLinks.cars,
    icon: CarFront,
  },
  {
    label: "Flight extras",
    description: "Seats, bags and travel add-ons",
    href: appLinks.extras,
    icon: Luggage,
  },
] as const;

export function Navbar() {
  const [bookingsOpen, setBookingsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const bookingsRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openBookings() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setBookingsOpen(true);
  }

  function scheduleBookingsClose() {
    closeTimerRef.current = setTimeout(() => setBookingsOpen(false), 140);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        bookingsOpen &&
        bookingsRef.current &&
        !bookingsRef.current.contains(event.target as Node)
      ) {
        setBookingsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setBookingsOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [bookingsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="font-header fixed inset-x-0 top-0 z-50 border-b border-[#dfe8e8] bg-white shadow-[0_1px_12px_rgba(15,23,42,0.04)]">
      <nav
        className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link
          href={appLinks.home}
          className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal/40"
          aria-label={`${brand.name} home`}
        >
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div
            ref={bookingsRef}
            className="relative"
            onMouseEnter={openBookings}
            onMouseLeave={scheduleBookingsClose}
          >
            <button
              type="button"
              onClick={() => setBookingsOpen((open) => !open)}
              onFocus={openBookings}
              aria-expanded={bookingsOpen}
              aria-haspopup="menu"
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[0.82rem] font-semibold tracking-[-0.01em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-skylog-teal/30 ${
                bookingsOpen
                  ? "bg-skylog-teal/[0.07] text-skylog-teal"
                  : "text-[#344b52] hover:bg-slate-50 hover:text-skylog-teal"
              }`}
            >
              Bookings
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  bookingsOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`absolute left-1/2 top-12 w-[32rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                bookingsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 pointer-events-none opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
                <div className="mb-2 flex items-center justify-between px-3 pt-1">
                  <div>
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-skylog-teal">
                      Plan your journey
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Everything you need, in one booking.
                    </p>
                  </div>
                  <span className="rounded-full bg-skylog-scrim px-2.5 py-1 text-[0.62rem] font-bold text-skylog-teal">
                    Powered by Duffel
                  </span>
                </div>
              <div className="grid grid-cols-2 gap-1">
                {bookingProducts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setBookingsOpen(false)}
                      className="group/item flex gap-3 rounded-xl p-3 outline-none transition-colors hover:bg-skylog-scrim focus-visible:bg-skylog-scrim"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-skylog-mint/25 bg-skylog-teal/[0.07] text-skylog-teal">
                        <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="flex items-center gap-1 text-sm font-bold text-skylog-ink">
                          {item.label}
                          <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" aria-hidden="true" />
                        </span>
                        <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
              </div>
            </div>
          </div>
          <Link href={appLinks.trips} className="rounded-lg px-3.5 py-2.5 text-[0.82rem] font-semibold tracking-[-0.01em] text-[#344b52] outline-none transition-colors hover:bg-slate-50 hover:text-skylog-teal focus-visible:ring-2 focus-visible:ring-skylog-teal/30">
            Manage trips
          </Link>
          <Link href={appLinks.download} className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[0.82rem] font-semibold tracking-[-0.01em] text-[#344b52] outline-none transition-colors hover:bg-slate-50 hover:text-skylog-teal focus-visible:ring-2 focus-visible:ring-skylog-teal/30">
            Download
          </Link>
          <Link href={appLinks.pricing} className="rounded-lg px-3.5 py-2.5 text-[0.82rem] font-semibold tracking-[-0.01em] text-[#344b52] outline-none transition-colors hover:bg-slate-50 hover:text-skylog-teal focus-visible:ring-2 focus-visible:ring-skylog-teal/30">
            Pricing
          </Link>
          <Link href={appLinks.help} className="rounded-lg px-3.5 py-2.5 text-[0.82rem] font-semibold tracking-[-0.01em] text-[#344b52] outline-none transition-colors hover:bg-slate-50 hover:text-skylog-teal focus-visible:ring-2 focus-visible:ring-skylog-teal/30">
            Support
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href={appLinks.signIn}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-[0.82rem] font-semibold tracking-[-0.01em] text-[#2f454c] outline-none transition-colors hover:bg-slate-50 hover:text-skylog-teal focus-visible:ring-2 focus-visible:ring-skylog-teal/30 md:inline-flex"
          >
            <CircleUserRound className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            Sign in
          </Link>
          <Link
            href={appLinks.signUp}
            className="hidden items-center gap-2 rounded-xl bg-skylog-teal px-4 py-2.5 text-[0.82rem] font-bold tracking-[-0.01em] text-white shadow-[0_8px_22px_rgba(42,112,126,0.2)] outline-none transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep focus-visible:ring-2 focus-visible:ring-skylog-teal focus-visible:ring-offset-2 sm:inline-flex"
          >
            Create account
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-skylog-ink outline-none transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-skylog-teal/30 lg:hidden"
          >
            <span className="sr-only">Open navigation menu</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          {mobileOpen && (
            <div
              className="fixed inset-0 z-[60] bg-slate-950/25 backdrop-blur-[2px] animate-[nav-backdrop-in_180ms_ease-out] motion-reduce:animate-none lg:hidden"
              onClick={() => setMobileOpen(false)}
              role="presentation"
            >
              <aside
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className="absolute inset-y-0 right-0 flex w-[min(24rem,90vw)] flex-col border-l border-slate-200 bg-white shadow-[-24px_0_70px_rgba(15,23,42,0.16)] animate-[nav-drawer-in_240ms_cubic-bezier(0.22,1,0.36,1)] motion-reduce:animate-none"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-slate-100 px-5">
                  <Link href={appLinks.home} onClick={() => setMobileOpen(false)} aria-label={`${brand.name} home`}>
                    <BrandLogo />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-skylog-ink transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal/30"
                  >
                    <span className="sr-only">Close navigation menu</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-5">
                  <p className="px-2 pb-2 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-skylog-teal">
                    Bookings
                  </p>
                  <div className="space-y-1">
                    {bookingProducts.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-skylog-scrim"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-skylog-mint/25 bg-skylog-teal/[0.07] text-skylog-teal">
                            <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold text-skylog-ink">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block truncate text-xs text-slate-500">
                              {item.description}
                            </span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="my-5 h-px bg-slate-100" />
                  <nav className="space-y-1" aria-label="Mobile menu links">
                    {[
                      { label: "Manage trips", href: appLinks.trips },
                      { label: "SkyLog Pro", href: appLinks.pro },
                      { label: "Download the app", href: appLinks.download },
                      { label: "Support", href: appLinks.help },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-skylog-ink transition-colors hover:bg-slate-50"
                      >
                        {item.label}
                        {item.label === "SkyLog Pro" ? (
                          <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
                        ) : (
                          <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                        )}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="shrink-0 border-t border-slate-100 bg-slate-50/70 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={appLinks.signIn}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-bold text-skylog-ink"
                    >
                      Sign in
                    </Link>
                    <Link
                      href={appLinks.signUp}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center rounded-xl bg-skylog-teal px-3 py-3 text-sm font-bold text-white"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
