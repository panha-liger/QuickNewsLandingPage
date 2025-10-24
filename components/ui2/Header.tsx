import Link from "next/link";
import Logo from "../ui/logo";

const NavLink = ({ href, children, isButton = false, hiddenOnMobile = false }: { href: string; children: React.ReactNode; isButton?: boolean; hiddenOnMobile?: boolean }) => {
    if (isButton) {
        return (
            <Link
                href={href}
                className={`inline-flex h-10 px-4 py-2 bg-black text-white font-bold text-lg transition-all rounded-full hover:bg-gray-800 ${hiddenOnMobile ? "hidden sm:inline-flex" : ""}`}
            >
                {children}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className={`relative inline-flex h-10 px-4 py-2 text-lg font-bold  transition-colors group ${hiddenOnMobile ? "hidden sm:inline-flex" : ""}`}
        >
            <span className="relative">
                {children}
                <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-gray-500 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </span>
        </Link>
    );
};

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-black/10">
            <div className="mx-auto max-w-7xl px-4 py-4">
                <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-4">
                    {/* Logo - full width on small screens, auto on larger
                    <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-2 sm:mb-0">
                        <Link href="/">
                            <Logo size="xs" isVertical={false} />
                        </Link>
                    </div> */}

                    {/* Nav items - wrap on small screens */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2 w-full sm:w-auto">
                        <NavLink href="/creators" >I&apos;m a Content Creator</NavLink>
                        <NavLink href="/advertisers" >I&apos;m an Advertiser</NavLink>
                        <NavLink href="#faq" hiddenOnMobile>What is Quicknews?</NavLink>
                        <NavLink href="#waitlist" isButton hiddenOnMobile>Win $100</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}