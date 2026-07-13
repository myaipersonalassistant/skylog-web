import Link from "next/link";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-skylog-night py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-skylog-teal/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 text-skylog-cyan"
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
          <span className="text-sm font-bold text-white">{brand.name}</span>
        </div>

        <p className="text-sm text-skylog-text-muted">
          Your personal flight diary.
        </p>

        <div className="flex gap-6 text-sm">
          <Link
            href={appLinks.privacy}
            className="text-skylog-text-muted transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href={appLinks.terms}
            className="text-skylog-text-muted transition-colors hover:text-white"
          >
            Terms
          </Link>
          <a
            href={`mailto:${supportEmail}`}
            className="text-skylog-text-muted transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-skylog-text-muted/60">
        © {year} {brand.name}. Cleared for departure.
      </p>
    </footer>
  );
}
