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
import Header from "@/components/ui2/Header";
import Contact from "@/components/ui2/Contact";

export default function Page() {
    return (
        <>
            <Hero />
            <Content />
            <Waitlist />
            <FAQ />
            <Contact/>
        </>
    );
}


