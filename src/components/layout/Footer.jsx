/**
 * Footer — Premium footer aligned to light theme
 */
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { categories, categoryMeta } from "../../data/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sky-100 to-blue-100 text-slate-600 border-t border-sky-200">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-sky-500/30 via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-14">
          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white text-xs font-black">
                AE
              </div>
              <span className="text-sm font-black tracking-tight text-slate-900">
                Arpita <span className="text-sky-700">Enterprises</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              Authorised FMCG superstockist and distributor serving retailers, wholesalers, and trade partners across {company.region}.
            </p>
            <div className="flex flex-wrap gap-2">
              {company.serviceArea.split(", ").map((area) => (
                <span key={area} className="rounded-full bg-white border border-sky-200 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-slate-800">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "All Products" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-sky-400 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-slate-800">Categories</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {categories.slice(0, 5).map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${categoryMeta[category]?.slug || category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="transition hover:text-sky-400 inline-block"
                  >
                    {categoryMeta[category]?.icon && (
                      <span className="mr-1.5">{categoryMeta[category].icon}</span>
                    )}
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-slate-800">Get in Touch</h4>
            <address className="not-italic space-y-4 text-sm text-slate-600">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Address</p>
                <a href={company.mapsLink} target="_blank" rel="noreferrer" className="leading-relaxed transition hover:text-sky-700 text-slate-700">
                  {company.address}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Phone</p>
                {company.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="block transition hover:text-sky-700">
                    {phone}
                  </a>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Hours</p>
                <p className="text-slate-700">{company.hours}</p>
              </div>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-400"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-sky-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">© {year} {company.name}. All rights reserved.</p>
          <p className="text-xs text-slate-500">Trade coverage · Ulhasnagar · Kalyan · Dombivli · Thane · Ambernath · Badlapur</p>
        </div>
      </div>
    </footer>
  );
}
