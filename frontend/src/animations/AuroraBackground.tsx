import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AuroraBackgroundProps {
    children: ReactNode;
}

const AuroraBackground = ({ children }: AuroraBackgroundProps) => {
    return (
        <div className="relative overflow-hidden">

            {/* Aurora Layer */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <motion.div
                    animate={{
                        x: [-80, 80, -80],
                        y: [-30, 30, -30],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
            absolute
            left-[38%]
            top-[8%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-500/8
            blur-[140px]
          "
                />

                <motion.div
                    animate={{
                        x: [60, -60, 60],
                        y: [20, -20, 20],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
            absolute
            right-[-18%]
            bottom-[-8%]
            h-[760px]
            w-[760px]
            rounded-full
            bg-blue-500/8
            blur-[150px]
          "
                />

                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
            absolute
            left-[62%]
            top-[42%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/5
            blur-[140px]
          "
                />

            </div>

            <div className="relative z-10">
                {children}
            </div>

        </div>
    );
};

export default AuroraBackground;