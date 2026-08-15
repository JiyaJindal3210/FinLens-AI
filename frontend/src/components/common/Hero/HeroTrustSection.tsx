import { ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const HeroTrustSection = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
        <ShieldCheck className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-medium text-zinc-300">
          Bank-Level Security
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-medium text-zinc-300">
          AI-Powered Insights
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
        <TrendingUp className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-medium text-zinc-300">
          Real-Time Analytics
        </span>
      </div>

    </div>
  );
};

export default HeroTrustSection;