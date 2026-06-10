/**
 * Animation Helper Utilities
 * 
 * Provides validation and helper functions for managing animations
 * throughout the application.
 * 
 * Requirements: 7.4, 11.3
 */

/**
 * Validates animation duration to ensure it falls within acceptable bounds
 * 
 * @param {number} duration - Animation duration in milliseconds
 * @returns {number} - Validated duration clamped between 100ms and 2000ms
 * 
 * @example
 * validateAnimationDuration(500)  // returns 500
 * validateAnimationDuration(50)   // returns 100 (clamped to minimum)
 * validateAnimationDuration(3000) // returns 2000 (clamped to maximum)
 */
export function validateAnimationDuration(duration) {
  const min = 100;
  const max = 2000;
  return Math.max(min, Math.min(max, duration));
}

/**
 * Validates threshold value for viewport intersection detection
 * 
 * @param {number} threshold - Threshold value (0 to 1, where 0 = any pixel visible, 1 = fully visible)
 * @returns {number} - Validated threshold clamped between 0 and 1
 * 
 * @example
 * validateThreshold(0.5)  // returns 0.5
 * validateThreshold(-0.2) // returns 0 (clamped to minimum)
 * validateThreshold(1.5)  // returns 1 (clamped to maximum)
 */
export function validateThreshold(threshold) {
  return Math.max(0, Math.min(1, threshold));
}

/**
 * Checks if an element is currently in the viewport
 * 
 * @param {HTMLElement} element - DOM element to check
 * @returns {boolean} - True if element is in viewport, false otherwise
 */
function isInViewport(element) {
  if (!element || !element.getBoundingClientRect) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
}

/**
 * Prioritizes animations based on viewport visibility
 * 
 * When more than 10 animations are active simultaneously, this function
 * prioritizes viewport animations and pauses offscreen animations.
 * 
 * Requirement 7.4: Animation performance optimization through prioritization
 * 
 * @param {Array<{element: HTMLElement, animation: Animation}>} animations - Array of animation objects
 * @returns {Array<{element: HTMLElement, animation: Animation}>} - Prioritized animations (viewport animations only if > 10)
 * 
 * @example
 * const animations = [
 *   { element: document.querySelector('.card1'), animation: anim1 },
 *   { element: document.querySelector('.card2'), animation: anim2 }
 * ];
 * const prioritized = prioritizeAnimations(animations);
 */
export function prioritizeAnimations(animations) {
  if (!Array.isArray(animations)) {
    console.warn('prioritizeAnimations: Expected array of animations, received:', typeof animations);
    return [];
  }

  // If 10 or fewer animations, no prioritization needed
  if (animations.length <= 10) {
    return animations;
  }

  // Separate viewport and offscreen animations
  const viewportAnimations = [];
  const offscreenAnimations = [];

  animations.forEach((animItem) => {
    if (!animItem || !animItem.element) {
      return; // Skip invalid items
    }

    if (isInViewport(animItem.element)) {
      viewportAnimations.push(animItem);
    } else {
      offscreenAnimations.push(animItem);
    }
  });

  // Pause offscreen animations if we have more than 10 total
  offscreenAnimations.forEach((animItem) => {
    if (animItem.animation && typeof animItem.animation.pause === 'function') {
      animItem.animation.pause();
    }
  });

  // Return only viewport animations when prioritization is active
  return viewportAnimations;
}

/**
 * Creates a requestAnimationFrame-based animation loop with cleanup
 * 
 * Requirement 11.3: Use requestAnimationFrame for custom JavaScript animations
 * 
 * @param {Function} callback - Function to call on each animation frame
 * @returns {Function} - Cleanup function to cancel the animation frame
 * 
 * @example
 * const cleanup = useAnimationFrame(() => {
 *   // Animation logic here
 *   console.log('Frame rendered');
 * });
 * 
 * // Later, when component unmounts or animation should stop:
 * cleanup();
 */
export function useAnimationFrame(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('useAnimationFrame: callback must be a function');
  }

  let frameId = null;
  let isActive = true;

  const animate = () => {
    if (!isActive) return;
    
    callback();
    frameId = requestAnimationFrame(animate);
  };

  // Start the animation loop
  frameId = requestAnimationFrame(animate);

  // Return cleanup function
  return () => {
    isActive = false;
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
  };
}

/**
 * Throttles animation updates to maintain 60fps (16ms intervals)
 * 
 * @param {Function} callback - Function to throttle
 * @param {number} delay - Minimum delay between calls in milliseconds (default: 16ms for 60fps)
 * @returns {Function} - Throttled function
 * 
 * @example
 * const handleScroll = throttleAnimation(() => {
 *   updateScrollPosition();
 * }, 16);
 * 
 * window.addEventListener('scroll', handleScroll);
 */
export function throttleAnimation(callback, delay = 16) {
  let lastCall = 0;
  let timeoutId = null;

  return function throttled(...args) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      callback.apply(this, args);
    } else {
      // Schedule the call for the next available slot
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        callback.apply(this, args);
      }, delay - timeSinceLastCall);
    }
  };
}

/**
 * Calculates adjusted animation duration for mobile devices
 * 
 * Requirement 12.1: Reduce animation duration by 25% on mobile
 * 
 * @param {number} baseDuration - Base animation duration in milliseconds
 * @param {number} viewportWidth - Current viewport width in pixels
 * @param {number} mobileThreshold - Viewport width threshold for mobile (default: 768px)
 * @returns {number} - Adjusted duration (25% shorter on mobile)
 * 
 * @example
 * getMobileDuration(600, 375)   // returns 450 (25% reduction for mobile)
 * getMobileDuration(600, 1024)  // returns 600 (no reduction for desktop)
 */
export function getMobileDuration(baseDuration, viewportWidth, mobileThreshold = 768) {
  const isMobile = viewportWidth < mobileThreshold;
  return isMobile ? baseDuration * 0.75 : baseDuration;
}

/**
 * Checks if device supports reduced motion preference
 * 
 * @returns {boolean} - True if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Gets appropriate animation duration based on user preferences and device
 * 
 * @param {number} normalDuration - Standard animation duration
 * @param {number} reducedDuration - Reduced motion duration
 * @param {number} viewportWidth - Current viewport width
 * @returns {number} - Adjusted duration based on preferences
 */
export function getResponsiveDuration(normalDuration, reducedDuration = 200, viewportWidth = window.innerWidth) {
  if (prefersReducedMotion()) {
    return reducedDuration;
  }

  return getMobileDuration(normalDuration, viewportWidth);
}
