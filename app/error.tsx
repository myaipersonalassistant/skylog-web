"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { appLinks } from "@/lib/app-links";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[78vh] items-center overflow-hidden bg-[linear-gradient(145deg,#f8fbfb_0%,#ffffff_50%,#fff9ee_100%)] px-6 pb-20 pt-32">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-skylog-mint/15 blur-3xl" />

        <div className="relative mx-auto w-full max-w-2xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-700 shadow-[0_16px_45px_rgba(180,83,9,0.12)]">
            <AlertTriangle className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-700">
            Unexpected turbulence
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] text-skylog-ink sm:text-5xl">
            Something didn&apos;t go to plan.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
            Your information is safe. Try loading this part of SkyLog again, or
            return home and continue your journey from there.
          </p>

          {error.digest && (
            <p className="mx-auto mt-5 w-fit rounded-full bg-slate-100 px-3 py-1.5 font-mono text-[0.68rem] text-slate-500">
              Reference: {error.digest}
            </p>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-skylog-teal px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal focus-visible:ring-offset-2"
            >
              <RefreshCw className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              Try again
            </button>
            <Link
              href={appLinks.home}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold text-skylog-ink transition-colors hover:border-skylog-mint hover:text-skylog-teal"
            >
              <Home className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              Return home
            </Link>
          </div>

          <p className="mt-8 text-xs leading-5 text-slate-500">
            If this keeps happening,{" "}
            <Link href={appLinks.contact} className="font-bold text-skylog-teal hover:text-skylog-teal-deep">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
