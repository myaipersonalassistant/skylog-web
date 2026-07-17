"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/accessibility-journey.json";

export function AccessibilityHeroAnimation() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden="true">
      <div className="absolute inset-10 rounded-full bg-white/70 shadow-[0_28px_90px_rgba(42,112,126,0.12)] backdrop-blur-sm" />
      <Lottie
        animationData={animationData}
        autoplay={!reduceMotion}
        loop={!reduceMotion}
        className="relative h-full w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
