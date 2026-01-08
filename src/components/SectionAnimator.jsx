import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionAnimator = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionAnimator;