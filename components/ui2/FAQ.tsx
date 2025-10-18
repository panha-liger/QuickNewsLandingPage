import { Accordion } from "@/components/ui/accordion";

const items = [
  {
    value: "q1",
    trigger: "What is Quicknews and how does it work for users?",
    content:
      "Quicknews is an AI-verified short-form news platform, providing users with reliable, concise updates from trusted, vetted creators to ensure content quality and credibility.​",
  },
  {
    value: "q2",
    trigger: "Who verifies the news and how does the AI process work?",
    content:
      "All news is verified using advanced AI algorithms that scan multiple credible sources for accuracy. This process is followed by further review from moderators, ensuring every story is factual and trustworthy before publication.​",
  },
  {
    value: "q3",
    trigger: "How can I join the waitlist as a user or creator?",
    content:
      "Join by submitting your email on the Quicknews landing page. Users simply sign up, while creators must pass a vetting process to gain approval for posting content.​",
  },
  {
    value: "q4",
    trigger: "What makes Quicknews different from other news platforms?",
    content:
      "Quicknews stands out by restricting posting to only approved creators, providing AI-verification for every story, and delivering short, digestible news updates you can trust.​",
  },
  {
    value: "q5",
    trigger: "How are creators paid and what are the earnings compared to other platforms?",
    content:
      "Creators earn $1.20 for every 1,000 views their content receives. The first 40 approved early creators get $1.50 for every video they post daily. Only vetted, approved creators are allowed to publish, making earning opportunities exclusive and above typical rates on platforms like TikTok.​",
  },
  {
    value: "q6",
    trigger: "What types of news or stories are covered on Quicknews?",
    content:
      "Quicknews offers a range of topics—including current events, politics, technology, and entertainment—all curated for concise, verified reporting by approved creators.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Got Questions?
          </h2>
          <div className="h-0.5 w-3/4 mt-12 mx-auto bg-gray-200 rounded-full"></div>
        </div>

        <Accordion items={items} />
      </div>
    </section>
  );
}

