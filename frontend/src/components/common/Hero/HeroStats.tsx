import { Brain, ShieldCheck, TrendingUp } from "lucide-react";

const HeroStats = () => {
  const stats = [
    {
      icon: Brain,
      title: "AI Insights",
    },
    {
      icon: ShieldCheck,
      title: "Risk Detection",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
    },
  ];

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              flex items-center gap-3
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-3
              transition-all
              duration-300
              hover:bg-white/10
              hover:-translate-y-1
            "
          >
            <Icon className="h-5 w-5 text-cyan-400" />

            <span className="text-sm font-medium text-zinc-200">
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HeroStats;