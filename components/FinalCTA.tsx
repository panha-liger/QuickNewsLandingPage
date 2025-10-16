import JoinWaitlist from "@/components/JoinWaitlist";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function FinalCTA() {
  return (
    <section id="waitlist" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4 sm:mb-6">
            Don&apos;t Miss Out
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Join <AnimatedCounter end={1000} className="font-mono font-black" /> Early Users
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            <strong className="text-text">Limited spots available!</strong> Be among the first to experience 
            the future of news. Creators could earn $500+ per month.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <JoinWaitlist />
        </div>
      </div>
    </section>
  );
}


