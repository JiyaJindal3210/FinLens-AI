import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  delay?: number;
}

const Stagger = ({
  children,
  delay = 0,
}: StaggerProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Stagger;