"use client";

import { SlidersHorizontal } from "lucide-react";

type OpenCookieSettingsButtonProps = {
  id?: string;
};

export function OpenCookieSettingsButton({ id }: OpenCookieSettingsButtonProps) {
  return (
    <button
      id={id}
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("skylog:open-cookie-settings"))
      }
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-skylog-teal px-5 py-3 text-[0.8rem] font-bold text-white shadow-lg shadow-skylog-teal/15 transition-all hover:-translate-y-0.5 hover:bg-skylog-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal focus-visible:ring-offset-2"
    >
      <SlidersHorizontal className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      Open cookie settings
    </button>
  );
}
