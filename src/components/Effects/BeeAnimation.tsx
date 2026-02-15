import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

// Path configuration
// Ends at 0vw, 0vh to return to the hive (bottom right)
const PATH_CONFIG = {
    x: {
        input: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        output: ["0vw", "-20vw", "-80vw", "-40vw", "-90vw", "-20vw", "0vw"]
    },
    y: {
        input: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        output: ["0vh", "-30vh", "-10vh", "-60vh", "-40vh", "-20vh", "0vh"]
    },
    rotate: {
        input: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        output: [0, -25, 10, -20, 15, -10, 0]
    }
};

const BeeAnimation: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Main Bee Transforms
    const x = useTransform(smoothProgress, PATH_CONFIG.x.input, PATH_CONFIG.x.output);
    const y = useTransform(smoothProgress, PATH_CONFIG.y.input, PATH_CONFIG.y.output);
    const rotate = useTransform(smoothProgress, PATH_CONFIG.rotate.input, PATH_CONFIG.rotate.output);

    const breathingScale = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        [1, 1.3, 1]
    );

    // Direction Logic
    const [scaleX, setScaleX] = useState(1);
    const lastXRef = useRef(0);

    useMotionValueEvent(x, "change", (latest) => {
        if (typeof latest === 'string') {
            const currentX = parseFloat(latest);
            const diff = currentX - lastXRef.current;

            // Threshold to prevent jitter
            if (Math.abs(diff) > 0.1) {
                // Bee emoji faces LEFT by default.
                // diff > 0 (moving right) -> flip (-1)
                // diff < 0 (moving left) -> normal (1)
                const newScaleX = diff > 0 ? -1 : 1;
                if (scaleX !== newScaleX) {
                    setScaleX(newScaleX);
                }
            }
            lastXRef.current = currentX;
        }
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999,
                pointerEvents: 'none',
                x,
                y,
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.15))'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                opacity: { duration: 0.8 },
                scale: { type: "spring", bounce: 0.5 }
            }}
        >
            {/* Inner Wrapper for Transforms that might conflict (Scale/Rotate/Flip) */}
            <motion.div
                style={{
                    fontSize: '45px',
                    rotate,
                    scale: breathingScale,
                    scaleX
                }}
            >
                🐝
            </motion.div>
        </motion.div>
    );
};

export default BeeAnimation;
