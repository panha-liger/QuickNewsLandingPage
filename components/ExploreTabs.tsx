"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pills = ["All","Breaking","Tech","Sports","Entertainment","Business","Health","Science","Politics"];

export default function ExploreTabs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="font-newsreader text-3xl sm:text-4xl font-semibold text-text mb-4">Explore by Topic</h2>
      <Tabs defaultValue="All">
        <TabsList className="mb-4 flex flex-wrap gap-2">
          {pills.map((p) => (
            <TabsTrigger key={p} value={p}>{p}</TabsTrigger>
          ))}
        </TabsList>
        {pills.map((p) => (
          <TabsContent key={p} value={p}>
            <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]"><div className="break-inside-avoid mb-3">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-gray-200/60 bg-white/60">
                <Image src="/products/explore-grid.jpg" alt="topic" fill className="object-cover" />
              </div>
            </div><div className="break-inside-avoid mb-3"><div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-gray-200/60 bg-white/60">
                <Image src="/products/profile-creator.jpg" alt="topic" fill className="object-cover" />
              </div></div></div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}


