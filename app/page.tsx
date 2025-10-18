import Navbar from "@/components/Navbar";
import Hero from "@/components/ui2/Hero";
import AIVerification from "@/components/AIVerification";
import CreatorEconomy from "@/components/CreatorEconomy";
import FAQ from "@/components/ui2/FAQ";
import FinalCTA from "@/components/FinalCTA";
import AnimatedFooter from "@/components/AnimatedFooter";
import Content from "@/components/ui2/Content";
import Waitlist from "@/components/ui2/Waitlist";
import Counter from "@/components/ui2/Counter";

export default function Page() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            {/* <Counter /> */}
            <Content />
            {/* <CreatorEconomy /> */}
            <Waitlist />
            <FAQ />
            {/* <AnimatedFooter /> */}
        </>
    );
}


