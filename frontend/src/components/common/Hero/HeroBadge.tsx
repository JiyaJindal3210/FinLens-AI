import { Sparkles } from "lucide-react";

const HeroBadge = () => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:border-cyan-400/40
      "
    >
      <Sparkles className="h-4 w-4" />

      AI Powered Personal Finance
    </div>
  );
};

export default HeroBadge;