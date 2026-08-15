interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
}

const ProgressBar = ({
  value,
  max = 100,
  color = "from-cyan-500 to-blue-500",
}: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;