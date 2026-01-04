import { motion, AnimatePresence } from "framer-motion";

const AnimationWrapper = ({
  children,
  initial = { opacity: 0, y: -8 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.3 },
  className,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;