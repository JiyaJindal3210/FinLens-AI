import { Floating } from "@/animations";
import DashboardCard from "@/components/preview/DashboardCard";

const HeroDashboardPreview = () => {
  return (
    <div className="relative flex justify-center pt-6 lg:justify-end lg:pt-8">

      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          h-[280px]
            w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[999px]
          bg-cyan-500/10
          blur-[180px]
          opacity-30
        "
      />

      <Floating>
        <DashboardCard />
      </Floating>

    </div>
  );
};

export default HeroDashboardPreview;