import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    title: "AI Chat",
    desc: "Ask questions about any video and get instant AI responses about the news.",
    image: "/images/products/Ai_Product_Articlefeature.png",
  },
  {
    title: "Fact Check",
    desc: "AI verifies claims, checks sources, and provides credibility scores.",
    image: "/images/products/Mac_Explorepage.png",
  },
  {
    title: "Creator Articles",
    desc: "Every video comes with a written article and verified sources from creators.",
    image: "/images/products/Mac_followyourfavcreator.png",
  },
];

// Mock data for AI verification demo
// const mockJson = {
//   id: "story_123",
//   ai: {
//     summary: "Policy expands broadband access in rural regions.",
//     risk: "Low",
//     sources: ["reuters.com", "whitehouse.gov"],
//     credibility: 0.86,
//   },
// };

export default function AIVerification() {
  return (
    <section id="ai" className="relative py-32 overflow-hidden bg-white">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100/50 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            AI-Powered Technology
          </div>
                  <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text mb-6 sm:mb-8 px-4">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Chat with AI
                    </span>
                    <br />
                    About Any Video
                  </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4">
            Ask AI questions about any news video. Get instant verification, 
            source checks, and credibility analysis in real-time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          {features.map((f, index) => (
            <div 
              key={f.title} 
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="relative h-full text-center border border-gray-200/40 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="relative z-10 pb-4 px-4 sm:px-6">
                  {/* Feature Image */}
                  <div className="relative w-full h-32 sm:h-40 lg:h-48 mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-inner">
                    <Image 
                      src={f.image} 
                      alt={f.title}
                      fill 
                      className="object-contain p-2 sm:p-4 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-text mb-3 sm:mb-4">{f.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {f.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-3xl mx-auto px-4">
          {[
            { number: "95%+", label: "Content Accuracy" },
            { number: "Instant", label: "AI Responses" },
            { number: "24/7", label: "AI Monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


