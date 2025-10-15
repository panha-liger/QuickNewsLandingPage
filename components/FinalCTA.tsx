import JoinWaitlist from "@/components/JoinWaitlist";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function FinalCTA() {
  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200/40 bg-white/90 backdrop-blur-xl shadow-2xl p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Early Access
            </div>
            
            <h2 className="font-newsreader text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              Don&apos;t Miss Out
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Join <AnimatedCounter end={10000} className="font-mono font-black" /> Early Users
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              <strong className="text-text">Limited spots available!</strong> Be among the first to experience 
              the future of news. Creators are already earning $500+ per month.
            </p>
            
            <div className="max-w-lg mx-auto">
              <JoinWaitlist />
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>✅ No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>🚀 Early access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>💰 Creator earnings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


