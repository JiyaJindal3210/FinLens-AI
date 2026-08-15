import type { LucideIcon } from "lucide-react";

interface ActivityItemProps {
  icon: LucideIcon;
  title: string;
  amount: string;
  iconColor?: string;
}

const ActivityItem = ({
  icon: Icon,
  title,
  amount,
  iconColor = "text-cyan-400",
}: ActivityItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3 transition-colors duration-300 hover:bg-white/10">

      <div className="flex items-center gap-3">

        <div className="rounded-lg bg-zinc-900 p-2">
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>

        <span className="text-sm font-medium text-zinc-300">
          {title}
        </span>

      </div>

      <span className="text-sm font-semibold text-white">
        {amount}
      </span>

    </div>
  );
};

export default ActivityItem;