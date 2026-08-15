import { ChevronDown } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const HeroScrollIndicator = () => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest < 120);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 10,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        pointer-events-none
        absolute
        bottom-2
        left-1/2
        flex
        -translate-x-1/2
        flex-col
        items-center
        gap-2
      "
    >
      {/* Text */}

      <span
        className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.3em]
          text-zinc-500
        "
      >
        Explore Features
      </span>

      {/* Animated Arrow */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          text-cyan-400
          shadow-[0_0_20px_rgba(34,211,238,0.08)]
          backdrop-blur-sm
        "
      >
        <ChevronDown className="h-4 w-4" />
      </motion.div>

    </motion.div>
  );
};

export default HeroScrollIndicator;