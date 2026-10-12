"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  id?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  maxVisibleItems?: number;
  className?: string;
}

export function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  maxVisibleItems = 10,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Check if dropdown goes out of the viewport and flip upwards if needed
  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const estimatedHeight = Math.min(options.length, maxVisibleItems) * 40 + 16;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < estimatedHeight && spaceAbove > spaceBelow) {
        setOpenUpward(true);
      } else {
        setOpenUpward(false);
      }
    }
  }, [isOpen, options.length, maxVisibleItems]);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  // Approx 40px per item; if > 10 items, enforce scrollable max-height
  const maxHeightPx = maxVisibleItems * 40 + 8;

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Hidden input for form submission & serialization */}
      <input type="hidden" id={id} name={name} value={value} />

      {/* Select Trigger Button */}
      <button
        type="button"
        id={id ? `${id}-button` : undefined}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-sm bg-white dark:bg-[#0B1118] border border-slate-300 dark:border-slate-700 hover:border-vensai-electric dark:hover:border-vensai-electric focus:border-vensai-electric rounded-sm text-slate-900 dark:text-white focus:outline-none flex items-center justify-between gap-2 text-left transition-colors cursor-pointer"
      >
        <span className="truncate font-medium">{value || placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-vensai-electric" : ""
          }`}
        />
      </button>

      {/* Dropdown Options List */}
      {isOpen && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          style={{ maxHeight: `${maxHeightPx}px` }}
          className={`absolute left-0 right-0 z-50 overflow-y-auto rounded-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] shadow-2xl py-1 focus:outline-none transition-all ${
            openUpward
              ? "bottom-full mb-1.5 origin-bottom"
              : "top-full mt-1.5 origin-top"
          }`}
        >
          {options.map((option) => {
            const isSelected = option === value;
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-2.5 text-xs sm:text-sm text-left flex items-center justify-between gap-3 transition-colors ${
                  isSelected
                    ? "bg-vensai-royal/10 dark:bg-vensai-electric/20 text-vensai-royal dark:text-vensai-electric font-semibold"
                    : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1c2638] hover:text-vensai-royal dark:hover:text-vensai-electric"
                }`}
              >
                <span className="truncate">{option}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-vensai-electric shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
