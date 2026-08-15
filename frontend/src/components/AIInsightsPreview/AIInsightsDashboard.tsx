import {
  ArrowUpRight,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import SpendingTrend from "./SpendingTrend";

const AIInsightsDashboard = () => {
  return (
    <div
      className="
        relative
        mt-16
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        shadow-[0_25px_100px_rgba(0,0,0,0.45)]
        backdrop-blur-3xl
        sm:p-8
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[120px]
        "
      />

      {/* Content */}

      <div className="relative">

        {/* Dashboard Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(139,92,246,0)",
                  "0 0 24px rgba(139,92,246,0.18)",
                  "0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-xl
    border
    border-violet-400/20
    bg-violet-400/10
    text-violet-300
  "
            >
              <BrainCircuit className="h-5 w-5" />
            </motion.div>



            <div>

              <p className="text-sm font-semibold text-white">
                AI Spending Analysis
              </p>

              <p className="text-xs text-zinc-500">
                Personalized financial intelligence
              </p>

            </div>

          </div>

          <div
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-3
              py-1.5
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">
              Live AI
            </span>
          </div>

        </div>

        {/* Main Insight Area */}

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Financial Score */}

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-6
            "
          >

            <p className="text-sm text-zinc-400">
              Financial Score
            </p>

            <div className="mt-5 flex items-end gap-3">

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-black tracking-tight text-white"
              >
                92
              </motion.span>

              <span className="mb-2 text-sm font-medium text-emerald-400">
                Excellent
              </span>

            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
    h-full
    rounded-full
    bg-gradient-to-r
    from-cyan-400
    to-emerald-400
  "
              />

            </div>

            <div className="mt-3 flex justify-between text-xs text-zinc-500">

              <span>Needs attention</span>

              <span>Excellent</span>

            </div>

          </div>

          {/* AI Insight */}

          <motion.div
            animate={{
              borderColor: [
                "rgba(34,211,238,0.10)",
                "rgba(34,211,238,0.20)",
                "rgba(34,211,238,0.10)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    relative
    overflow-hidden
    rounded-2xl
    border
    border-cyan-400/10
    bg-cyan-400/[0.035]
    p-6
  "
          >

            <div className="flex items-center justify-between gap-4">

              <div className="flex items-center gap-2 text-cyan-400">

                <Sparkles className="h-4 w-4" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  AI Insight
                </span>

              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Analyzed just now
              </span>

            </div>

            <h3 className="mt-4 text-xl font-semibold leading-8 text-white">
              Your dining expenses increased{" "}
              <span className="text-cyan-400">
                18%
              </span>{" "}
              this month.
            </h3>

            <div className="mt-4 flex items-center gap-2">

              <div className="flex items-center gap-1 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-2.5 py-1">

                <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />

                <span className="text-xs font-medium text-cyan-300">
                  +18% trend
                </span>

              </div>

              <span className="text-xs text-zinc-600">
                vs last month
              </span>

            </div>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Your spending pattern suggests a higher-than-usual
              concentration of expenses in dining and entertainment.
            </p>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="mt-5 flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-cyan-400"
            >
              <span>
                View spending breakdown
              </span>

              <ArrowUpRight className="h-4 w-4" />
            </motion.div>

          </motion.div>

        </div>

        {/* AI Recommendation */}

<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{
    duration: 0.6,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    mt-5
    rounded-2xl
    border
    border-violet-400/10
    bg-violet-400/[0.035]
    p-6
  "
>
  <div className="flex items-start gap-4">

    {/* Icon */}

    <div
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-violet-400/10
        text-violet-300
      "
    >
      <Sparkles className="h-5 w-5" />
    </div>

    {/* Content */}

    <div>

      {/* Header */}

      <div className="flex items-center gap-2">

        <p className="text-sm font-semibold text-white">
          AI Recommendation
        </p>

        <span
          className="
            rounded-full
            border
            border-violet-400/20
            bg-violet-400/10
            px-2
            py-0.5
            text-[10px]
            font-medium
            uppercase
            tracking-wider
            text-violet-300
          "
        >
          Personalized
        </span>

      </div>

      {/* Recommendation */}

      <p className="mt-2 text-sm leading-6 text-zinc-400">
        Consider reducing dining expenses by{" "}
        <span className="font-semibold text-violet-300">
          ₹1,200
        </span>{" "}
        this month to stay on track with your savings goal.
      </p>

      {/* Estimated Impact */}

      <div className="mt-4 flex items-center gap-2">

        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        <span className="text-xs font-medium text-emerald-400">
          Estimated monthly savings: ₹1,200
        </span>

      </div>

      {/* AI Reasoning Context */}

      <div className="mt-5 border-t border-white/5 pt-4">

        <p className="text-xs leading-5 text-zinc-500">
          Based on your recent dining transactions, monthly spending
          trend, and current savings goal.
        </p>

      </div>

    </div>

  </div>

</motion.div>

        {/* Spending Trend */}

        <SpendingTrend />

      </div>

    </div >
  );
};

export default AIInsightsDashboard;