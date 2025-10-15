"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "backdrop-blur bg-white/60 border-b border-gray-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logos/Main pageg.png" 
              alt="QuickNews Logo" 
              width={120} 
              height={120}
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="#waitlist" className="hidden sm:inline-flex h-8 sm:h-10 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-primary-foreground rounded-md text-xs sm:text-sm font-medium hover:opacity-90 transition-colors">
            Get Early Access
          </Link>
          <Link href="#waitlist" className="hidden md:inline-flex h-8 sm:h-10 px-3 sm:px-4 py-1.5 sm:py-2 border border-input bg-background hover:bg-muted/60 text-foreground rounded-md text-xs sm:text-sm font-medium transition-colors">
            Apply as Creator
          </Link>
        </div>
      </div>
    </div>
  );
}


