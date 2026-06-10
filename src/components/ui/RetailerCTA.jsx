/**
 * RetailerCTA â€” Retailer inquiry banner
 * Used on homepage and products page to drive B2B inquiries.
 */
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function RetailerCTA() {
  const ref = useIntersectionObserver();

  return (
    <section className="bg-sky-50 border-y border-sky-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="reveal bg-gradient-to-r from-white to-sky-50 rounded-2xl border border-sky-200 shadow-card p-8 sm:p-10
                     flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-md"
        >
          {/* Text */}
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-sky-950/60 border border-sky-500/25 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
              <svg className="w-5 h-5 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-lg leading-snug">
                Looking to stock FMCG products for your retail business?
              </h3>
              <p className="text-slate-600 text-sm mt-1.5 max-w-xl leading-relaxed">
                We supply retailers, wholesalers, and institutions across {company.region}.
                Competitive trade pricing, reliable supply, and dedicated support.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%27m%20a%20retailer%20interested%20in%20stocking%20your%20FMCG%20products.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600
                         text-white text-sm font-semibold transition-all shadow-sm hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${company.phones[0]}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-sky-300
                         hover:border-sky-400 hover:text-sky-700 text-slate-700 text-sm font-semibold transition-all hover:bg-white"
            >
              <svg className="w-4 h-4 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:shadow-[0_0_15px_rgba(14,165,233,0.35)]
                         text-white text-sm font-bold transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

