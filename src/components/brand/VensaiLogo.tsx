"use client";

import React from "react";
import Link from "next/link";

interface VensaiLogoProps {
  variant?: "navbar" | "full" | "footer" | "symbol" | "original";
  className?: string;
  asLink?: boolean;
}

export function VensaiLogo({
  variant = "navbar",
  className = "",
  asLink = true,
}: VensaiLogoProps) {
  const content = (() => {
    if (variant === "symbol") {
      return (
        <div className={`relative inline-flex items-center justify-center ${className}`}>
          <img
            src="/brand/vensai-symbol.png"
            alt="Vensai Labs Geometric V Symbol"
            width={110}
            height={90}
            decoding="async"
            className="h-full w-auto object-contain select-none"
          />
        </div>
      );
    }

    if (variant === "original") {
      return (
        <div
          className={`relative overflow-hidden rounded-sm border border-slate-800/80 bg-[#05080D] shadow-blue-glow ${className}`}
        >
          <img
            src="/brand/vensai-logo-original.jpg"
            alt="Vensai Labs — Freelance Talent. Real Solutions. Build | Design | Automate | Scale"
            width={1024}
            height={724}
            decoding="async"
            loading="lazy"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      );
    }

    if (variant === "full") {
      return (
        <div className={`relative inline-flex flex-col items-center ${className}`}>
          <img
            src="/brand/vensai-full-light.png"
            alt="Vensai Labs — Freelance Talent. Real Solutions. Build | Design | Automate | Scale"
            width={680}
            height={480}
            decoding="async"
            className="block dark:hidden w-full h-auto object-contain select-none"
          />
          <img
            src="/brand/vensai-full-dark.png"
            alt="Vensai Labs — Freelance Talent. Real Solutions. Build | Design | Automate | Scale"
            width={680}
            height={480}
            decoding="async"
            className="hidden dark:block w-full h-auto object-contain select-none"
          />
        </div>
      );
    }

    if (variant === "footer") {
      return (
        <div className={`inline-flex flex-col items-start gap-3 ${className}`}>
          <div className="flex items-center gap-3.5">
            <img
              src="/brand/vensai-symbol.png"
              alt="Vensai Labs Symbol"
              width={110}
              height={90}
              decoding="async"
              loading="lazy"
              className="h-11 w-auto object-contain select-none"
            />
            <img
              src="/brand/vensai-wordmark-light.png"
              alt="VENSAI LABS"
              width={260}
              height={72}
              decoding="async"
              loading="lazy"
              className="block dark:hidden h-9 w-auto object-contain select-none"
            />
            <img
              src="/brand/vensai-wordmark-dark.png"
              alt="VENSAI LABS"
              width={260}
              height={72}
              decoding="async"
              loading="lazy"
              className="hidden dark:block h-9 w-auto object-contain select-none"
            />
          </div>
        </div>
      );
    }

    // Default: "navbar" horizontal lockup using the 2x supersampled sub-pixel V symbol + VENSAI LABS wordmark
    return (
      <div className={`inline-flex items-center gap-3.5 group shrink-0 ${className}`}>
        <img
          src="/brand/vensai-symbol.png"
          alt="Vensai Labs V Symbol"
          width={110}
          height={90}
          decoding="async"
          fetchPriority="high"
          className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] select-none"
        />
        <div className="flex flex-col justify-center">
          <img
            src="/brand/vensai-wordmark-light.png"
            alt="VENSAI LABS"
            width={260}
            height={72}
            decoding="async"
            fetchPriority="high"
            className="block dark:hidden h-8 sm:h-9 w-auto object-contain select-none"
          />
          <img
            src="/brand/vensai-wordmark-dark.png"
            alt="VENSAI LABS"
            width={260}
            height={72}
            decoding="async"
            fetchPriority="high"
            className="hidden dark:block h-8 sm:h-9 w-auto object-contain select-none"
          />
        </div>
      </div>
    );
  })();

  if (!asLink) {
    return content;
  }

  return (
    <Link
      href="/"
      aria-label="Vensai Labs Home — Freelance Talent. Real Solutions."
      className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-vensai-electric rounded-sm shrink-0"
    >
      {content}
    </Link>
  );
}
