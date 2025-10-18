'use client';

import { useRef, useEffect, useState } from 'react';

interface ContentSectionProps {
    text: string | React.ReactNode;
    src: string;
    order: 1 | 2; // 1 = text left, media right | 2 = media left, text right
}

export default function ContentSection({ text, src, order }: ContentSectionProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [poster, setPoster] = useState<string>('');

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const generatePoster = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const posterUrl = canvas.toDataURL('image/jpeg', 0.8);
                    setPoster(posterUrl);
                }
            } catch (error) {
                console.error('Failed to generate poster:', error);
            }
        };

        video.addEventListener('loadeddata', generatePoster);
        return () => video.removeEventListener('loadeddata', generatePoster);
    }, [src]);

    const VideoElement = () => (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-contain rounded-[55px]"
        />
    );

    return order === 1 ? (
        <div className="flex items-center justify-between my-20 lg:flex-row flex-col">
            <div className="text-center px-4 my-20 lg:my-0">
                <p className="text-6xl font-bold ">{text}</p>
            </div>
            <div className="relative group max-w-sm sm:max-w-md rounded-[55px] hover:scale-[1.03] hover:rotate-2 transition-all duration-500 p-14">
                <VideoElement />
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-between my-20 lg:flex-row flex-col-reverse">
            <div className="relative group max-w-sm sm:max-w-md rounded-[55px] hover:scale-[1.03] hover:-rotate-2 transition-all duration-500 p-14">
                <VideoElement />
            </div>
            <div className="text-center px-4 my-20 lg:my-0">
                <p className="text-6xl font-bold ">{text}</p>
            </div>
        </div>
    );
}

