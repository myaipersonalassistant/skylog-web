import type { Metadata } from "next";
import {
  Apple,
  CalendarDays,
  CarFront,
  Check,
  Cloud,
  Download,
  Hotel,
  MapPinned,
  Plane,
  Play,
  RefreshCw,
  ShieldCheck,
  TicketCheck,
  WifiOff,
} from "lucide-react";
import { DownloadHeroAnimation } from "@/components/download-hero-animation";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Download the app — ${brand.name}`,
  description:
    "Download SkyLog for iPhone or Android and keep your bookings, trip details, travel tools, and memories in one place.",
};

// Replace these placeholder store URLs with the verified production listings.
const storeLinks = {
  apple: "https://apps.apple.com/app/skylog/id0000000000",
  google: "https://play.google.com/store/apps/details?id=com.myskylog.app",
} as const;

const essentials = [
  {
    icon: TicketCheck,
    title: "Every booking, together",
    description:
      "Bring flights, stays, car rentals, and extras into one calm itinerary that is easy to scan.",
    accent: "bg-sky-50 text-sky-700",
  },
  {
    icon: RefreshCw,
    title: "Ready when plans move",
    description:
      "Keep important trip details close and move between planning, booking, and management without losing context.",
    accent: "bg-teal-50 text-skylog-teal",
  },
  {
    icon: MapPinned,
    title: "A journey worth keeping",
    description:
      "Turn practical trip details into a connected travel history you can return to after landing.",
    accent: "bg-amber-50 text-amber-700",
  },
] as const;

const pocketTools = [
  { icon: Plane, label: "Flights" },
  { icon: Hotel, label: "Stays" },
  { icon: CarFront, label: "Car rentals" },
  { icon: CalendarDays, label: "Trip timeline" },
] as const;

const promises = [
  "A clear home for upcoming and past journeys",
  "Secure access tied to your SkyLog account",
  "Thoughtful alerts without notification overload",
  "A consistent experience across mobile and web",
] as const;

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="font-header overflow-hidden bg-white">
        <section className="relative border-b border-slate-200 bg-[linear-gradient(145deg,#f3faf9_0%,#ffffff_48%,#edf8f6_100%)]">
          <div className="pointer-events-none absolute -right-28 top-10 h-[34rem] w-[34rem] rounded-full bg-skylog-cyan/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-skylog-mint/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(42,112,126,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(42,112,126,0.035)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-20">
            <div className="order-2 max-w-2xl lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-skylog-mint/35 bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-skylog-teal shadow-sm">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Available for iPhone and Android
              </span>
              <h1 className="mt-6 text-4xl font-[800] leading-[1.04] tracking-[-0.052em] text-[#193f48] sm:text-5xl lg:text-[4rem]">
                Your whole journey.
                <span className="block text-skylog-teal">Now pocket-sized.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[#526970] sm:text-lg">
                Download SkyLog and carry your bookings, trip tools, travel
                history, and the moments between destinations in one beautifully
                connected mobile experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={storeLinks.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-48 items-center justify-center gap-3 rounded-xl bg-[#101314] px-5 py-3 text-left text-white shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-black"
                >
                  <Apple className="h-7 w-7" fill="currentColor" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.58rem] font-semibold leading-none text-white/75">Download on the</span>
                    <span className="mt-1 block text-base font-bold leading-none">App Store</span>
                  </span>
                </a>
                <a
                  href={storeLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-48 items-center justify-center gap-3 rounded-xl bg-[#101314] px-5 py-3 text-left text-white shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-black"
                >
                  <Play className="h-6 w-6 fill-skylog-cyan text-skylog-cyan" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.58rem] font-semibold uppercase leading-none text-white/75">Get it on</span>
                    <span className="mt-1 block text-base font-bold leading-none">Google Play</span>
                  </span>
                </a>
              </div>

              <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#60747a]">
                <ShieldCheck className="h-4 w-4 text-skylog-teal" strokeWidth={1.8} aria-hidden="true" />
                Secure download through your device&apos;s official app store.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <DownloadHeroAnimation />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-3 lg:px-8">
            {[
              { icon: Cloud, text: "Synced across your devices" },
              { icon: ShieldCheck, text: "Designed around secure access" },
              { icon: WifiOff, text: "Key details close when you need them" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 sm:justify-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-skylog-scrim text-skylog-teal">
                  <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="text-xs font-bold text-[#526970]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-skylog-teal">
              Travel without the tab overload
            </p>
            <h2 className="mt-4 text-3xl font-[790] tracking-[-0.045em] text-[#193f48] sm:text-4xl">
              Less searching. More journey.
            </h2>
            <p className="mt-4 text-sm font-medium leading-7 text-[#60747a] sm:text-base">
              SkyLog makes the practical side of travel feel lighter—before
              departure, while moving, and after you return.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {essentials.map(({ icon: Icon, title, description, accent }) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(42,112,126,0.07)] transition-all hover:-translate-y-1 hover:border-skylog-mint/60 hover:shadow-[0_24px_70px_rgba(42,112,126,0.12)]"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accent}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-[760] tracking-[-0.025em] text-[#193f48]">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#60747a]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f5faf9]">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:px-8">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-full bg-skylog-cyan/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-5 shadow-[0_32px_90px_rgba(42,112,126,0.16)]">
                <div className="rounded-[1.9rem] bg-[linear-gradient(160deg,#edf8f6,#ffffff)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.17em] text-skylog-teal">Next journey</p>
                      <p className="mt-1 text-lg font-[780] tracking-tight text-skylog-ink">Lisbon weekend</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-skylog-teal text-white">
                      <Plane className="h-4 w-4 -rotate-12" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-5 rounded-2xl border border-skylog-mint/30 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-[800] tracking-[-0.04em] text-skylog-ink">LHR</p>
                        <p className="text-[0.62rem] font-bold uppercase tracking-wider text-slate-400">London</p>
                      </div>
                      <div className="flex flex-1 items-center px-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-skylog-mint to-skylog-teal" />
                        <Plane className="mx-2 h-4 w-4 rotate-45 text-skylog-teal" aria-hidden="true" />
                        <div className="h-px flex-1 bg-gradient-to-r from-skylog-teal to-skylog-cyan" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-[800] tracking-[-0.04em] text-skylog-teal">LIS</p>
                        <p className="text-[0.62rem] font-bold uppercase tracking-wider text-slate-400">Lisbon</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {pocketTools.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-3">
                        <Icon className="h-4 w-4 text-skylog-teal" strokeWidth={1.8} aria-hidden="true" />
                        <span className="text-[0.68rem] font-extrabold text-[#526970]">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-skylog-teal">
                One trip. One clear view.
              </p>
              <h2 className="mt-4 text-3xl font-[790] leading-tight tracking-[-0.045em] text-[#193f48] sm:text-4xl">
                The details you need, without the digging.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-[#60747a]">
                From the first booking to the final memory, the app keeps each
                part of your journey connected and easy to understand.
              </p>
              <ul className="mt-7 grid gap-4">
                {promises.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-[#526970]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-skylog-teal text-white">
                      <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] bg-skylog-ink px-6 py-12 text-center shadow-[0_30px_90px_rgba(26,61,69,0.22)] sm:px-12">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-skylog-cyan/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-skylog-mint/20 blur-3xl" />
            <div className="relative">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-skylog-cyan ring-1 ring-white/15">
                <Download className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-3xl font-[790] tracking-[-0.045em] text-white sm:text-4xl">
                Take SkyLog with you.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                Choose your platform and download the travel companion that
                keeps every part of your journey within reach.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={storeLinks.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-48 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-left text-skylog-ink transition-all hover:-translate-y-0.5 hover:bg-skylog-scrim"
                >
                  <Apple className="h-7 w-7" fill="currentColor" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.58rem] font-semibold leading-none text-slate-500">Download on the</span>
                    <span className="mt-1 block text-base font-extrabold leading-none">App Store</span>
                  </span>
                </a>
                <a
                  href={storeLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-48 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-left text-skylog-ink transition-all hover:-translate-y-0.5 hover:bg-skylog-scrim"
                >
                  <Play className="h-6 w-6 fill-skylog-teal text-skylog-teal" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.58rem] font-semibold uppercase leading-none text-slate-500">Get it on</span>
                    <span className="mt-1 block text-base font-extrabold leading-none">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
