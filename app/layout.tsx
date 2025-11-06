import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/ui2/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuickNews - AI-Verified Short-Form News",
  description:
    "Get quick, AI-verified news from trusted creators. Earn 10X more than TikTok by sharing real news.",
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
    description:
      "Get quick, AI-verified news from trusted creators. Earn 10X more than TikTok by sharing real news.",
    url: "https://quicknews.tech",
    siteName: "QuickNews",
    images: [
      {
        // ✅ absolute URL + version to bust cache
        url: "https://quicknews.tech/logo.png?v=3",
        width: 1200,
        height: 630,
        alt: "QuickNews Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickNews - AI-Verified Short-Form News",
    description:
      "Get quick, AI-verified news from trusted creators. Earn 10X more than TikTok by sharing real news.",
    // ✅ absolute URL + same cache version
    images: ["https://quicknews.tech/logo.png?v=3"],
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
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon.ico?v=3", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.ico?v=3", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon.ico?v=3",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon.ico?v=3",
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
      <head>
        <meta property="og:image" content="https://quicknews.tech/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable}`} suppressHydrationWarning>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
