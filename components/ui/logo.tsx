import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Image src="/images/logos/logo.png" alt="QuickNews Logo" width={180} height={180} className="lg:w-28 lg:h-28 w-20 h-20  object-contain" />
            <p className="lg:text-5xl text-3xl font-bold">Quicknews</p>
        </div>
    );
}