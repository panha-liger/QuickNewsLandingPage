import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logos/Main pageg.png" 
                alt="QuickNews Logo" 
                width={60} 
                height={60}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              The future of news is here. Join creators earning 10X more than TikTok 
              while delivering AI-verified truth to users worldwide.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>10,000+ Early Users</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Illustration */}
          <div className="relative">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
              <Image 
                src="/images/image3d/image.png" 
                alt="QuickNews 3D Illustration" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 QuickNews. All rights reserved. Built for the future of news.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#waitlist" className="text-primary hover:underline font-medium">
              Join Waitlist
            </a>
            <a href="#product" className="text-muted-foreground hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


