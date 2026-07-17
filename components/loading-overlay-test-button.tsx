"use client";

import { useEffect, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { LoadingOverlay } from "@/components/loading-overlay";

export function LoadingOverlayTestButton() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  function showPreview() {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    setOpen(true);
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      timeoutRef.current = null;
    }, 3500);
  }

  return (
    <>
      <button
        type="button"
        onClick={showPreview}
        disabled={open}
        className="font-header fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-skylog-mint/40 bg-white px-4 py-3 text-xs font-extrabold text-skylog-teal shadow-[0_16px_45px_rgba(42,112,126,0.18)] transition-all hover:-translate-y-0.5 hover:border-skylog-teal hover:bg-skylog-scrim disabled:cursor-wait disabled:opacity-60"
      >
        <LoaderCircle className="h-4 w-4" aria-hidden="true" />
        Test loading UI
      </button>
      <LoadingOverlay
        open={open}
        title="Preparing your journey"
        description="This test preview will close automatically."
      />
    </>
  );
}
