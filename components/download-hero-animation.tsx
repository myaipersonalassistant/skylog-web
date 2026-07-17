"use client";

import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import sourceAnimation from "@/public/download.json";

const palette: Record<string, string> = {
  "255,247,220": "#ffffff",
  "85,85,72": "#2a707e",
  "18,18,18": "#1a3d45",
  "234,234,234": "#e0f4f1",
  "241,232,129": "#7dd3fc",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function recolorDownloadAnimation() {
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

export function DownloadHeroAnimation() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const animationData = useMemo(() => recolorDownloadAnimation(), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[31rem]" aria-hidden="true">
      <div className="absolute inset-[10%] rounded-full bg-skylog-cyan/25 blur-3xl" />
      <div className="absolute inset-[7%] rounded-[4rem] border border-skylog-mint/25 bg-gradient-to-br from-white/90 via-skylog-scrim/80 to-sky-50/80 shadow-[0_40px_120px_rgba(42,112,126,0.16)]" />
      <div className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-skylog-amber shadow-[0_0_24px_rgba(251,191,36,0.55)]" />
      <div className="absolute bottom-[19%] right-[10%] h-4 w-4 rounded-full border-2 border-skylog-teal/40" />
      <Lottie
        animationData={animationData}
        autoplay={!reduceMotion}
        loop={!reduceMotion}
        className="relative h-full w-full p-[10%]"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
