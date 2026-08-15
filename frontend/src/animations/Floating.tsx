import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  duration?: number;
  y?: number;
  className?: string;
}

const Floating = ({
  children,
  duration = 4,
  y = 12,
  className = "",
}: FloatingProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -y, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Floating;