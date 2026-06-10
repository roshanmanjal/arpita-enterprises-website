/**
 * Animation Variant Definitions for Framer Motion
 * 
 * Defines normal and reduced motion variants for hero, scroll, and interaction animations.
 * Timing configurations follow performance requirements:
 * - Hero animations: ≤1500ms total
 * - Scroll animations: 400-600ms
 * - Hover interactions: ≤200ms
 * 
 * Requirements: 1.4, 1.5, 9.4
 */

/**
 * Hero Section Animation Variants
 * 
 * Orchestrated entrance animations for hero section elements with staggered timing.
 * Total animation duration: ≤1500ms
 * 
 * Requirement 1.4: Complete all entrance animations within 1500ms
 * Requirement 1.5: Use Framer Motion for hero section animations
 */
export const heroVariants = {
  normal: {
    heading: {
      hidden: { 
        opacity: 0, 
        scale: 0.9,
        y: 20
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: { 
          duration: 0.5,  // 500ms
          ease: "easeOut"
        }
      }
    },
    subheading: {
      hidden: { 
        opacity: 0, 
        y: 30
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6,  // 600ms
          delay: 0.3,     // Starts at 300ms
          ease: "easeOut"
        }
      }
    },
    cta: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        y: 20
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: { 
          duration: 0.6,  // 600ms
          delay: 0.6,     // Starts at 600ms, ends at 1200ms
          ease: [0.34, 1.56, 0.64, 1], // Bounce easing
          type: "spring",
          stiffness: 200,
          damping: 15
        }
      }
    }
  },
  reduced: {
    heading: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
      }
    },
    subheading: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2, delay: 0.1 }
      }
    },
    cta: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2, delay: 0.2 }
      }
    }
  }
};

/**
 * Scroll-Triggered Animation Variants
 * 
 * Professional fade-in and slide animations triggered when elements enter viewport.
 * Duration: 400-600ms
 * 
 * Requirement 2.1: Trigger animations when elements enter viewport
 * Requirement 2.2, 2.3, 2.4: Apply to product cards, text sections, and image galleries
 */
export const scrollAnimationVariants = {
  normal: {
    'fade-up': {
      hidden: { 
        opacity: 0, 
        y: 30 
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,  // 500ms
          ease: "easeOut"
        }
      }
    },
    'fade-in': {
      hidden: { 
        opacity: 0 
      },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.4  // 400ms
        }
      }
    },
    'slide-left': {
      hidden: { 
        opacity: 0, 
        x: 50 
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.5,  // 500ms
          ease: "easeOut"
        }
      }
    },
    'slide-right': {
      hidden: { 
        opacity: 0, 
        x: -50 
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.5,  // 500ms
          ease: "easeOut"
        }
      }
    },
    'slide-down': {
      hidden: { 
        opacity: 0, 
        y: -30 
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,  // 500ms
          ease: "easeOut"
        }
      }
    },
    'scale-up': {
      hidden: { 
        opacity: 0, 
        scale: 0.9 
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.5,  // 500ms
          ease: "easeOut"
        }
      }
    }
  },
  reduced: {
    'fade-up': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
      }
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
      }
    },
    'slide-left': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
      }
    },
    'slide-right': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
      }
    },
    'slide-down': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
      }
    },
    'scale-up': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
      }
    }
  }
};

/**
 * Interaction Animation Variants
 * 
 * Simple hover and focus state animations for interactive elements.
 * Duration: ≤200ms for immediate feedback
 * 
 * Note: These variants are primarily for reference. 
 * Most hover/focus interactions use CSS transitions for optimal performance (Requirement 8.3).
 */
export const interactionVariants = {
  normal: {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,  // 200ms
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1  // 100ms for immediate feedback
      }
    }
  },
  reduced: {
    hover: {
      scale: 1.0,  // No scale on reduced motion
      transition: {
        duration: 0.1
      }
    },
    tap: {
      scale: 1.0,  // No scale on reduced motion
      transition: {
        duration: 0.05
      }
    }
  }
};

/**
 * Stagger Configuration for Multiple Child Elements
 * 
 * Used when animating lists of items with sequential delays.
 */
export const staggerConfig = {
  normal: {
    staggerChildren: 0.1,  // 100ms delay between children
    delayChildren: 0.2     // 200ms initial delay before starting
  },
  reduced: {
    staggerChildren: 0.05,  // 50ms delay between children (faster)
    delayChildren: 0.1      // 100ms initial delay
  }
};

/**
 * Container Variants for Parent Elements
 * 
 * Used with staggerChildren to create orchestrated list animations.
 */
export const containerVariants = {
  normal: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ...staggerConfig.normal
      }
    }
  },
  reduced: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ...staggerConfig.reduced
      }
    }
  }
};

/**
 * Loading Transition Variants
 * 
 * For skeleton-to-content transitions.
 * Duration: ≤300ms (Requirement 10.3)
 */
export const loadingTransitionVariants = {
  normal: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3  // 300ms
      }
    }
  },
  reduced: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.15  // 150ms for reduced motion
      }
    }
  }
};

/**
 * Modal/Overlay Animation Variants
 * 
 * For modal dialogs, overlays, and popup content.
 */
export const modalVariants = {
  normal: {
    backdrop: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.3 }
      }
    },
    content: {
      hidden: {
        opacity: 0,
        scale: 0.95,
        y: 20
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    }
  },
  reduced: {
    backdrop: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.15 }
      }
    },
    content: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.15 }
      }
    }
  }
};

/**
 * Helper function to get appropriate variant set based on motion preference
 * 
 * @param {Object} variants - Variant object containing 'normal' and 'reduced' keys
 * @param {boolean} shouldReduceMotion - Whether to use reduced motion variants
 * @returns {Object} - The appropriate variant set
 * 
 * @example
 * const variants = getMotionVariants(scrollAnimationVariants, prefersReducedMotion());
 * <motion.div variants={variants['fade-up']} />
 */
export function getMotionVariants(variants, shouldReduceMotion = false) {
  return shouldReduceMotion ? variants.reduced : variants.normal;
}

/**
 * Helper function to get responsive animation duration
 * 
 * Adjusts duration based on viewport size (25% reduction for mobile)
 * Requirement 12.1: Reduce animation duration by 25% on mobile
 * 
 * @param {number} baseDuration - Base animation duration in seconds
 * @param {number} viewportWidth - Current viewport width in pixels
 * @param {number} mobileThreshold - Viewport width threshold for mobile (default: 768px)
 * @returns {number} - Adjusted duration in seconds
 * 
 * @example
 * const duration = getResponsiveAnimationDuration(0.5, window.innerWidth);
 * // Returns 0.375 on mobile (< 768px), 0.5 on desktop
 */
export function getResponsiveAnimationDuration(baseDuration, viewportWidth, mobileThreshold = 768) {
  const isMobile = viewportWidth < mobileThreshold;
  return isMobile ? baseDuration * 0.75 : baseDuration;
}

/**
 * Helper function to create custom scroll animation variant with responsive duration
 * 
 * @param {string} animationType - Type of animation ('fade-up', 'fade-in', etc.)
 * @param {boolean} shouldReduceMotion - Whether to use reduced motion
 * @param {number} viewportWidth - Current viewport width
 * @returns {Object} - Animation variant with adjusted timing
 * 
 * @example
 * const variant = getScrollVariant('fade-up', false, 375);
 * <motion.div variants={variant} initial="hidden" animate="visible" />
 */
export function getScrollVariant(animationType, shouldReduceMotion = false, viewportWidth = window.innerWidth) {
  const variantSet = getMotionVariants(scrollAnimationVariants, shouldReduceMotion);
  const variant = variantSet[animationType];
  
  if (!variant) {
    console.warn(`Unknown animation type: ${animationType}`);
    return variantSet['fade-in']; // Fallback to fade-in
  }
  
  // For normal motion, adjust duration based on viewport
  if (!shouldReduceMotion && variant.visible?.transition?.duration) {
    const adjustedVariant = {
      ...variant,
      visible: {
        ...variant.visible,
        transition: {
          ...variant.visible.transition,
          duration: getResponsiveAnimationDuration(
            variant.visible.transition.duration,
            viewportWidth
          )
        }
      }
    };
    return adjustedVariant;
  }
  
  return variant;
}

/**
 * Timing Configuration Constants
 * 
 * Centralized timing values for consistency across the application.
 */
export const animationTimings = {
  hero: {
    max: 1500,        // Maximum total duration for hero animations (ms)
    heading: 500,     // Duration for heading animation (ms)
    subheading: 600,  // Duration for subheading animation (ms)
    cta: 600          // Duration for CTA animation (ms)
  },
  scroll: {
    min: 400,         // Minimum duration for scroll animations (ms)
    max: 600,         // Maximum duration for scroll animations (ms)
    default: 500      // Default scroll animation duration (ms)
  },
  interaction: {
    max: 200,         // Maximum duration for hover/focus animations (ms)
    hover: 200,       // Duration for hover effects (ms)
    tap: 100          // Duration for tap/press effects (ms)
  },
  loading: {
    max: 300,         // Maximum duration for skeleton-to-content transition (ms)
    skeleton: 300     // Duration for loading transition (ms)
  }
};
