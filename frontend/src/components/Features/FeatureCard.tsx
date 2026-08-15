import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div
      className={`
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/[0.04]
    p-8
    backdrop-blur-xl
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-cyan-400/30
    hover:bg-white/[0.06]
    hover:shadow-[0_25px_70px_rgba(34,211,238,0.18)]
  `}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-transparent to-cyan-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          relative
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-cyan-400/10
          text-cyan-400
          transition-all
          duration-500
          group-hover:bg-cyan-400/20
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-4 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Footer */}
      <div className="relative mt-8 flex items-center gap-2 font-medium text-cyan-400">
        <span>Learn More</span>

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </div>
  );
};

export default FeatureCard;