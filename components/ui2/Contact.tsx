import { Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
                        Let’s Get In Touch
                    </h2>
                    <div className="h-0.5 w-3/4 mt-12 mx-auto bg-gray-200 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-3xl gap-10 lg:gap-16 items-center justify-center mx-auto justify-items-center lg:justify-items-start">
                    <div className="w-full flex justify-center mx-auto">
                        <div className="relative rounded-full w-56 h-56 overflow-hidden bg-gray-100">
                            <img src="/images/sun.jpeg" alt="Quicknews contact placeholder" className="object-cover rounded-full w-full h-full" />
                        </div>
                    </div>

                    <div className="w-full mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="space-y-6 w-full max-w-md">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-semibold text-black">
                                    Sun Ratanak
                                </h3>
                                <p className="text-gray-600">Founder & CEO of Quicknews</p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="tel:+85592345272"
                                    className="group flex items-center gap-4 justify-center lg:justify-start"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800">
                                        {/* Phone icon */}
                                        <Phone className="h-5 w-5" />
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-lg text-black">+855 92 345 272</span>
                                    </div>
                                </a>

                                <a
                                    href="mailto:sunratanak@quicknews.tech"
                                    className="group flex items-center gap-4 justify-center lg:justify-start"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800">
                                        {/* Mail icon */}
                                        <Mail className="h-5 w-5" />
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-lg text-black">sunratanak@quicknews.tech</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

