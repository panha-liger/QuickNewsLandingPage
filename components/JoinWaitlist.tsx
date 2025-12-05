"use client";

import { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Smartphone, DollarSign, Info, AlertCircle, CheckCircle } from "lucide-react";
import Confetti from "react-confetti";
// import SuccessModal from "./SuccessModal";

type Status = "idle" | "loading" | "ok" | "existing" | "error";

export default function JoinWaitlist() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<'user' | 'creator'>('user');
  const [status, setStatus] = useState<Status>("idle");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  // const [showSuccessModal, setShowSuccessModal] = useState(false); // Temporarily disabled

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check for role query parameter and auto-select
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get("role");
      if (roleParam === "creator") {
        setRole("creator");
      }
    }
  }, []);

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
    const trimmedUsername = username.trim();
    const trimmedFullName = fullName.trim();
    if (!trimmedUsername || !trimmedFullName) return;
    setStatus("loading");
    try {
      // setShowConfetti(true);
      // setTimeout(() => {
      //   setShowConfetti(false);
      // }, 5000);
      // setStatus("ok");
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: trimmedUsername,
          full_name: trimmedFullName,
          role,
          ...utms,
        }),
      });
      const data = await res.json();
      if (data.status === "existing") setStatus("existing");
      else if (data.status === "ok") {
        setStatus("ok");
        setShowConfetti(true);
        setUsername("");
        setFullName("");

        // Stop confetti after 5 seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      } else setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {showConfetti && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            colors={['#000000', '#333333', '#666666', '#999999', '#CCCCCC']}
            gravity={0.3}
          />
        </div>,
        document.body
      )}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <form onSubmit={onSubmit} className="space-y-8">
          {/* Email Input */}
          <div className="space-y-6">
            <label className="block text-sm font-telegraf font-bold text-black uppercase tracking-wide">
              Telegram Phone Number or Username
            </label>
            <input
              type="text"
              required
              placeholder="01234567890 or @telegramuser"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 rounded-full border-2 border-black bg-white px-6 text-base font-telegraf outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <label className="block text-sm font-telegraf font-bold text-black uppercase tracking-wide">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
                  <span className="font-telegraf font-bold text-base">USER FOR NOW</span>
                </div>
                <p className={`text-md font-telegraf ${role === 'user' ? 'text-white/80' : 'text-black/60'}`}>
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
                  <span className="font-telegraf font-bold text-base">CONTENT CREATOR</span>
                </div>
                <p className={`text-md font-telegraf ${role === 'creator' ? 'text-white/80' : 'text-black/60'}`}>
                  Earn 60x more than Tiktok creating real content
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
              {status === "loading" ? "JOINING..." : "JOIN THE WAITLIST"}
            </button>
          </div>

          {/* Status Messages */}
          {status === "ok" && (
            <div className="text-center text-black text-sm font-telegraf font-bold flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5" /> Successfully joined the waitlist!
            </div>
          )}
          {status === "existing" && (
            <div className="text-center text-black text-sm font-telegraf font-bold flex items-center gap-2 justify-center">
              <Info className="w-5 h-5" /> You&apos;re already on the waitlist <Info className="w-5 h-5" />
            </div>
          )}
          {status === "error" && (
            <div className="text-center text-black text-sm font-telegraf font-bold flex items-center gap-2 justify-center">
              <AlertCircle className="w-5 h-5" /> Something went wrong. Please try again.
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
    </>
  );
}


