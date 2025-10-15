"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
// import SuccessModal from "./SuccessModal";

type Status = "idle" | "loading" | "ok" | "existing" | "error";

export default function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<'user' | 'creator'>('user');
  const [status, setStatus] = useState<Status>("idle");
  // const [showSuccessModal, setShowSuccessModal] = useState(false); // Temporarily disabled

  const utms = useMemo(() => {
    if (typeof window === "undefined") return {} as Record<string, string>;
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      source: document.referrer || "direct",
    } as Record<string, string>;
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role, ...utms }),
      });
      const data = await res.json();
      if (data.status === "existing") setStatus("existing");
      else if (data.status === "ok") {
        setStatus("ok");
        // setShowSuccessModal(true); // Temporarily disabled
        setEmail(""); // Clear form
      } else setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-xl space-y-8 px-4">
    <form onSubmit={onSubmit} className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          required
          placeholder="you@news.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 sm:h-14 rounded-lg border border-input bg-white/80 px-4 text-base sm:text-lg shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button type="submit" disabled={status === "loading"} className="h-12 sm:h-14 text-base sm:text-lg px-6">
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
        <label className="flex items-center gap-4 cursor-pointer p-4 sm:p-6 rounded-xl border-2 transition-all hover:bg-blue-50" style={{ borderColor: role === 'user' ? '#3B82F6' : '#E5E7EB' }}>
          <input
            type="radio"
            name="role"
            value="user"
            checked={role === 'user'}
            onChange={(e) => setRole(e.target.value as 'user' | 'creator')}
            className="w-5 h-5 text-blue-600"
          />
          <div>
            <div className="text-sm sm:text-base font-semibold text-text">📱 News Consumer</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Get AI-verified news</div>
          </div>
        </label>
        <label className="flex items-center gap-4 cursor-pointer p-4 sm:p-6 rounded-xl border-2 transition-all hover:bg-green-50" style={{ borderColor: role === 'creator' ? '#10B981' : '#E5E7EB' }}>
          <input
            type="radio"
            name="role"
            value="creator"
            checked={role === 'creator'}
            onChange={(e) => setRole(e.target.value as 'user' | 'creator')}
            className="w-5 h-5 text-green-600"
          />
          <div>
            <div className="text-sm sm:text-base font-semibold text-text">💰 News Creator</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Earn 10X more than TikTok</div>
          </div>
        </label>
      </div>
      
      {status === "ok" && (
        <div className="text-center text-green-600 text-base sm:text-lg font-medium py-4">
          ✅ Successfully joined the waitlist!
        </div>
      )}
      {status === "existing" && (
        <div className="text-center text-blue-600 text-base sm:text-lg font-medium py-4">
          ℹ️ You&apos;re already on the waitlist
        </div>
      )}
      {status === "error" && (
        <div className="text-center text-red-600 text-base sm:text-lg font-medium py-4">
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </form>

    {/* Success Modal - Temporarily disabled */}
    {/* <SuccessModal 
      isOpen={false}
      onClose={() => {}}
      userRole={role}
    /> */}
  </div>
  );
}


