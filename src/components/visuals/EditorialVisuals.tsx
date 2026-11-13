"use client";

import React from "react";

type VisualProps = { className?: string };

export function HeroOperationsVisual({ className = "" }: VisualProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract illustration of software and operations layers"
    >
      <defs>
        <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B87333" stopOpacity="0.2" />
        </linearGradient>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="#0A1628" />
      <rect width="800" height="600" fill="url(#grid)" />
      <ellipse cx="520" cy="180" rx="220" ry="160" fill="url(#hg)" />
      <rect x="96" y="120" width="280" height="360" rx="8" fill="#111827" stroke="rgba(10,132,255,0.4)" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="120" y={150 + i * 56} width={200} height="36" rx="4" fill={i === 2 ? "#0A84FF" : "#1F2937"} opacity={i === 2 ? 0.9 : 0.7} />
      ))}
      <path d="M420 420 H680 V480 H420 Z" fill="#1C8C7E" opacity="0.35" />
      <path d="M420 300 H620 V360 H420 Z" fill="#B87333" opacity="0.25" />
      <circle cx="640" cy="420" r="48" fill="none" stroke="#0A84FF" strokeWidth="2" />
      <path d="M616 420 H664 M640 396 V444" stroke="#0A84FF" strokeWidth="2" />
    </svg>
  );
}

export function PillarVisual({ variant, className = "" }: VisualProps & { variant: string }) {
  const fills: Record<string, string> = {
    software: "#0A84FF",
    vendorship: "#4F7CFF",
    bpo: "#1C8C7E",
    digital: "#B87333",
  };
  const fill = fills[variant] ?? "#0A84FF";
  return (
    <svg viewBox="0 0 400 280" className={className} aria-hidden>
      <rect width="400" height="280" fill="#0A1628" rx="12" />
      <rect x="24" y="24" width="352" height="232" fill="none" stroke="rgba(255,255,255,0.08)" rx="8" />
      <circle cx="200" cy="140" r="72" fill={fill} fillOpacity="0.22" />
      <rect x="80" y="200" width="240" height="8" rx="4" fill={fill} fillOpacity="0.55" />
      <rect x="120" y="60" width="160" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function CaseStudyScene({ theme, className = "" }: VisualProps & { theme: "terminal" | "commerce" | "industrial" }) {
  const bg = theme === "commerce" ? "#F7F4EE" : theme === "industrial" ? "#1a2332" : "#020a1f";
  const accent = theme === "commerce" ? "#B87333" : theme === "industrial" ? "#B87333" : "#0A84FF";
  return (
    <svg viewBox="0 0 640 400" className={className} aria-hidden>
      <rect width="640" height="400" fill={bg} />
      {theme === "terminal" && (
        <>
          <text x="40" y="60" fill="#0A84FF" fontFamily="monospace" fontSize="14">
            ORDER 847291 · MATCHED
          </text>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x="40" y={80 + i * 28} width={560 - i * 40} height="18" fill="#0A84FF" opacity={0.15 + i * 0.05} rx="2" />
          ))}
        </>
      )}
      {theme === "commerce" && (
        <>
          <rect x="48" y="80" width="200" height="240" fill="#fff" stroke={accent} strokeWidth="2" rx="6" />
          <rect x="280" y="120" width="300" height="24" fill={accent} opacity="0.3" rx="4" />
          <rect x="280" y="170" width="220" height="24" fill="#0A84FF" opacity="0.2" rx="4" />
        </>
      )}
      {theme === "industrial" && (
        <>
          {["Fleet", "Procurement", "Inventory", "Crew", "Vendors", "Compliance"].map((label, i) => (
            <g key={label}>
              <rect x={48 + (i % 3) * 190} y={60 + Math.floor(i / 3) * 150} width="160" height="100" rx="6" fill="#111827" stroke={accent} strokeOpacity="0.4" />
              <text x={68 + (i % 3) * 190} y={115 + Math.floor(i / 3) * 150} fill="#e2e8f0" fontSize="13" fontFamily="sans-serif">
                {label}
              </text>
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

export function BpoOperationsVisual({ className = "" }: VisualProps) {
  return (
    <svg viewBox="0 0 800 450" className={className} aria-hidden>
      <rect width="800" height="450" fill="#0A1628" />
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect x={80 + col * 240} y="80" width="200" height="280" rx="10" fill="#111827" stroke="rgba(28,140,126,0.45)" />
          <path
            d={`M100 ${200 + col * 12} Q160 ${160 + col * 20} 220 ${200 + col * 8} T340 ${190 + col * 15}`}
            fill="none"
            stroke="#1C8C7E"
            strokeWidth="2"
          />
        </g>
      ))}
      <text x="80" y="48" fill="#1C8C7E" fontSize="13" fontFamily="monospace">
        VOICE · CHAT · BACK OFFICE
      </text>
    </svg>
  );
}
