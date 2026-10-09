"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vensai-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = (level: "all" | "essential") => {
    localStorage.setItem("vensai-cookie-consent", level);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Preferences"
      className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-40 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-5 rounded-sm shadow-enterprise-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-vensai-electric">
            Privacy &amp; Cookie Notice
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
            Vensai Labs uses essential cookies to ensure optimal site performance and theme preferences. Review our{" "}
            <Link href="/cookies" className="underline hover:text-vensai-electric">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-vensai-electric">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={() => accept("essential")}
          className="px-3.5 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-vensai-electric rounded-sm transition-colors"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={() => accept("all")}
          className="px-4 py-1.5 text-xs font-semibold bg-vensai-royal hover:bg-vensai-electric text-white rounded-sm transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
