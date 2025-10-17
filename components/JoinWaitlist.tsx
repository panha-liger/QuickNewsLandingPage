"use client";

import { useMemo, useState } from "react";
import { Smartphone, DollarSign } from "lucide-react";
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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <form onSubmit={onSubmit} className="space-y-8">
        {/* Email Input */}
        <div className="space-y-2">
          <label className="block text-sm font-telegraf font-bold text-black uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@news.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 rounded-full border-2 border-black bg-white px-6 text-base font-telegraf outline-none focus:ring-2 focus:ring-black transition-all"
          />
        </div>

        {/* Role Selection */}
        <div className="space-y-4">
          <label className="block text-xl font-telegraf font-bold text-black uppercase tracking-wide text-center">
            I&apos;m a...
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mx-auto">
            <label className={`flex flex-col gap-3 cursor-pointer p-6 rounded-3xl border-2 transition-all duration-200 ${role === 'user'
              ? 'border-black bg-black text-white'
              : 'border-black bg-white text-black hover:bg-gray-50'
              }`}>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={(e) => setRole(e.target.value as 'user' | 'creator')}
                className="sr-only"
              />
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5" />
                <span className="font-telegraf font-bold text-base">NEWS CONSUMER</span>
              </div>
              <p className={`text-lg font-telegraf ${role === 'user' ? 'text-white/80' : 'text-black/60'}`}>
                Get AI-verified news from trusted creators
              </p>
            </label>

            <label className={`flex flex-col gap-3 cursor-pointer p-6 rounded-3xl border-2 transition-all duration-200 ${role === 'creator'
              ? 'border-black bg-black text-white'
              : 'border-black bg-white text-black hover:bg-gray-50'
              }`}>
              <input
                type="radio"
                name="role"
                value="creator"
                checked={role === 'creator'}
                onChange={(e) => setRole(e.target.value as 'user' | 'creator')}
                className="sr-only"
              />
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5" />
                <span className="font-telegraf font-bold text-base">NEWS CREATOR</span>
              </div>
              <p className={`text-lg font-telegraf ${role === 'creator' ? 'text-white/80' : 'text-black/60'}`}>
                Earn 10X more than TikTok creating news
              </p>
            </label>
          </div>
        </div>

        {/* Join Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-black text-white font-bold px-8 py-3 text-lg rounded-full font-telegraf hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "JOINING..." : "JOIN WAITLIST"}
          </button>
        </div>

        {/* Status Messages */}
        {status === "ok" && (
          <div className="text-center text-black text-sm font-telegraf font-bold">
            ✓ Successfully joined the waitlist!
          </div>
        )}
        {status === "existing" && (
          <div className="text-center text-black text-sm font-telegraf font-bold">
            You&apos;re already on the waitlist
          </div>
        )}
        {status === "error" && (
          <div className="text-center text-black text-sm font-telegraf font-bold">
            Something went wrong. Please try again.
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


