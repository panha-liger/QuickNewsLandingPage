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
    <div className="w-full max-w-md mx-auto px-4 sm:px-6">
      {/* Early Access Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/50 text-purple-700 text-sm font-medium">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          Early Access
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/40 shadow-xl p-6 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Email Input - Full Width on Mobile */}
          <div className="space-y-2">
            <input
              type="email"
              required
              placeholder="you@news.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-white px-4 text-base font-medium shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Join Button - Full Width on Mobile */}
          <Button 
            type="submit" 
            disabled={status === "loading"} 
            className="w-full h-12 sm:h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </Button>
          
          {/* Role Selection - Stacked on Mobile */}
          <div className="space-y-3">
            <label className={`flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 ${
              role === 'user' 
                ? 'border-blue-500 bg-blue-50/50' 
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
            }`}>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={(e) => setRole(e.target.value as 'user' | 'creator')}
                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="font-semibold text-gray-900">News Consumer</div>
                  <div className="text-sm text-gray-600">Get AI-verified news</div>
                </div>
              </div>
            </label>
            
            <label className={`flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 ${
              role === 'creator' 
                ? 'border-green-500 bg-green-50/50' 
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
            }`}>
              <input
                type="radio"
                name="role"
                value="creator"
                checked={role === 'creator'}
                onChange={(e) => setRole(e.target.value as 'user' | 'creator')}
                className="w-5 h-5 text-green-600 focus:ring-green-500"
              />
              <div className="flex items-center gap-3">
                <div className="text-2xl">💰</div>
                <div>
                  <div className="font-semibold text-gray-900">News Creator</div>
                  <div className="text-sm text-gray-600">Earn 10X more than TikTok</div>
                </div>
              </div>
            </label>
          </div>
          
          {/* Status Messages */}
          {status === "ok" && (
            <div className="text-center text-green-600 text-base font-medium py-3 bg-green-50 rounded-xl">
              ✅ Successfully joined the waitlist!
            </div>
          )}
          {status === "existing" && (
            <div className="text-center text-blue-600 text-base font-medium py-3 bg-blue-50 rounded-xl">
              ℹ️ You&apos;re already on the waitlist
            </div>
          )}
          {status === "error" && (
            <div className="text-center text-red-600 text-base font-medium py-3 bg-red-50 rounded-xl">
              ❌ Something went wrong. Please try again.
            </div>
          )}
        </form>

        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200/60">
          <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-green-500">✓</div>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-blue-500">🚀</div>
              <span>Early access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-yellow-500">💰</div>
              <span>Creator earnings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal - Temporarily disabled */}
      {/* <SuccessModal 
        isOpen={false}
        onClose={() => {}}
        userRole={role}
      /> */}
    </div>
  );
}


