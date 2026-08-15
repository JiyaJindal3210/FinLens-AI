import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      {/* Primary CTA */}

      <Button
        size="lg"
        className="
          h-14
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          via-blue-600
          to-violet-600
          px-8
          text-base
          font-semibold
          text-white
          shadow-lg
          shadow-cyan-500/20
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-cyan-500/40
        "
      >
        Start Free Analysis
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      {/* Secondary CTA */}

      <Button
        variant="outline"
        size="lg"
        className="
          h-14
          rounded-full
          border-white/20
          bg-white/5
          px-8
          text-base
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:bg-white/10
          hover:text-white
        "
      >
        <Play className="mr-2 h-4 w-4 fill-current" />
        Explore Dashboard
      </Button>

    </div>
  );
};

export default HeroButtons;