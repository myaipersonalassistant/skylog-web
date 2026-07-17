"use client";

import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import sourceAnimation from "@/public/career.json";

const palette: Record<string, string> = {
  "0,0,0": "#1a3d45",
  "255,67,32": "#2a707e",
  "255,255,255": "#ffffff",
  "255,217,40": "#fbbf24",
  "95,122,255": "#7dd3fc",
  "35,31,32": "#20606f",
  "252,252,252": "#f8fbfb",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function recolorCareerAnimation() {
  const animation: unknown = JSON.parse(JSON.stringify(sourceAnimation));

  function visit(value: unknown) {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (!isRecord(value)) return;

    const color = value.c;
    if (isRecord(color) && Array.isArray(color.k) && color.k.length === 4) {
      const channels = color.k.slice(0, 3);
      if (channels.every((channel) => typeof channel === "number")) {
        const key = channels.map((channel) => Math.round(Number(channel) * 255)).join(",");
        const replacement = palette[key]?.match(/[a-f\d]{2}/gi);
        if (replacement) {
          color.k = [...replacement.map((channel) => Number.parseInt(channel, 16) / 255), 1];
        }
      }
    }

    Object.values(value).forEach(visit);
  }

  visit(animation);
  return animation;
}

export function CareersHeroAnimation() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const animationData = useMemo(() => recolorCareerAnimation(), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[31rem]" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-skylog-cyan/20 blur-3xl" />
      <div className="absolute inset-[7%] rounded-[4rem] border border-skylog-mint/25 bg-gradient-to-br from-white/90 via-skylog-scrim/75 to-sky-50/80 shadow-[0_40px_110px_rgba(42,112,126,0.15)]" />
      <div className="absolute left-[9%] top-[20%] h-3 w-3 rounded-full bg-skylog-amber shadow-[0_0_22px_rgba(251,191,36,0.45)]" />
      <div className="absolute bottom-[14%] right-[11%] h-4 w-4 rounded-full border-2 border-skylog-teal/35" />
      <Lottie
        animationData={animationData}
        autoplay={!reduceMotion}
        loop={!reduceMotion}
        className="relative h-full w-full p-[7%]"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
