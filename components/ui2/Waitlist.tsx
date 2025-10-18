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
          <p className="text-2xl  font-bold text-gray-500 text-center">Your info is safe. We won&apos;t share or spam.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <JoinWaitlist />
        </div>
      </div>
    </section>
  );
}


