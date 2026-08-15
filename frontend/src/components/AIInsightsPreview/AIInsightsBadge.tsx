import { BrainCircuit } from "lucide-react";

const AIInsightsBadge = () => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-violet-400/20
        bg-violet-400/10
        px-4
        py-2
        text-sm
        font-medium
        text-violet-300
        backdrop-blur-xl
      "
    >
      <BrainCircuit className="h-4 w-4" />

      AI Financial Intelligence
    </div>
  );
};

export default AIInsightsBadge;