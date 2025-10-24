'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "../ui/logo";
import UserBar from "./UserBar";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
  const headline = [
    "News", "you", "can", "trust", "and", "content", "you’ll", "love"

  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.23,
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
      <Image src="/images/hero-graphic-2.png" alt="Hero Graphic" className="absolute z-0 max-w-[1000px] -bottom-16 w-full h-[81%]  object-contain"
        width={1000}
        height={1000}
      />
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
                  className="inline-block lg:mx-4 mx-1 tracking-tighter"
                >
                  {word + " "}
                  {idx === headline.length - 1 && <Heart className="w-14 h-14 lg:w-20 lg:h-20 text-red-500 fill-red-500 inline-block ml-2 mb-2" />}
                </motion.span>
              ))}
              <br></br>
            </motion.span>
          </h1>
          <UserBar />
          <Link href="#waitlist" className="bg-black text-white font-bold px-8 py-3 text-xl rounded-full">
            JOIN WAITLIST
          </Link>
        </div>
      </div>
    </section>
  );
}