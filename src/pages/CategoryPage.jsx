import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { categoryMeta, getProductsByCategory, analytics } from "../data/products";
import { company } from "../data/company";
import ProductCard from "../components/ui/ProductCard";
import RetailerCTA from "../components/ui/RetailerCTA";
import ScrollAnimatedSection from "../components/ui/ScrollAnimatedSection";

export default function CategoryPage() {
  const { slug } = useParams();

  const catName = Object.keys(categoryMeta).find(
    (k) => categoryMeta[k].slug === slug
  );
  const meta = catName ? categoryMeta[catName] : null;
  const catProducts = catName ? getProductsByCategory(slug) : [];

  useEffect(() => {
    if (catName) analytics.trackCategoryView(catName);
  }, [catName]);

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">
        <div>
          <p className="text-5xl mb-4">ðŸ“¦</p>
          <h2 className="text-slate-900 font-bold text-xl">Category not found</h2>
          <Link to="/products" className="mt-4 inline-block text-sky-700 text-sm hover:underline hover:text-sky-300">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  // Group by brand within category
  const brands = [...new Set(catProducts.map((p) => p.brand))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">

      {/* Category Banner */}
      <div className="bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 py-16 relative overflow-hidden border-b border-sky-200">
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(rgba(14,165,233,0.45) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 flex-wrap">
            <Link to="/" className="hover:text-sky-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-sky-700 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-slate-800">{catName}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-black text-sky-700 border border-sky-200 shadow-sm">
                  {catName.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {catName}
                  </h1>
                  <p className="text-slate-600 text-sm mt-1">{meta.desc}</p>
                </div>
              </div>
              <p className="text-slate-700 text-base leading-relaxed max-w-2xl mt-4">
                {meta.longDesc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-white border border-sky-200 text-sky-800 px-3.5 py-1.5 rounded-full font-medium">
                  {catProducts.length} Products
                </span>
                {brands.map((b) => (
                  <Link
                    key={b}
                    to={`/products?brand=${b}`}
                    className="text-xs bg-white border border-sky-200 text-sky-800 px-3.5 py-1.5 rounded-full font-medium hover:bg-sky-50 hover:border-sky-400 transition-all"
                  >
                    {b}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  `Hi, I'm interested in ${catName} products. Please share trade pricing and availability.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-500 transition-all shadow-[0_0_15px_rgba(22,163,74,0.2)] hover:shadow-[0_0_20px_rgba(22,163,74,0.4)]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 border-b border-sky-100 pb-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>All {catName} Products</span>
            <span className="text-sm font-normal text-slate-600">({catProducts.length})</span>
          </h2>
          <Link
            to="/products"
            className="text-sm text-sky-700 hover:text-sky-300 font-bold hover:underline"
          >
            Back to All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {catProducts.map((p, index) => (
            <ScrollAnimatedSection key={p.id} animation="fade-up" delay={Math.min(index, 8) * 0.035}>
              <ProductCard product={p} />
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>

      <RetailerCTA />
    </div>
  );
}

