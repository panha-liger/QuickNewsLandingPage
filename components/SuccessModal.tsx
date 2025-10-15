"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Sparkles, Star } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'user' | 'creator';
}

export default function SuccessModal({ isOpen, onClose, userRole }: SuccessModalProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti particles
      const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)]
      }));
      setConfetti(particles);

      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const isCreator = userRole === 'creator';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center overflow-hidden animate-pulse">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 rounded-3xl" />
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 text-yellow-400 animate-spin">
              <Star className="w-6 h-6" />
            </div>
            <div className="absolute bottom-4 left-4 text-purple-400 animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="relative z-10">
              {/* Success Icon */}
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>

              {/* Title */}
              <h2 className="font-newsreader text-3xl font-bold text-text mb-4">
                {isCreator ? "Welcome, Creator!" : "Welcome to QuickNews!"}
              </h2>

              {/* Message */}
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {isCreator 
                  ? "You're now part of our creator community! Start sharing real news videos and earn from your content."
                  : "You're on the waitlist! Get ready for AI-verified news videos from trusted creators."
                }
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {isCreator ? (
                  <>
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">AI verification for your content</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-blue-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Earn $3-$15 per 1000 views</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Priority placement in feed</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Early access to the platform</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-blue-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">AI chat for every video</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Verified news from creators</span>
                    </div>
                  </>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Awesome! Let&apos;s Go
              </button>
            </div>
          </div>
        </div>
  );
}
