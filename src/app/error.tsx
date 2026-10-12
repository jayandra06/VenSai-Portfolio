"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for diagnostics
    console.error("Vensai Labs Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-[#0B1118] px-6 py-20">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-vensai-royal dark:text-vensai-electric">
            System Notice
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Something went wrong loading this view
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            An unexpected error occurred while rendering the page. You can reload this view or return to the homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-vensai-royal hover:bg-vensai-electric rounded-lg transition-colors cursor-pointer shadow-blue-glow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-vensai-electric rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
