"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Item = {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export function Accordion({ items, type = "single", className }: {
  items: Item[];
  type?: "single" | "multiple";
  className?: string;
}) {
  const [openValues, setOpenValues] = React.useState<string[]>([]);

  const toggle = (v: string) => {
    setOpenValues((prev) => {
      const isOpen = prev.includes(v);
      if (type === "single") return isOpen ? [] : [v];
      return isOpen ? prev.filter((x) => x !== v) : [...prev, v];
    });
  };

  return (
    <div className={cn("divide-y rounded-2xl border", className)}>
      {items.map((it) => {
        const open = openValues.includes(it.value);
        return (
          <div key={it.value}>
            <button
              className="w-full text-left px-4 py-3 font-medium hover:bg-muted/60"
              aria-expanded={open}
              onClick={() => toggle(it.value)}
            >
              {it.trigger}
            </button>
            {open && <div className="px-4 pb-4 text-sm text-muted-foreground">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}


