"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const productImages = [
  "/images/products/Ai_Product_Articlefeature.png",
  "/images/products/Mac_Explorepage.png", 
  "/images/products/Mac_followyourfavcreator.png",
  "/images/products/Screen_explore.png"
];

export default function AnimatedFooter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t border-gray-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text">QuickNews</h3>
              <p className="text-sm text-muted-foreground">The future of news</p>
            </div>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed">
              Join creators earning 10X more than TikTok while delivering AI-verified truth to users worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-sm text-muted-foreground">
                10,000+ Early Users
              </div>
              <div className="text-sm text-muted-foreground">
                AI-Powered
              </div>
            </div>
          </div>

          {/* Product Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text">Features</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>AI Chat & Verification</li>
              <li>Creator Earnings</li>
              <li>Real News Sources</li>
              <li>GenZ Creator Friendly</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-text transition-colors">How It Works</a></li>
              <li><a href="#ai" className="hover:text-text transition-colors">AI Features</a></li>
              <li><a href="#pricing" className="hover:text-text transition-colors">Creator Program</a></li>
              <li><a href="#faq" className="hover:text-text transition-colors">FAQ</a></li>
              <li><a href="#waitlist" className="hover:text-text transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-text mb-2">See QuickNews in Action</h4>
            <p className="text-sm text-muted-foreground">Experience the future of news</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-500 ${
                    index === currentIndex 
                      ? 'border-gray-400 shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image 
                    src={image} 
                    alt={`Product Feature ${index + 1}`}
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gray-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 QuickNews. All rights reserved. Built for the future of news.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#waitlist" className="text-primary hover:underline font-medium transition-colors">
                Join Waitlist
              </a>
              <a href="#product" className="text-muted-foreground hover:text-text transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
