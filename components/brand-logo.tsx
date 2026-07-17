"use client";

import Image from "next/image";
import { brand } from "@/lib/brand";

type BrandLogoProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandLogo({ compact = false, inverse = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt=""
        width={585}
        height={710}
        className="h-10 w-auto shrink-0 object-contain drop-shadow-[0_5px_8px_rgba(15,23,42,0.18)]"
        aria-hidden="true"
      />
      {!compact && (
        <span className="flex flex-col">
          <span
            className={`text-[1.08rem] font-extrabold leading-none tracking-[-0.04em] ${
              inverse ? "text-white" : "text-skylog-ink"
            }`}
          >
            {brand.name}
          </span>
          <span
            className={`mt-1 text-[0.52rem] font-bold uppercase tracking-[0.2em] ${
              inverse ? "text-white/60" : "text-skylog-teal/70"
            }`}
          >
            Travel, beautifully managed
          </span>
        </span>
      )}
    </span>
  );
}
