import { brand } from "@/lib/brand";
import { Starfield } from "./starfield";

function BoardingPassMock() {
  return (
    <div className="float-card glass-dark relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <div className="absolute -right-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-skylog-night" />
      <div className="border-b border-white/10 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-skylog-mint">
            Boarding Pass
          </span>
          <span className="text-[10px] font-semibold text-skylog-amber">SKY 2847</span>
        </div>
        <p className="mt-3 text-2xl font-bold tracking-tight text-white">JFK → LHR</p>
        <p className="mt-1 text-sm text-skylog-text-muted">British Airways · BA 178</p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-5 text-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-skylog-text-muted">
            Date
          </p>
          <p className="mt-1 text-sm font-bold text-white">Jun 11</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-skylog-text-muted">
            Seat
          </p>
          <p className="mt-1 text-sm font-bold text-white">12A</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-skylog-text-muted">
            Miles
          </p>
          <p className="mt-1 text-sm font-bold text-skylog-cyan">3,459</p>
        </div>
      </div>
      <div className="border-t border-dashed border-white/10 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-emerald-400">Logged · Milestone unlocked</span>
        </div>
      </div>
    </div>
  );
}

function RouteMapMock() {
  return (
    <div className="glass-dark absolute -bottom-6 -left-6 hidden w-48 rounded-xl p-4 shadow-xl lg:block">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-skylog-text-muted">
        Your routes
      </p>
      <svg viewBox="0 0 160 90" className="mt-2 w-full" aria-hidden>
        <ellipse cx="80" cy="45" rx="70" ry="35" fill="none" stroke="rgba(127,179,179,0.2)" strokeWidth="1" />
        <path
          className="route-line"
          d="M30 50 Q60 20 90 40 T140 35"
          fill="none"
          stroke="#7DD3FC"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className="route-line"
          style={{ animationDelay: "0.5s" }}
          d="M40 60 Q80 55 120 30"
          fill="none"
          stroke="#7FB3B3"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="50" r="3" fill="#7DD3FC" />
        <circle cx="140" cy="35" r="3" fill="#FBBF24" />
        <circle cx="120" cy="30" r="2.5" fill="#7FB3B3" />
      </svg>
      <p className="mt-1 text-xs font-semibold text-white">47 airports · 128k mi</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-skylog-night pt-16">
      <Starfield />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-skylog-mint">
            Welcome aboard
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {brand.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-skylog-text-muted">
            {brand.description}
          </p>
          <div id="download" className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-full bg-skylog-teal px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-skylog-teal/25 transition-all hover:bg-skylog-teal-deep hover:shadow-skylog-teal/40"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-sm text-skylog-text-muted">
            Free to start · 7-day Pro trial · Sync across devices
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-skylog-cyan/10 via-transparent to-skylog-teal/10 blur-2xl" />
          <div className="relative flex justify-center lg:justify-end">
            <BoardingPassMock />
            <RouteMapMock />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-skylog-scrim to-transparent" />
    </section>
  );
}
