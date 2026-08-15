import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";

const data = [
    { month: "Jan", amount: 12000 },
    { month: "Feb", amount: 18500 },
    { month: "Mar", amount: 14800 },
    { month: "Apr", amount: 22100 },
    { month: "May", amount: 19500 },
    { month: "Jun", amount: 24560 },
];

const MiniChart = () => {
    return (
        <div className="mt-6 h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.45} />
                            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#1f2937"
                        strokeOpacity={0.35}
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        tick={{
                            fill: "#71717a",
                            fontSize: 11,
                        }}
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip
                        cursor={{
                            stroke: "#22d3ee",
                            strokeOpacity: 0.2,
                            strokeDasharray: "4 4",
                        }}
                        formatter={(value) => [
                            `₹${Number(value).toLocaleString("en-IN")}`,
                            "Spending",
                        ]}
                        labelFormatter={(label) => `${label} 2025`}
                        contentStyle={{
                            background: "rgba(24,24,27,0.85)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "16px",
                            color: "#fff",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                        }}
                        itemStyle={{
                            color: "#22d3ee",
                            fontWeight: 600,
                        }}
                        labelStyle={{
                            color: "#a1a1aa",
                            marginBottom: "6px",
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#22d3ee"
                        strokeWidth={3}
                        fill="url(#expenseGradient)"
                        isAnimationActive
                        animationDuration={1500}
                        animationEasing="ease-out"
                        dot={(props: any) => {
                            const { cx, cy, index } = props;

                            if (index !== data.length - 1) return null;

                            return (
                                <>
                                    {/* Outer Glow */}
                                    <circle
                                        cx={cx}
                                        cy={cy}
                                        r={10}
                                        fill="#22d3ee"
                                        opacity={0.18}
                                    />

                                    {/* Main Dot */}
                                    <circle
                                        cx={cx}
                                        cy={cy}
                                        r={4.5}
                                        fill="#22d3ee"
                                        stroke="#ffffff"
                                        strokeWidth={2}
                                    />
                                </>
                            );
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MiniChart;