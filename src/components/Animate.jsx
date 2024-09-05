import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const animation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
};

const Animate = ({ children }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // 
        threshold: 0.1,    // 
    });

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={animation}
            initial="initial"
            animate={controls}
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default Animate;
