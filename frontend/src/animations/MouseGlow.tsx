import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useState } from "react";

interface MouseGlowProps {
    children: ReactNode;
}



const MouseGlow = ({ children }: MouseGlowProps) => {
    const [visible, setVisible] = useState(false);
    const mouseX = useMotionValue(-300);
    const mouseY = useMotionValue(-300);

    const x = useSpring(mouseX, {
        stiffness: 120,
        damping: 30,
    });

    const y = useSpring(mouseY, {
        stiffness: 120,
        damping: 30,
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden"
        >
            <motion.div
                animate={{
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                style={{
                    x,
                    y,
                }}
                className="
    pointer-events-none
    absolute
    h-[450px]
    w-[450px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-cyan-400/[0.06]
    blur-[120px]
  "
            />

            {children}
        </div>
    );
};

export default MouseGlow;