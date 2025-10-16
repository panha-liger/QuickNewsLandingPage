import { Accordion } from "@/components/ui/accordion";

const items = [
  { 
    value: "q1", 
    trigger: "How much can creators earn?", 
    content: "Creators earn $1.20 per 1,000 views." 
  },
  { 
    value: "q2", 
    trigger: "How does AI chat work?", 
    content: "Ask AI questions about any news video! Our AI analyzes the content, checks sources, and provides instant verification. You can chat with AI about any video to get credibility scores and fact-checking in real-time." 
  },
  { 
    value: "q3", 
    trigger: "What makes QuickNews different?", 
    content: "We're the first news platform focused on serving Gen Zs, and our content creators are curated to guarantee you see content you can trust—and content you love." 
  },
  { 
    value: "q4", 
    trigger: "Who can become a creator?", 
    content: "We believe anyone with digital literacy and media literacy can be an awesome creator." 
  },
  { 
    value: "q5", 
    trigger: "How do I get early access?", 
    content: "Join our waitlist! We're launching soon and early users get priority access. Creators on the waitlist will be the first to start earning when we launch." 
  },
  { 
    value: "q6", 
    trigger: "Is the news really verified?", 
    content: "Yes! Our AI fact-checks every video, analyzes sources, and provides credibility scores. We also require creators to provide written articles with sources for every news video they post." 
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Frequently Asked Questions
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            Got Questions?
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about QuickNews, creator earnings, and AI verification.
          </p>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl border border-gray-200/40 bg-white/90 backdrop-blur-xl shadow-xl overflow-hidden">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}


