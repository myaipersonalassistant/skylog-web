"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BarChart3, Check, ChevronLeft, Cookie, SlidersHorizontal, Sparkles } from "lucide-react";
import { appLinks } from "@/lib/app-links";

const consentCookieName = "skylog_cookie_consent";

type ConsentChoices = {
  essential: true;
  preferences: boolean;
  analytics: boolean;
  updatedAt: string;
};

function readConsent(): ConsentChoices | null {
  const entry = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${consentCookieName}=`));

  if (!entry) return null;

  try {
    return JSON.parse(decodeURIComponent(entry.split("=").slice(1).join("=")));
  } catch {
    return null;
  }
}

function persistConsent(choices: Omit<ConsentChoices, "updatedAt">) {
  const consent: ConsentChoices = {
    ...choices,
    updatedAt: new Date().toISOString(),
  };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${consentCookieName}=${encodeURIComponent(
    JSON.stringify(consent),
  )}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`;

  window.dispatchEvent(
    new CustomEvent("skylog:consent-updated", { detail: consent }),
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const existing = readConsent();
      if (existing) {
        setPreferences(existing.preferences);
        setAnalytics(existing.analytics);
      } else {
        setVisible(true);
      }
    });

    function openSettings() {
      const current = readConsent();
      setPreferences(current?.preferences ?? false);
      setAnalytics(current?.analytics ?? false);
      setManaging(true);
      setVisible(true);
    }

    window.addEventListener("skylog:open-cookie-settings", openSettings);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("skylog:open-cookie-settings", openSettings);
    };
  }, []);

  function save(preferenceChoice: boolean, analyticsChoice: boolean) {
    persistConsent({
      essential: true,
      preferences: preferenceChoice,
      analytics: analyticsChoice,
    });
    setPreferences(preferenceChoice);
    setAnalytics(analyticsChoice);
    setVisible(false);
    setManaging(false);
  }

  if (!visible) return null;

  return (
    <div className="font-header fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_-12px_60px_rgba(15,23,42,0.16)]">
        {managing ? (
          <div role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title" className="p-5 sm:p-7">
            <button
              type="button"
              onClick={() => setManaging(false)}
              className="inline-flex items-center gap-1 text-[0.76rem] font-bold text-skylog-teal hover:text-skylog-teal-deep"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>

            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.16em] text-skylog-teal">
                  Your privacy controls
                </p>
                <h2 id="cookie-settings-title" className="mt-2 text-xl font-[760] tracking-[-0.025em] text-[#193f48]">
                  Choose which cookies SkyLog may use
                </h2>
                <p className="mt-2 max-w-2xl text-[0.8rem] leading-6 text-[#5a7077]">
                  Essential cookies always remain active. Optional categories
                  stay off unless you allow them.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => save(false, false)}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-[0.78rem] font-bold text-[#253f47] transition-colors hover:border-skylog-mint"
                >
                  Reject optional
                </button>
                <button
                  type="button"
                  onClick={() => save(preferences, analytics)}
                  className="rounded-xl bg-skylog-teal px-4 py-2.5 text-[0.78rem] font-bold text-white transition-colors hover:bg-skylog-teal-deep"
                >
                  Save my choices
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <CookieChoice
                icon={Check}
                title="Essential"
                description="Security, consent, authentication, and core website functions."
                checked
                locked
              />
              <CookieChoice
                icon={Sparkles}
                title="Preferences"
                description="Remember choices that personalize how SkyLog works for you."
                checked={preferences}
                onChange={setPreferences}
              />
              <CookieChoice
                icon={BarChart3}
                title="Analytics"
                description="Help us understand usage and improve performance and accessibility."
                checked={analytics}
                onChange={setAnalytics}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-3xl gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal">
                <Cookie className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-[0.9rem] font-[740] text-[#193f48]">
                  Your privacy choices
                </h2>
                <p className="mt-1 text-[0.78rem] leading-6 text-[#5a7077]">
                  SkyLog uses essential cookies to keep the website secure and
                  working. With your permission, optional cookies can remember
                  preferences and help us improve. Read our{" "}
                  <Link href={appLinks.cookies} className="font-bold text-skylog-teal hover:text-skylog-teal-deep">
                    Cookie Policy
                  </Link>
                  ,{" "}
                  <Link href={appLinks.privacy} className="font-bold text-skylog-teal hover:text-skylog-teal-deep">
                    Privacy Policy
                  </Link>
                  , and{" "}
                  <Link href={appLinks.terms} className="font-bold text-skylog-teal hover:text-skylog-teal-deep">
                    Terms
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex">
              <button
                type="button"
                onClick={() => setManaging(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-[0.76rem] font-bold text-[#253f47] transition-colors hover:border-skylog-mint"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                Manage
              </button>
              <button
                type="button"
                onClick={() => save(false, false)}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-[0.76rem] font-bold text-[#253f47] transition-colors hover:border-skylog-mint"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => save(true, true)}
                className="col-span-2 rounded-xl bg-skylog-teal px-5 py-2.5 text-[0.76rem] font-bold text-white transition-colors hover:bg-skylog-teal-deep"
              >
                Accept all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type CookieChoiceProps = {
  icon: typeof Check;
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (checked: boolean) => void;
};

function CookieChoice({
  icon: Icon,
  title,
  description,
  checked,
  locked = false,
  onChange,
}: CookieChoiceProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-skylog-teal shadow-sm">
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[0.8rem] font-bold text-[#253f47]">{title}</h3>
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={locked}
            onClick={() => onChange?.(!checked)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal/40 ${
              checked ? "bg-skylog-teal" : "bg-slate-300"
            } ${locked ? "cursor-not-allowed opacity-70" : ""}`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                checked ? "left-6" : "left-1"
              }`}
            />
            <span className="sr-only">
              {locked ? `${title} cookies are always active` : `Toggle ${title} cookies`}
            </span>
          </button>
        </div>
        <p className="mt-1.5 text-[0.7rem] leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
