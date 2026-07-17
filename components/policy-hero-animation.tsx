"use client";

import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import termsAnimation from "@/public/terms.json";
import privacyAnimation from "@/public/privacy.json";
import cookiesAnimation from "@/public/cookies.json";

type PolicyHeroAnimationProps = {
  policy: "terms" | "privacy" | "cookies";
};

const animations = {
  terms: termsAnimation,
  privacy: privacyAnimation,
  cookies: cookiesAnimation,
} as const;

const treatments = {
  terms: {
    glow: "bg-amber-200/35",
    surface: "border-amber-100 bg-gradient-to-br from-amber-50/90 via-white to-teal-50/90",
  },
  privacy: {
    glow: "bg-skylog-cyan/25",
    surface: "border-sky-100 bg-gradient-to-br from-sky-50/90 via-white to-teal-50/90",
  },
  cookies: {
    glow: "bg-skylog-mint/25",
    surface: "border-teal-100 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/90",
  },
} as const;

const palettes = {
  terms: {
    "28,81,184": "#2a707e",
    "111,140,250": "#7dd3fc",
    "178,182,200": "#b9d6d3",
    "186,190,206": "#cde3e0",
    "3,14,53": "#1a3d45",
    "35,86,166": "#20606f",
    "198,203,218": "#dcecea",
    "29,92,183": "#2a707e",
    "255,129,40": "#fbbf24",
    "30,73,159": "#20606f",
  },
  privacy: {
    "83,187,255": "#7fb3b3",
    "27,159,247": "#2a707e",
    "47,77,102": "#1a3d45",
    "39,164,248": "#4d9ba6",
    "124,203,255": "#7dd3fc",
    "243,197,31": "#fbbf24",
    "252,211,61": "#fcd34d",
    "8,132,215": "#20606f",
  },
  cookies: {
    "128,68,128": "#20606f",
    "235,135,5": "#7fb3b3",
    "251,206,7": "#fbbf24",
  },
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toLottieColor(hex: string) {
  const channels = hex.match(/[a-f\d]{2}/gi);
  if (!channels) return null;
  return [...channels.map((channel) => Number.parseInt(channel, 16) / 255), 1];
}

function recolorAnimation(source: unknown, palette: Record<string, string>) {
  const animation: unknown = JSON.parse(JSON.stringify(source));

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
        const replacement = palette[key];
        if (replacement) color.k = toLottieColor(replacement);
      }
    }

    Object.values(value).forEach(visit);
  }

  visit(animation);
  return animation;
}

export function PolicyHeroAnimation({ policy }: PolicyHeroAnimationProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const animationData = useMemo(
    () => recolorAnimation(animations[policy], palettes[policy]),
    [policy],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden="true">
      <div className={`absolute inset-8 rounded-full ${treatments[policy].glow} blur-3xl`} />
      <div
        className={`absolute inset-4 rounded-[3rem] border shadow-[0_28px_90px_rgba(42,112,126,0.1)] ${treatments[policy].surface}`}
      />
      <Lottie
        animationData={animationData}
        autoplay={!reduceMotion}
        loop={!reduceMotion}
        className="relative h-full w-full p-5"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
