import Link from "next/link";
import { ArrowLeft, Compass, Home, Plane } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { appLinks } from "@/lib/app-links";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[78vh] items-center overflow-hidden bg-[linear-gradient(145deg,#f8fbfb_0%,#ffffff_50%,#edf8f6_100%)] px-6 pb-20 pt-32">
        <div className="pointer-events-none absolute -right-28 top-20 h-96 w-96 rounded-full bg-skylog-cyan/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-skylog-mint/15 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              Route unavailable
            </span>
            <p className="mt-7 text-sm font-extrabold tracking-[0.2em] text-skylog-teal">
              404
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] text-skylog-ink sm:text-5xl">
              This destination isn&apos;t on our map.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              The page may have moved, the address may be incomplete, or this
              route simply hasn&apos;t taken off yet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={appLinks.home}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-skylog-teal px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
              >
                <Home className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                Return home
              </Link>
              <Link
                href={appLinks.flights}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold text-skylog-ink transition-colors hover:border-skylog-mint hover:text-skylog-teal"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                Search flights
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
            <div className="absolute inset-8 rounded-full border border-dashed border-skylog-teal/20" />
            <div className="absolute inset-16 rounded-full border border-skylog-mint/25" />
            <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d="M32 218C91 83 202 76 285 153"
                fill="none"
                stroke="#7FB3B3"
                strokeWidth="1.5"
                strokeDasharray="7 9"
                strokeLinecap="round"
              />
              <circle cx="32" cy="218" r="5" fill="#2A707E" />
              <circle cx="285" cy="153" r="5" fill="#FBBF24" />
            </svg>
            <span className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-slate-200 bg-white text-skylog-teal shadow-[0_24px_70px_rgba(42,112,126,0.16)]">
              <Plane className="h-12 w-12 -rotate-12" strokeWidth={1.4} aria-hidden="true" />
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
