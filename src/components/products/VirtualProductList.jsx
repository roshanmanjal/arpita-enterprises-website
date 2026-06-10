import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "../ui/ProductCard";

const CARD_HEIGHT = 360;
const GAP = 20;
const BUFFER_ROWS = 5;

function getColumnCount() {
  const width = window.innerWidth;
  if (width >= 1024) return 4;
  if (width >= 640) return 3;
  return 2;
}

export default function VirtualProductList({ products }) {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const [columns, setColumns] = useState(() => getColumnCount());
  const [range, setRange] = useState({ start: 0, end: Math.min(products.length, columns * 4) });
  const rowHeight = CARD_HEIGHT + GAP;
  const rowCount = Math.ceil(products.length / columns);

  const updateRange = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const topOffset = Math.max(0, -rect.top);
    const visibleRows = Math.ceil(viewportHeight / rowHeight) + 2;
    const startRow = Math.max(0, Math.floor(topOffset / rowHeight) - BUFFER_ROWS);
    const endRow = Math.min(rowCount, startRow + visibleRows + BUFFER_ROWS * 2);

    setRange({
      start: startRow * columns,
      end: Math.min(products.length, endRow * columns),
    });
  };

  useEffect(() => {
    const scheduleUpdate = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        const nextColumns = getColumnCount();
        setColumns(nextColumns);
        updateRange();
      });
    };

    updateRange();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [products.length, columns, rowCount]);

  const visibleProducts = useMemo(
    () => products.slice(range.start, range.end),
    [products, range.start, range.end]
  );

  const startRow = Math.floor(range.start / columns);
  const topPadding = startRow * rowHeight;
  const totalHeight = rowCount * rowHeight;

  return (
    <div ref={containerRef} style={{ height: totalHeight }} className="relative">
      <div
        className="absolute inset-x-0 top-0 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5"
        style={{ transform: `translate3d(0, ${topPadding}px, 0)` }}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}