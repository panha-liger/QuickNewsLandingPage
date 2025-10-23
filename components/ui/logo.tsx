import Image from "next/image";

interface LogoProps {
    isVertical?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xs';
}

export default function Logo({ isVertical = true, size = 'lg' }: LogoProps) {
    const sizeClasses = {
        xs: {
            image: "w-10 h-10 lg:w-12 lg:h-12",
            text: "text-lg lg:text-xl",
            gap: "gap-0.5"
        },
        sm: {
            image: "w-12 h-12 lg:w-16 lg:h-16",
            text: "text-xl lg:text-2xl",
            gap: "gap-1"
        },
        md: {
            image: "w-16 h-16 lg:w-20 lg:h-20",
            text: "text-2xl lg:text-3xl",
            gap: "gap-1.5"
        },
        lg: {
            image: "w-20 h-20 lg:w-28 lg:h-28",
            text: "text-3xl lg:text-5xl",
            gap: "gap-2"
        }
    };

    const currentSize = sizeClasses[size];

    return (
        <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center ${currentSize.gap}`}>
            <Image
                src="/images/logos/logo.png"
                alt="QuickNews Logo"
                width={180}
                height={180}
                className={`${currentSize.image} object-contain`}
            />
            <p className={`${currentSize.text} font-bold`}>Quicknews</p>
        </div>
    );
}