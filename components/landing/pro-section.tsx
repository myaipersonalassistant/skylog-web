import { proFeatures } from "@/lib/brand";

export function ProSection() {
  return (
    <section id="pro" className="relative overflow-hidden bg-[linear-gradient(135deg,#edf8f6_0%,#ffffff_48%,#f8f5eb_100%)] py-24">
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-skylog-mint/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-skylog-amber/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            SkyLog Pro
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-skylog-ink sm:text-4xl">
            Unlock SkyLog Pro
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Your logbook, stats, and milestones — without limits.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_28px_80px_rgba(42,112,126,0.14)]">
            <ul className="space-y-4">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-skylog-teal/10">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5 text-skylog-teal"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-skylog-ink">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-slate-200 pt-6 text-center">
              <p className="text-3xl font-extrabold text-skylog-ink">
                7-day free trial
              </p>
              <p className="mt-1 text-sm text-slate-500">
                No charge until trial ends · Cancel anytime
              </p>
              <a
                href="#download"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-skylog-teal px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep"
              >
                Start your free trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
