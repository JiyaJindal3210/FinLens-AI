import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  { month: "Jan", amount: 14200 },
  { month: "Feb", amount: 15800 },
  { month: "Mar", amount: 15100 },
  { month: "Apr", amount: 17600 },
  { month: "May", amount: 18900 },
  { month: "Jun", amount: 22300 },
];

const SpendingTrend = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: 0.15,
      }}
      className="
        mt-5
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-6
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-white">
            Spending Trend
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            Monthly spending pattern
          </p>
        </div>

        <span className="text-sm font-medium text-cyan-400">
          +18%
        </span>

      </div>

      {/* Chart */}

      <div className="mt-5 h-40 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 4,
              left: 4,
              bottom: 8,
            }}
          >

            <defs>

              <linearGradient
                id="aiSpendingGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#22d3ee"
                  stopOpacity={0.25}
                />

                <stop
                  offset="95%"
                  stopColor="#22d3ee"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <XAxis
              dataKey="month"
              interval={0}
              padding={{
                    left: 14,
                    right: 14,
              }}
              tick={{
                fill: "#a1a1aa",
                fontSize: 12,
                fontWeight: 500,
              }}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                background: "#18181b",
                border: "1px solid #3f3f46",
                borderRadius: "10px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#22d3ee"
              strokeWidth={2}
              fill="url(#aiSpendingGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
};

export default SpendingTrend;