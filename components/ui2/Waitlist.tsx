import JoinWaitlist from "@/components/JoinWaitlist";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Waitlist() {
  return (
    <section id="waitlist" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className=" text-6xl sm:text-6xl lg:text-6xl font-bold text-text mb-4 sm:mb-6">
            Don&apos;t Miss Out 
          </h2>
          <div className="h-0.5 w-1/2 mt-12 mx-auto bg-gray-200 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <JoinWaitlist />
        </div>
      </div>
    </section>
  );
}


