"use client";

import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function ProductGallery() {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    // Static list; in real app, could fetch directory manifest at build-time
    setImages([
      "/products/hero-player.jpg",
      "/products/explore-grid.jpg",
      "/products/profile-creator.jpg",
      "/products/feed-card-1.jpg",
      "/products/feed-card-2.jpg",
      "/products/feed-card-3.jpg",
      "/products/feed-card-4.jpg",
    ]);
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-newsreader text-3xl sm:text-4xl font-semibold text-text mb-6">See the product</h2>
      <GalleryGrid images={images} />
    </section>
  );
}

function GalleryGrid({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            className="group overflow-hidden rounded-xl border border-gray-200/60 bg-white/60 backdrop-blur"
            onClick={() => { setCurrent(src); setOpen(true); }}
          >
            <div className="relative aspect-[4/5]">
              <Image src={src} alt={`product ${i+1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden">
          {current && (
            <div className="relative w-full h-[80vh]">
              <Image src={current} alt="full" fill className="object-contain bg-black" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}


