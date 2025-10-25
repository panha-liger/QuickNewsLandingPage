'use client'
import Link from "next/link";
import Logo from "../ui/logo";
import { motion } from "framer-motion";

export default function CreatorsHero() {
    const headline = [
        "Earn", "$1.2", "Per", "1000", "Views", "as", "a", "Creator!"
    ];
    const subtitle = [
        "Post", "original", "content", "and", "earn", "more!"
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const subtitleContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 1.3, // Wait for headline to finish
            },
        },
    };

    const wordVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 410,
                damping: 30,
            },
        },
    };
    return (
        <section className="relative  flex flex-col  items-center lg:pt-32 pt-44 px-4 justify-end  bg-white" id="product">
            {/* <Image src="/images/hero-graphic-2.png" alt="Hero Graphic" className="absolute z-0 max-w-[1000px] -bottom-16 w-full h-[81%]  object-contain"
                width={1000}
                height={1000}
            /> */}
            <div className="relative z-10 flex flex-col items-center gap-10">
                <Logo />


                <div className="flex flex-col items-center gap-10">
                    <h1 className="lg:text-8xl text-6xl max-w-5xl font-bold text-center select-none">
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="inline-block"
                        >
                            {headline.map((word, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={wordVariants}
                                    className="inline-block lg:mx-2 mx-1 tracking-tighter"
                                >
                                    {word}{" "}
                                </motion.span>
                            ))}
                        </motion.span>
                    </h1>

                    <p className="text-4xl lg:text-5xl text-center font-medium max-w-4xl">
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={subtitleContainerVariants}
                            className="inline-block"
                        >
                            {subtitle.map((word, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={wordVariants}
                                    className="inline-block lg:mx-2 mx-1 tracking-tighter "
                                >
                                    {word}{" "}
                                </motion.span>
                            ))}
                        </motion.span>
                    </p>

                    <Link href="/?role=creator#waitlist" className="bg-black text-white font-bold px-8 py-3 text-xl rounded-full">
                        BECOME A VERIFIED CREATOR
                    </Link>
                </div>
            </div>
        </section>
    );
}