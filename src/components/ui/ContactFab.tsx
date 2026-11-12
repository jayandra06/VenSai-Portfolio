"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function ContactFab() {
  return (
    <Link
      href="/contact"
      aria-label="Contact"
      className="group fixed bottom-6 right-6 z-40 inline-flex h-14 items-center rounded-full bg-vensai-royal pl-4 pr-4 text-white shadow-[0_10px_24px_-8px_rgba(0,102,255,0.55)] transition-all duration-200 hover:bg-vensai-electric hover:pr-5 focus-visible:pr-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-vensai-royal"
    >
      <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={1.75} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-200 group-hover:max-w-[7.5rem] group-hover:opacity-100 group-focus-visible:max-w-[7.5rem] group-focus-visible:opacity-100">
        <span className="pl-2.5">Contact</span>
      </span>
    </Link>
  );
}
