import { Link } from "react-router-dom";
import { company } from "../../data/company";
import LazyImage from "./LazyImage";

export default function ProductCard({ product }) {
  const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hi, I am interested in stocking ${product.name} (${product.brand}, ${product.weight}). Please share availability and trade pricing.`
  )}`;

  const badge = product.tags?.includes("bestseller")
    ? "Best Seller"
    : product.tags?.includes("popular")
    ? "Popular"
    : product.tags?.includes("new")
    ? "New"
    : null;

  return (
    <article
      className="animated-card group relative flex h-full flex-col overflow-visible rounded-[24px] border border-sky-200 bg-white shadow-card-md hover:border-sky-400 hover:shadow-[0_18px_40px_rgba(14,165,233,0.18)] transition-all duration-300"
      style={{ transformOrigin: "center center" }}
    >
      <div className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 rounded-t-[24px] bg-gradient-to-r from-sky-400 to-blue-500 transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100" />

      <Link to={`/products/${product.id}`} className="block overflow-hidden rounded-t-[24px] bg-sky-50 p-5 border-b border-sky-100">
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-white p-2 border border-sky-100">
          {badge && (
            <span className="absolute left-2.5 top-2.5 z-10 inline-flex items-center rounded-full bg-sky-500/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-sm">
              {badge}
            </span>
          )}
          <LazyImage
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-focus-within:scale-110"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/400x400/e0f2fe/0369a1?text=${encodeURIComponent(product.name)}`;
            }}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3.5 p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Link
              to={`/products?brand=${product.brand}`}
              className="rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-sky-700 hover:bg-sky-200 transition-colors"
            >
              {product.brand}
            </Link>
            <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
              {product.weight}
            </span>
          </div>

          <Link to={`/products/${product.id}`} className="block">
            <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700 group-focus-within:text-sky-700">
              {product.name}
            </h3>
          </Link>

          <Link
            to={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-[10px] uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-sky-700"
          >
            {product.category}
          </Link>

          {product.packInfo && (
            <p className="text-xs leading-5 text-slate-600">{product.packInfo}</p>
          )}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-sky-50 px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-800 transition-all hover:border-sky-400 hover:bg-sky-100"
          >
            Details
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-3 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:shadow-[0_0_12px_rgba(14,165,233,0.35)] hover:from-sky-500 hover:to-blue-600"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
