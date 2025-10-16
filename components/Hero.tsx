import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="product">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                    <div className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                      Verified News by Verified Creators
                    </div>
                  </div>
          
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text tracking-tight mb-6 sm:mb-8">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              News is Here
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Join the Revolution</span>
          </h1>
          
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                    <strong className="text-text">Creators earn 60x more than TikTok</strong> sharing real news.
                    <br className="hidden sm:block" />
                    <strong className="text-text">Gen Zs love our creators!</strong>
                  </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <Link href="#waitlist" className="inline-flex items-center justify-center h-10 sm:h-11 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-md text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              🚀 Get Early Access
            </Link>
            <Link href="#waitlist" className="inline-flex items-center justify-center h-10 sm:h-11 px-6 sm:px-8 py-3 sm:py-4 border border-input bg-background hover:bg-muted/60 text-foreground rounded-md text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              💰 Start Earning as Creator
            </Link>
          </div>
        </div>
        
        {/* Product Demos - Responsive Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Demo */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-12 px-4">
              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-text mb-3 sm:mb-4">Desktop Experience</h3>
                      <p className="text-base sm:text-lg text-muted-foreground">News on your Desktop!</p>
            </div>
            <div className="relative group max-w-4xl sm:max-w-5xl mx-auto px-4">
              <div className="rounded-2xl sm:rounded-3xl border border-gray-200/40 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
                  {/* 3D Background */}
                  <div className="absolute inset-0 opacity-20">
                    <Image 
                      src="/images/image3d/3dpersonHolingContent.png" 
                      alt="3D Background" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  {/* Wave Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-blue-200/30 animate-pulse"></div>
                  {/* Desktop Video */}
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-lg bg-white shadow-inner overflow-hidden">
                    <video 
                      src="/videos/demos/Mac.mov" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Demo */}
          <div>
            <div className="text-center mb-8 sm:mb-12 px-4">
              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-text mb-3 sm:mb-4">Mobile App</h3>
                      <p className="text-base sm:text-lg text-muted-foreground">Scroll seamlessly!</p>
            </div>
            <div className="relative group max-w-xs sm:max-w-sm mx-auto px-4">
              <div className="rounded-[2rem] sm:rounded-[3rem] border border-gray-200/40 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.05] group-hover:rotate-1">
                <div className="relative aspect-[9/16] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
                  {/* 3D Background */}
                  <div className="absolute inset-0 opacity-20">
                    <Image 
                      src="/images/image3d/sittingmakingvideo.png" 
                      alt="3D Background" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  {/* Wave Animation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-green-200/30 via-blue-200/30 to-purple-200/30 animate-pulse"></div>
                  {/* Mobile Video */}
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-xl sm:rounded-2xl bg-white shadow-inner overflow-hidden">
                    <video 
                      src="/videos/demos/video.mov" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}