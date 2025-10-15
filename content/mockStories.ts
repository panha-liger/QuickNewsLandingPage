export type Story = {
  id: string;
  headline: string;
  creator: { name: string; verified: boolean; avatar: string };
  thumb: string;
  durationSec: number;
  ai: { summary: string; risk: "Low" | "Review"; sources: string[] };
  tags: string[];
  publishedAt: string;
};

export const mockStories: Story[] = [
  {
    id: "1",
    headline: "NASA unveils reusable lunar lander timeline",
    creator: { name: "Ava Chen", verified: true, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-1.jpg",
    durationSec: 58,
    ai: {
      summary: "NASA outlined a 2028 target for reusable landers supporting Artemis.",
      risk: "Low",
      sources: ["nasa.gov", "reuters.com"],
    },
    tags: ["Science", "Breaking"],
    publishedAt: new Date().toISOString(),
  },
  {
    id: "2",
    headline: "Chipmaker hits 2nm mass production milestone",
    creator: { name: "Jamal Reyes", verified: true, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-2.jpg",
    durationSec: 41,
    ai: {
      summary: "2nm process moves to mass production, lifting performance and efficiency.",
      risk: "Low",
      sources: ["bloomberg.com", "company.com/blog"],
    },
    tags: ["Tech"],
    publishedAt: new Date().toISOString(),
  },
  {
    id: "3",
    headline: "Premier League approves semi-auto offside tech",
    creator: { name: "Mina Okafor", verified: false, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-3.jpg",
    durationSec: 36,
    ai: {
      summary: "Semi-automated offsides set for next season after tests.",
      risk: "Review",
      sources: ["theathletic.com"],
    },
    tags: ["Sports"],
    publishedAt: new Date().toISOString(),
  },
  {
    id: "4",
    headline: "Box office rebounds with surprise indie hit",
    creator: { name: "Samara Lee", verified: true, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-4.jpg",
    durationSec: 47,
    ai: {
      summary: "Indie feature tops charts on word-of-mouth and social buzz.",
      risk: "Low",
      sources: ["variety.com", "boxofficemojo.com"],
    },
    tags: ["Entertainment"],
    publishedAt: new Date().toISOString(),
  },
  {
    id: "5",
    headline: "New heart drug halves readmission risk",
    creator: { name: "Dr. Elena Park", verified: true, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-1.jpg",
    durationSec: 52,
    ai: {
      summary: "Phase III trial shows lower readmissions; FDA submission this quarter.",
      risk: "Low",
      sources: ["nejm.org"],
    },
    tags: ["Health"],
    publishedAt: new Date().toISOString(),
  },
  {
    id: "6",
    headline: "Scientists map microplastic flows across oceans",
    creator: { name: "Ocean Lab", verified: false, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-2.jpg",
    durationSec: 39,
    ai: {
      summary: "Global model pinpoints hotspots, aiding cleanup planning.",
      risk: "Review",
      sources: ["nature.com"],
    },
    tags: ["Science"],
    publishedAt: new Date().toISOString(),
  },
  {
    id: "7",
    headline: "Jobs report beats expectations; markets rally",
    creator: { name: "MarketPulse", verified: true, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-3.jpg",
    durationSec: 44,
    ai: {
      summary: "Payrolls rise while wage growth cools, easing inflation fears.",
      risk: "Low",
      sources: ["bls.gov", "wsj.com"],
    },
    tags: ["Business"],
    publishedAt: new Date().toISOString(),
  },
  {
    id: "8",
    headline: "Quantum startup shows error-corrected demo",
    creator: { name: "QBits Daily", verified: false, avatar: "/logos/vercel.svg" },
    thumb: "/products/feed-card-4.jpg",
    durationSec: 33,
    ai: {
      summary: "Prototype maintains logical qubit fidelity over minutes.",
      risk: "Review",
      sources: ["arxiv.org"],
    },
    tags: ["Science", "Tech"],
    publishedAt: new Date().toISOString(),
  },
];


