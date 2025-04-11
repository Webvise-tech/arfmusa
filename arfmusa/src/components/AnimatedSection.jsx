import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className = '', delay = 0, yOffset = 50 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Recursively wrap children in motion divs
  const animateChildren = (child, index = 0, depth = 0) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // If child has its own children, recursively animate them
    const animatedGrandchildren = React.Children.map(
      child.props.children,
      (grandchild, grandchildIndex) => animateChildren(grandchild, grandchildIndex, depth + 1)
    );

    // Calculate delay based on index and depth
    const elementDelay = delay + (index * 0.1) + (depth * 0.05);

    // Wrap the current element in a motion.div
    return React.cloneElement(
      child,
      {
        ...child.props,
        key: `animated-element-${depth}-${index}`,
        as: motion.div,
        initial: { opacity: 0, y: 15 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
        transition: { 
          duration: 0.4,
          delay: elementDelay
        }
      },
      animatedGrandchildren || child.props.children
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {React.Children.map(children, (child, index) => animateChildren(child, index))}
    </motion.div>
  );
};

export default AnimatedSection; 