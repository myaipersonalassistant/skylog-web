"use client";

import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import sourceAnimation from "@/public/loading.json";

type LoadingOverlayProps = {
  open: boolean;
  title?: string;
  description?: string;
};

function recolorLoadingAnimation() {
  const animation: unknown = JSON.parse(JSON.stringify(sourceAnimation));

  function visit(value: unknown) {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (typeof value !== "object" || value === null) return;

    const record = value as Record<string, unknown>;
    const color = record.c;
    if (
      typeof color === "object" &&
      color !== null &&
      "k" in color &&
      Array.isArray(color.k) &&
      color.k.length === 4
    ) {
      const key = color.k
        .slice(0, 3)
        .map((channel) => Math.round(Number(channel) * 255))
        .join(",");

      if (key === "15,23,42") {
        color.k = [42 / 255, 112 / 255, 126 / 255, 1];
      }
    }

    Object.values(record).forEach(visit);
  }

  visit(animation);
  return animation;
}

export function LoadingOverlay({
  open,
  title = "Preparing your journey",
  description = "Bringing the details together for you.",
}: LoadingOverlayProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const animationData = useMemo(() => recolorLoadingAnimation(), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="font-header fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-skylog-ink/10 px-5 backdrop-blur-[6px]"
      role="status"
      aria-live="polite"
      aria-label={`${title}. ${description}`}
      aria-busy="true"
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-skylog-mint/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-skylog-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(42,112,126,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(42,112,126,0.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

      <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 px-6 pb-7 pt-5 text-center shadow-[0_35px_110px_rgba(26,61,69,0.2)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-skylog-teal via-skylog-cyan to-skylog-amber" />
        <div className="relative mx-auto h-48 w-48">
          <div className="absolute inset-8 rounded-full bg-skylog-cyan/15 blur-2xl" />
          <div className="absolute inset-[22%] rounded-full border border-skylog-mint/25" />
          <Lottie
            animationData={animationData}
            autoplay={!reduceMotion}
            loop={!reduceMotion}
            className="relative h-full w-full"
            rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
            aria-hidden="true"
          />
        </div>

        <h2 className="-mt-2 text-xl font-[790] tracking-[-0.035em] text-skylog-ink">{title}</h2>
        <p className="mx-auto mt-2 max-w-xs text-sm font-medium leading-6 text-[#60747a]">{description}</p>

        <div className="mx-auto mt-6 h-1.5 max-w-48 overflow-hidden rounded-full bg-skylog-teal/10">
          <span className="block h-full w-1/2 animate-[loading-progress_1.25s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-skylog-teal to-skylog-cyan motion-reduce:w-full motion-reduce:animate-none" />
        </div>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
