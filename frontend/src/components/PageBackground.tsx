import type { ReactNode } from "react";

interface PageBackgroundProps {
  children: ReactNode;
}

const PageBackground = ({ children }: PageBackgroundProps) => {
  return (
    <div className="relative overflow-hidden">

      {/* Continuous Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.018]
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default PageBackground;