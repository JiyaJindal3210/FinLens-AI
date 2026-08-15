import { Reveal } from "@/animations";

import FeatureBadge from "./FeatureBadge";
import FeatureHeading from "./FeatureHeading";
import FeatureGrid from "./FeatureGrid";
import FeatureBackground from "./FeatureBackground";

const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Features Background */}
      <FeatureBackground />

      {/* Top Transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-black/30" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <FeatureBadge />
            <FeatureHeading />
          </div>
        </Reveal>

        {/* Feature Cards */}
        <Reveal delay={0.25}>
          <FeatureGrid />
        </Reveal>

      </div>

    </section>
  );
};

export default FeatureSection;