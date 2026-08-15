import { Reveal } from "@/animations";

import AIInsightsBadge from "./AIInsightsBadge";
import AIInsightsHeading from "./AIInsightsHeading";
import AIInsightsDashboard from "./AIInsightsDashboard";

const AIInsightsSection = () => {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-32
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/5
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <Reveal>
          <div className="flex flex-col items-center">

            <AIInsightsBadge />

            <AIInsightsHeading />

          </div>
        </Reveal>

        {/* Dashboard */}

        <Reveal delay={0.25}>
          <AIInsightsDashboard />
        </Reveal>

      </div>

    </section>
  );
};

export default AIInsightsSection;