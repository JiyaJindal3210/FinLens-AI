import { Sparkles } from "lucide-react";

const FeatureBadge = () => {
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
      "
    >
      <Sparkles className="h-4 w-4" />

      Powerful Features
    </div>
  );
};

export default FeatureBadge;