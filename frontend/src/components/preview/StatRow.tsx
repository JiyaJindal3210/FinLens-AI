import type { LucideIcon } from "lucide-react";

interface StatRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
  iconColor?: string;
  valueColor?: string;
}

const StatRow = ({
  icon: Icon,
  label,
  value,
  iconColor = "text-cyan-400",
  valueColor = "text-white",
}: StatRowProps) => {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <Icon className={`h-4 w-4 ${iconColor}`} />

        <span className="text-sm text-zinc-400">
          {label}
        </span>

      </div>

      <span className={`text-sm font-semibold ${valueColor}`}>
        {value}
      </span>

    </div>
  );
};

export default StatRow;