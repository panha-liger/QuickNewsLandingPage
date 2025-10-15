import { NextSeoProps } from "next-seo";

export const defaultSEO: NextSeoProps = {
  title: "QuickNews — Short, Verified, Creator-Paid News",
  description:
    "Real news by verified creators. AI summaries, source transparency, credibility meters.",
  openGraph: {
    type: "website",
    title: "QuickNews — Short, Verified, Creator-Paid News",
    description:
      "Real news by verified creators. AI summaries, source transparency, credibility meters.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "QuickNews",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};


