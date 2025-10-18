"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

type Item = {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export function Accordion({ items, className }: {
  items: Item[];
  className?: string;
}) {
  const [openValues, setOpenValues] = React.useState<string[]>([]);

  const toggle = (v: string) => {
    setOpenValues((prev) => {
      const isOpen = prev.includes(v);
      // Always allow multiple open; toggling just adds/removes current value
      return isOpen ? prev.filter((x) => x !== v) : [...prev, v];
    });
  };

  return (
    <div className={` border-2 border-black rounded-3xl overflow-hidden ${className || ''}`}>
      {items.map((it) => {
        const open = openValues.includes(it.value);
        return (
          <div key={it.value} className="border-black">
            <button
              className="w-full text-left px-6 py-5  font-bold flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={open}
              onClick={() => toggle(it.value)}
            >
              <span>{it.trigger}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ease-out flex-shrink-0 ml-4 ${open ? 'rotate-180' : 'rotate-0'
                  }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="px-6 py-2 text-md text-black/70 ">
                {it.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

