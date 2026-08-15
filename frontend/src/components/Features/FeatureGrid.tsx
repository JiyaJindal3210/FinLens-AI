import FeatureCard from "./FeatureCard";
import { features } from "./features";
import { Stagger } from "@/animations";

const FeatureGrid = () => {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <Stagger
          key={feature.title}
          delay={index * 0.1}
        >
          <FeatureCard {...feature} />
        </Stagger>
      ))}
    </div>
  );
};

export default FeatureGrid;