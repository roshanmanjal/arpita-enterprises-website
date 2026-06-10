/**
 * ProductDetailPage â€” Premium product detail with specs, related products, retailer CTA
 */
import { useParams, Link, useNavigate } from "react-router-dom";
import { products, categoryMeta, analytics } from "../data/products";
import { company } from "../data/company";
import { useEffect } from "react";
import RetailerCTA from "../components/ui/RetailerCTA";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  // Analytics stub
  useEffect(() => {
    if (product) analytics.trackProductView(product.id);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <p className="text-5xl mb-4">ðŸ“¦</p>
          <h2 className="text-slate-900 font-bold text-xl">Product not found</h2>
          <Link to="/products" className="mt-4 inline-block text-sky-700 text-sm hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm interested in stocking ${product.name} (${product.brand}, ${product.weight}). Please share trade pricing and availability.`
  )}`;

  const catMeta = categoryMeta[product.category];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-sky-50 border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-600 flex-wrap">
            <Link to="/" className="hover:text-sky-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-sky-700 transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products?brand=${product.brand}`} className="hover:text-sky-700 transition-colors">
              {product.brand}
            </Link>
            <span>/</span>
            <Link to={`/category/${catMeta?.slug}`} className="hover:text-sky-700 transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-sky-700 font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Image */}
          <div className="bg-white rounded-3xl overflow-hidden aspect-square border border-sky-200 relative p-6 backdrop-blur-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Link
                to={`/products?brand=${product.brand}`}
                className="text-xs font-bold text-sky-700 bg-blue-50 border border-sky-200 px-3.5 py-1.5 rounded-full hover:bg-blue-900/80 transition-all font-sans"
              >
                {product.brand} Portfolio
              </Link>
              <Link
                to={`/category/${catMeta?.slug}`}
                className="text-xs font-medium text-slate-700 bg-white border border-sky-200 px-3.5 py-1.5 rounded-full hover:bg-sky-50 transition-all font-sans"
              >
                {catMeta?.icon} {product.category}
              </Link>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* 1. Product Overview */}
            <div className="mt-5">
              <h3 className="text-xs font-bold text-sky-700 uppercase tracking-widest mb-2">Product Overview</h3>
              <p className="text-slate-700 leading-relaxed text-sm bg-sky-50 border border-sky-200 rounded-2xl p-4">
                {product.description}
              </p>
            </div>

            {/* 2. Product Information Grid */}
            <div className="mt-6 border border-sky-200 rounded-2xl overflow-hidden shadow-sm bg-sky-50">
              <div className="bg-[#0d1b2a]/60 px-5 py-3 border-b border-sky-200">
                <h3 className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                  Product Specifications
                </h3>
              </div>
              <div className="divide-y divide-blue-900/20">
                {[
                  { label: "Authorized Brand",  value: product.brand },
                  { label: "Product Category", value: product.category },
                  { label: "Pack Size / Weight", value: product.weight },
                  { label: "Packaging Format", value: product.packInfo },
                ].map(({ label, value }) => value && (
                  <div key={label} className="grid grid-cols-[1.2fr_2fr] px-5 py-3 items-center text-xs sm:text-sm">
                    <span className="font-semibold text-slate-600 uppercase tracking-wider text-[10px]">{label}</span>
                    <span className="text-slate-900 font-bold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Available Through Arpita Enterprises Box */}
            <div className="mt-6 rounded-2xl border border-sky-200 bg-blue-50 p-5 shadow-[0_0_15px_rgba(14,165,233,0.05)]">
              <div className="flex gap-3">
                <span className="text-xl mt-0.5">ðŸ“</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Available Through Arpita Enterprises</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    We maintain commercial inventories of this product for authorized delivery across Ulhasnagar, Thane, Kalyan, Dombivli, Ambernath, and Badlapur. Zero public pricing is displayed to preserve trade margins for our retail partners.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Inquiry CTA Block */}
            <div className="mt-6 bg-gradient-to-br from-sky-100 to-blue-100 border border-sky-200 rounded-2xl p-6 text-slate-900 shadow-card-md">
              <h3 className="text-slate-900 font-bold text-sm mb-1 uppercase tracking-wider">
                Send Bulk & Trade Inquiries
              </h3>
              <p className="text-slate-700 text-xs mb-4 leading-relaxed">
                Contact our sales desk to obtain direct superstockist pricing, MOQ details, and commercial availability. We serve verified retailers, wholesalers, and institutional buyers.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                  WhatsApp Enquiry
                </a>
                <a
                  href={`tel:${company.phones[0]}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-900 hover:border-sky-400/60 text-slate-800 text-xs font-bold transition-all bg-white active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Sales
                </a>
                <Link
                  to={`/contact?inquiry=Product&product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                >
                  Form Inquiry
                </Link>
              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="mt-5 text-sm text-slate-500 hover:text-sky-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">More in {product.category}</h2>
              <Link
                to={`/category/${catMeta?.slug}`}
                className="text-sm text-sky-700 hover:underline font-medium"
              >
                View all â†’
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-sky-200 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all"
                >
                  <div className="aspect-square bg-white overflow-hidden p-3 border-b border-sky-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-slate-900 font-semibold text-xs leading-snug group-hover:text-sky-700 transition-colors">
                      {p.name}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{p.weight}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <RetailerCTA />
    </div>
  );
}

