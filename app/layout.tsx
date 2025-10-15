import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuickNews - AI-Verified Short-Form News",
  description: "Get quick, AI-verified news from trusted creators. Earn 10X more than TikTok by sharing real news.",
  keywords: ["news", "AI", "verified", "creators", "short-form", "QuickNews"],
  authors: [{ name: "QuickNews Team" }],
  creator: "QuickNews",
  publisher: "QuickNews",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://quicknews.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QuickNews - AI-Verified Short-Form News",
    description: "Get quick, AI-verified news from trusted creators. Earn 10X more than TikTok by sharing real news.",
    url: "https://quicknews.tech",
    siteName: "QuickNews",
    images: [
      {
        url: "/images/logos/mainLogoHeader.png",
        width: 1200,
        height: 630,
        alt: "QuickNews Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickNews - AI-Verified Short-Form News",
    description: "Get quick, AI-verified news from trusted creators. Earn 10X more than TikTok by sharing real news.",
    images: ["/images/logos/mainLogoHeader.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512.png",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#3B82F6",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${newsreader.variable}`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
