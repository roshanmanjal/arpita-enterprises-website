/**
 * FloatingButtons — Single contact dock for WhatsApp-led sales support.
 * Visible after scrolling for a cleaner, more premium experience.
 */
import { useEffect, useState } from "react";
import { company } from "../../data/company";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Contact dock"
    >
      <a
        href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20FMCG%20range.%20Please%20share%20trade%20availability.`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-full border border-stone-200 bg-white/95 px-5 py-3 shadow-card-md backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-green-md"
      >
        <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-white shadow-sm">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-900">Contact Sales</p>
          <p className="text-xs text-slate-500">WhatsApp + phone support</p>
        </div>
      </a>
    </div>
  );
}
