'use client';

import { useEffect } from 'react';


interface ContentSectionProps {
    text: string | React.ReactNode;
    src: string;
    poster: string;
    order: 1 | 2; // 1 = text left, media right | 2 = media left, text right
}

export default function ContentSection({ text, src, poster, order }: ContentSectionProps) {

    useEffect(() => {
        const handler = () => {
            document.querySelectorAll("video").forEach((v) => {
                v.muted = true; // required for mobile autoplay
                v.play().catch(() => { });
            });
            window.removeEventListener("touchstart", handler);
        };

        window.addEventListener("touchstart", handler, { once: true });
        return () => window.removeEventListener("touchstart", handler);
    }, []);

    const VideoElement = () => (
        <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1} // prevents focus overlay
            controls={false}
            className="w-full h-full object-contain lg:rounded-[55px] rounded-[35px] "
            onContextMenu={(e) => e.preventDefault()} // disables right-click menu
        />

    );

    return order === 1 ? (
        <div className="flex items-center justify-between my-20 lg:flex-row flex-col">
            <div className="text-center px-4 my-20 lg:my-0">
                <p className="text-6xl font-bold ">{text}</p>
            </div>
            <div className="relative group max-w-sm sm:max-w-md rounded-[55px] lg:hover:scale-[1.03] hover:scale-[1.01] lg:hover:rotate-2 hover:-rotate-0 transition-all duration-500 p-14">
                <VideoElement />
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-between my-20 lg:flex-row flex-col-reverse">
            <div className="relative group max-w-sm sm:max-w-md rounded-[55px] lg:hover:scale-[1.03] hover:scale-[1.01] lg:hover:-rotate-2 hover:rotate-0 transition-all duration-500 p-14">
                <VideoElement />
            </div>
            <div className="text-center px-4 my-20 lg:my-0">
                <p className="text-6xl font-bold ">{text}</p>
            </div>
        </div>
    );
}

