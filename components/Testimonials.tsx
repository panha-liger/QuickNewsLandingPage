"use client";

import { useState, useEffect } from "react";

const quotes = [
  { q: "Finally a shorts platform that values sources.", a: "Investigative creator" },
  { q: "The credibility meter is a game-changer.", a: "Media editor" },
  { q: "Short, clear, and accountable.", a: "Policy analyst" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % quotes.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur p-10 text-center">
        <p className="font-newsreader text-2xl">“{quotes[i].q}”</p>
        <p className="mt-2 text-sm text-muted-foreground">— {quotes[i].a}</p>
      </div>
    </section>
  );
}


