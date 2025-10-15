import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function StoryCard({
  title,
  creator,
  thumb,
  risk,
  duration,
}: {
  title: string;
  creator: string;
  thumb: string;
  risk: "Low" | "Review";
  duration: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur">
      <div className="relative aspect-[9/16]">
        <Image src={thumb} alt={title} fill className="object-cover" />
        <div className="absolute top-2 left-2"><Badge>{risk === "Low" ? "AI Verified" : "Review"}</Badge></div>
      </div>
      <div className="p-3">
        <div className="line-clamp-2 font-medium text-sm text-text">{title}</div>
        <div className="mt-1 text-xs text-muted-foreground">{creator} · {Math.round(duration)}s</div>
      </div>
    </div>
  );
}


