import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        url: "/images/logos/Quick-News-Logo_FA-1.png",
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
    images: ["/images/logos/Quick-News-Logo_FA-1.png"],
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
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.png?v=2", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-192.png?v=2",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512.png?v=2",
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
      <body className={`${poppins.variable}`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
