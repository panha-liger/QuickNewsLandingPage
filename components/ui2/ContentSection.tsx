interface ContentSectionProps {
    text: string | React.ReactNode;
    src: string;
    order: 1 | 2; // 1 = text left, media right | 2 = media left, text right
}

export default function ContentSection({ text, src, order }: ContentSectionProps) {
    return (
        order === 1 ? (
            <div className="flex items-center justify-between my-20 lg:flex-row flex-col">
                <div className="text-center px-4 my-20 lg:my-0">
                    <p className="text-6xl font-bold ">{text}</p>
                </div>
                <div className="relative group max-w-sm sm:max-w-md  rounded-[55px] hover:scale-[1.03] hover:rotate-2  transition-all duration-500 p-14">
                    <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain rounded-[55px]"
                    />
                </div>
            </div>
        ) : (
            <div className="flex items-center justify-between my-20 lg:flex-row flex-col-reverse">
                <div className="relative group max-w-sm sm:max-w-md  rounded-[55px] hover:scale-[1.03] hover:-rotate-2  transition-all duration-500 p-14">
                    <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain rounded-[55px]"
                    />
                </div>
                <div className="text-center px-4 my-20 lg:my-0">
                    <p className="text-6xl font-bold ">{text}</p>
                </div>
            </div>
        )
    );
};

