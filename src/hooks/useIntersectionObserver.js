/**
 * useIntersectionObserver
 * Adds "visible" class to element when it enters the viewport.
 * Works with .reveal and .reveal-stagger CSS classes in index.css
 */
import { useEffect, useRef } from "react";

export default function useIntersectionObserver(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // fire once
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
