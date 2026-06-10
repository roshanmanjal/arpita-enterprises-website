import { useEffect, useRef, useState } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  placeholderClassName = "",
  eager = false,
  onError,
  ...props
}) {
  const imgRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    if (eager || shouldLoad) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [eager, shouldLoad]);

  const handleError = (event) => {
    if (onError) {
      onError(event);
      setCurrentSrc(event.currentTarget.src);
      return;
    }

    setCurrentSrc(
      `https://placehold.co/400x400/e0f2fe/0ea5e9?text=${encodeURIComponent(alt || "Product")}`
    );
  };

  return (
    <div ref={imgRef} className={`relative h-full w-full ${placeholderClassName}`}>
      {!loaded && <div className="absolute inset-0 rounded-inherit bg-sky-100/80 skeleton-shimmer" />}
      {shouldLoad && (
        <img
          src={currentSrc}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
}
