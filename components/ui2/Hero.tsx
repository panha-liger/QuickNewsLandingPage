import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Logo from "../ui/logo";

export default function Hero() {
  return (
    <section className="relative  flex flex-col  items-center pt-20 justify-end  bg-white" id="product">
      <Image src="/images/hero-graphic.png" alt="Hero Graphic" className="absolute z-0 -bottom-16 w-full h-[81%]  object-contain"
        width={1000}
        height={1000}
      />
      <div className="relative z-10 flex flex-col items-center gap-20">
        <Logo />
        <div className="flex flex-col items-center gap-10">
          <h1 className="lg:text-8xl text-6xl font-bold text-center ">Verified News. <br />
            Verified Creators.</h1>
          <Link href="#waitlist" className="bg-black text-white font-bold px-8 py-3 text-xl rounded-full ">BE FIRST</Link>
        </div>
      </div>
    </section>
  );
}