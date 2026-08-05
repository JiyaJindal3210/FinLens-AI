import { ShieldCheck, TrendingUp, Wallet } from "lucide-react";

const HeroDashboardPreview = () => {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-6
        shadow-2xl
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Spending Overview
        </h3>

        <div className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
          Live
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-5xl font-bold text-white">
          ₹24,560
        </h1>

        <p className="mt-2 text-sm text-green-400">
          ▲ +12.8% from last month
        </p>
      </div>

      <div className="mt-10 space-y-4">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            <span className="text-zinc-300">AI Risk Score</span>
          </div>

          <span className="font-semibold text-white">92%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-cyan-400" />
            <span className="text-zinc-300">Safe Transactions</span>
          </div>

          <span className="font-semibold text-white">128</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wallet className="h-5 w-5 text-cyan-400" />
            <span className="text-zinc-300">Budget Health</span>
          </div>

          <span className="font-semibold text-green-400">
            Excellent
          </span>
        </div>

      </div>
    </div>
  );
};

export default HeroDashboardPreview;