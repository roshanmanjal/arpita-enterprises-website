import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import { company } from "../../data/company";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const WaIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (to) => {
    if (to.includes("#")) return false;
    return to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-sky-200 shadow-md"
            : "bg-white/80 backdrop-blur-md border-b border-sky-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            {/* Logo - SKY BLUE */}
            <Link to="/" aria-label="Arpita Enterprises" className="flex items-center gap-2 group">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white text-sm font-black shadow-md group-hover:shadow-lg"
              >
                AE
              </motion.div>
              <span className="text-sm font-black tracking-tight text-gray-900">
                Arpita <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Enterprises</span>
              </span>
            </Link>

            {/* Desktop Nav - SKY BLUE */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive(link.to)
                      ? "text-sky-700"
                      : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-sky-100 border-2 border-sky-300"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Nav Actions - SKY BLUE BUTTONS */}
            <div className="hidden items-center gap-3 lg:flex">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${company.phones[0]}`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 transition-all hover:border-sky-400 hover:text-sky-600 hover:shadow-md"
              >
                <svg className="h-3.5 w-3.5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg"
              >
                <WaIcon />
                WhatsApp
              </motion.a>
            </div>

            {/* Mobile Menu Button - SKY BLUE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg border-2 border-gray-200 bg-white p-2 text-gray-700 transition-colors hover:bg-sky-50 hover:border-sky-300 lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <span className={`block h-0.5 rounded-full bg-current transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu - SKY BLUE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-sky-200 bg-white/95 backdrop-blur-xl shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive(link.to)
                      ? "bg-sky-100 text-sky-700 border-2 border-sky-300"
                      : "text-gray-700 hover:bg-sky-50 hover:text-sky-600 border-2 border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${company.phones[0]}`}
                  className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 hover:border-sky-400 hover:text-sky-600"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
                >
                  <WaIcon />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
