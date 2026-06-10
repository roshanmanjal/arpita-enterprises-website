import { createContext, useContext, useEffect, useState } from 'react';

/**
 * AnimationContext provides device capabilities and user preferences
 * for controlling animation behavior across the application.
 * 
 * Features:
 * - Detects prefers-reduced-motion system preference (Req 9.3, 7.5)
 * - Monitors viewport size for responsive animations (Req 12.1)
 * - Detects touch devices for parallax disabling (Req 12.3)
 * - Dynamically updates when preferences change
 */

const AnimationContext = createContext(null);

/**
 * Detects if the device has touch capability
 * Used to disable parallax effects on touch devices
 */
const detectTouchDevice = () => {
  // Check for touch events support
  if ('ontouchstart' in window) return true;
  
  // Check for touch points
  if (navigator.maxTouchPoints > 0) return true;
  
  // Check for pointer media query (coarse = touch device)
  if (window.matchMedia('(pointer: coarse)').matches) return true;
  
  return false;
};

/**
 * Calculates adjusted animation duration for mobile devices
 * Mobile devices get 25% reduction in animation duration (Req 12.1)
 */
const calculateMobileDuration = (baseDuration, isMobile) => {
  return isMobile ? baseDuration * 0.75 : baseDuration;
};

export const AnimationProvider = ({ children }) => {
  // State for device capabilities and preferences
  const [config, setConfig] = useState(() => ({
    // User preference for reduced motion (Req 9.3)
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    
    // Viewport dimensions for responsive animations (Req 12.1)
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    
    // Mobile detection (viewport < 768px) (Req 12.1)
    isMobile: window.innerWidth < 768,
    
    // Touch device detection for parallax disabling (Req 12.3)
    isTouchDevice: detectTouchDevice(),
  }));

  // Listen for changes to reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (event) => {
      setConfig(prev => ({
        ...prev,
        prefersReducedMotion: event.matches,
      }));
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Listen for viewport size changes
  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      // Debounce resize events to avoid excessive updates
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        setConfig(prev => ({
          ...prev,
          viewportWidth: width,
          viewportHeight: height,
          isMobile: width < 768,
        }));
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Derived values and helper functions
  const contextValue = {
    // Raw configuration values
    ...config,
    
    // Helper: Should animations be simplified/disabled? (Req 7.5, 9.3)
    shouldReduceMotion: config.prefersReducedMotion,
    
    // Helper: Should parallax be disabled? (Req 12.3)
    disableParallax: config.isTouchDevice,
    
    // Helper: Calculate duration with mobile reduction (Req 12.1)
    getAnimationDuration: (baseDuration) => 
      calculateMobileDuration(baseDuration, config.isMobile),
    
    // Helper: Should use simplified mobile animations? (Req 12.1, 12.2)
    useSimplifiedAnimations: config.isMobile,
  };

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

/**
 * Hook to access animation configuration throughout the app
 * 
 * @returns {Object} Animation configuration
 * @property {boolean} prefersReducedMotion - User's reduced motion preference
 * @property {number} viewportWidth - Current viewport width in pixels
 * @property {number} viewportHeight - Current viewport height in pixels
 * @property {boolean} isMobile - Whether viewport width < 768px
 * @property {boolean} isTouchDevice - Whether device has touch capability
 * @property {boolean} shouldReduceMotion - Helper flag for reducing animations
 * @property {boolean} disableParallax - Helper flag for disabling parallax
 * @property {Function} getAnimationDuration - Calculate mobile-adjusted duration
 * @property {boolean} useSimplifiedAnimations - Helper flag for mobile simplification
 * 
 * @example
 * const { shouldReduceMotion, isMobile, getAnimationDuration } = useAnimationConfig();
 * 
 * const duration = getAnimationDuration(600); // 600ms on desktop, 450ms on mobile
 * 
 * const variants = shouldReduceMotion ? reducedVariants : normalVariants;
 */
export const useAnimationConfig = () => {
  const context = useContext(AnimationContext);
  
  if (!context) {
    throw new Error('useAnimationConfig must be used within an AnimationProvider');
  }
  
  return context;
};
