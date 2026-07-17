function BoardingPassMock() {
  return (
    <div className="float-card relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(42,112,126,0.18)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-skylog-teal via-skylog-cyan to-skylog-amber" />
      <div className="absolute -right-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-slate-200 bg-[#eff8f7]" />
      <div className="border-b border-slate-200 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-skylog-teal">
            Boarding Pass
          </span>
          <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-700">SKY 2847</span>
        </div>
        <p className="mt-3 text-2xl font-extrabold tracking-tight text-skylog-ink">JFK → LHR</p>
        <p className="mt-1 text-sm text-slate-500">British Airways · BA 178</p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-5 text-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Date
          </p>
          <p className="mt-1 text-sm font-bold text-skylog-ink">Jun 11</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Seat
          </p>
          <p className="mt-1 text-sm font-bold text-skylog-ink">12A</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Miles
          </p>
          <p className="mt-1 text-sm font-bold text-skylog-teal">3,459</p>
        </div>
      </div>
      <div className="border-t border-dashed border-slate-200 bg-slate-50/70 px-5 py-3">
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
    <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:block">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
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
      <p className="mt-1 text-xs font-bold text-skylog-ink">47 airports · 128k mi</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#ffffff_0%,#f4fbfa_48%,#e7f5f4_100%)] pt-[4.5rem]">
      <div className="pointer-events-none absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-skylog-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-skylog-mint/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(42,112,126,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(42,112,126,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:pt-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/30 bg-white/80 px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-skylog-teal" />
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
              Travel, beautifully managed
            </p>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-[-0.045em] text-skylog-ink sm:text-5xl lg:text-[3.75rem]">
            Your whole journey,
            <span className="block text-skylog-teal">one seamless story.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Book flights, stays and cars. Add the extras, manage every trip,
            and keep a beautiful record of everywhere you&apos;ve been.
          </p>
          <div id="download" className="mt-8 flex flex-wrap gap-4">
            <a
              href="/flights"
              className="inline-flex items-center gap-2.5 rounded-xl bg-skylog-teal px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-skylog-teal/20 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
            >
              Search flights
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-skylog-ink transition-colors hover:border-skylog-mint hover:bg-white"
            >
              Explore SkyLog
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
            <span>✓ Secure booking</span>
            <span>✓ Global inventory</span>
            <span>✓ One trip dashboard</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-skylog-cyan/20 via-white/20 to-skylog-teal/15 blur-2xl" />
          <div className="relative flex justify-center lg:justify-end">
            <BoardingPassMock />
            <RouteMapMock />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-skylog-scrim to-transparent" />
    </section>
  );
}
