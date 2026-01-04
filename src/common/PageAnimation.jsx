"use client";
import { motion } from "framer-motion";

const AnimationWrapper = ({
  children,
  initial = { opacity: 0, y: -10 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  className,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
