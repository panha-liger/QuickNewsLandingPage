import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  { name: "Early Creator", rpm: "$1", features: ["Daily post requirement", "Basic analytics", "Community access"] },
  { name: "Hired Creator", rpm: "$1.2/1000 views", features: ["Passed our test", "Priority placement", "Advanced analytics"] },
];

export default function CreatorEconomy() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-blue-50/30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/50 text-green-700 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Creator Program
          </div>
          <h2 className="font-newsreader text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Create News
            </span>
            <br />
            Videos & Earn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-text">Earn 10X more than TikTok!</strong> Share real news videos with 
            written articles and verified sources. Perfect for GenZ creators.
          </p>
        </div>
        
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((t, index) => (
            <div 
              key={t.name} 
              className={`group relative ${t.name === "Hired Creator" ? "md:-mt-8" : ""}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {t.name === "Hired Creator" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <Card className={`relative h-full text-center border-0 bg-white/90 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                t.name === "Hired Creator" 
                  ? "ring-2 ring-green-200/50 bg-gradient-to-br from-green-50/50 to-blue-50/50" 
                  : "group-hover:rotate-1"
              }`}>
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  t.name === "Hired Creator" 
                    ? "bg-gradient-to-br from-green-50/50 to-blue-50/50" 
                    : "bg-gradient-to-br from-purple-50/50 to-pink-50/50"
                }`}></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg ${
                    t.name === "Hired Creator" 
                      ? "bg-gradient-to-br from-green-500 to-blue-600" 
                      : "bg-gradient-to-br from-purple-500 to-pink-600"
                  }`}>
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-text mb-2">{t.name}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    {t.rpm} RPM
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 text-muted-foreground mb-8">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text">Real-time payouts</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text">Transparent metrics</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text">AI verification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


