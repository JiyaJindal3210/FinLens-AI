import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroButtons = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start gap-4 pt-3">

            {/* Primary Button */}
            <Button
                size="lg"
                className="
          group
          rounded-full
          px-7
          h-12
          bg-gradient-to-r
          from-cyan-500
          via-blue-500
          to-violet-500
          text-white
          shadow-lg
          shadow-cyan-500/20
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-cyan-500/40
        "
            >
                Get Started

                <ArrowRight
                    className="
            ml-2
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                />
            </Button>

            {/* Secondary Button */}
            <Button
                variant="outline"
                size="lg"
                className="
    rounded-full
    px-7
    h-12
    border-white/20
    bg-white/5
    text-white
    backdrop-blur-xl
    hover:bg-white/10
    hover:text-white
  "
            >
                <Play className="mr-2 h-4 w-4" />

                Watch Demo
            </Button>

        </div>
    );
};

export default HeroButtons;