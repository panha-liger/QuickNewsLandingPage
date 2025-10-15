"use client";

import Image from "next/image";
import { useState } from "react";
import { mockStories } from "@/content/mockStories";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function FeedPreview() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="font-newsreader text-3xl sm:text-4xl font-semibold text-text mb-6">Live Feed Preview</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockStories.slice(0, 8).map((s, idx) => (
          <button key={s.id} className="text-left group" onClick={() => { setCurrent(idx); setOpen(true); }}>
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur">
              <div className="relative aspect-[9/16]">
                <Image src={s.thumb} alt={s.headline} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="absolute top-2 left-2">
                  <Badge>{s.ai.risk === "Low" ? "AI Verified" : "Review"}</Badge>
                </div>
              </div>
              <div className="p-3">
                <div className="line-clamp-2 font-medium text-sm text-text">{s.headline}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.creator.name} · {Math.round(s.durationSec)}s</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {current != null && (
            <div className="p-4">
              <DialogHeader>
                <DialogTitle className="mb-2">{mockStories[current].headline}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{mockStories[current].ai.summary}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


