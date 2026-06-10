import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useAnimationConfig } from "../../contexts/AnimationContext";
import { getScrollVariant } from "../../utils/animationVariants";
import { validateThreshold } from "../../utils/animationHelpers";

export default function ScrollAnimatedSection({
  as = "div",
  animation = "fade-up",
  threshold = 0.2,
  delay = 0,
  once = true,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  const { shouldReduceMotion, viewportWidth } = useAnimationConfig();
  const inView = useInView(ref, {
    once,
    amount: validateThreshold(threshold),
    margin: "0px 0px -80px 0px",
  });

  const MotionTag = motion[as] || motion.div;
  const variants = getScrollVariant(animation, shouldReduceMotion, viewportWidth);
  const visible = {
    ...variants.visible,
    transition: {
      ...(variants.visible.transition || {}),
      delay: shouldReduceMotion ? 0 : delay,
    },
  };

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: variants.hidden, visible }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
