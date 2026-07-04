import Link from "next/link";
import { brand } from "@/lib/brand";

export function SubscriptionNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-skylog-night/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-skylog-teal/20 ring-1 ring-skylog-mint/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-skylog-cyan"
              aria-hidden
            >
              <path
                d="M2 12h5l2-4 3 8 2-4h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            {brand.name}
          </span>
        </Link>

        <Link
          href="/#download"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
        >
          Get the app
        </Link>
      </nav>
    </header>
  );
}
