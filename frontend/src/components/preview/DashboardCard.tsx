import {
    ArrowUpRight,
    CreditCard,
    ShoppingCart,
    Wallet,
} from "lucide-react";

import ActivityItem from "./ActivityItem";
import MiniChart from "./MiniChart";
import ProgressBar from "./ProgressBar";
import StatRow from "./StatRow";

const DashboardCard = () => {
    return (
        <div className="relative w-full max-w-[480px] overflow-hidden rounded-3xl border border-white/20 bg-white/[0.08] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-3xl">

            {/* Top Glow */}
            <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Right Glow */}
            <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* Subtle Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-cyan-400/[0.03]" />

            {/* Glass Reflection */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            {/* Dashboard Content */}
            <div className="relative">

                {/* Header */}

                <div className="mb-6 flex items-start justify-between">

                    <div>

                        <p className="text-sm font-medium tracking-wide text-zinc-400">
                            Financial Overview
                        </p>

                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                            Current Balance
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                            ₹24,560
                        </h2>

                        <p className="mt-2 flex items-center gap-1 text-sm font-medium text-emerald-400">
                            <ArrowUpRight className="h-4 w-4" />
                            12.8% vs last month
                        </p>

                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">

                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-xs font-medium text-emerald-300">
                            Live
                        </span>

                    </div>

                </div>

                {/* Chart */}
                <MiniChart />

                {/* AI Score */}
                <div className="mt-6 space-y-3">

                    <StatRow
                        icon={Wallet}
                        label="AI Financial Score"
                        value="92%"
                        valueColor="text-emerald-400"
                    />

                    <ProgressBar value={92} />

                </div>

                {/* Recent Activity */}
                <div className="mt-8 space-y-3">

                    <h3 className="text-sm font-semibold text-white">
                        Recent Activity
                    </h3>

                    <ActivityItem
                        icon={Wallet}
                        title="Salary Credited"
                        amount="+₹45,000"
                        iconColor="text-emerald-400"
                    />

                    <ActivityItem
                        icon={ShoppingCart}
                        title="Grocery Shopping"
                        amount="-₹2,180"
                    />

                    <ActivityItem
                        icon={CreditCard}
                        title="Netflix Subscription"
                        amount="-₹499"
                        iconColor="text-violet-400"
                    />

                </div>

            </div>

        </div>
    );
};

export default DashboardCard;