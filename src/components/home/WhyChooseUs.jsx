/**
 * WhyChooseUs — Sky blue theme with BEAT animation on hover
 */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../../data/company";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Award, Package, Zap, DollarSign, Headphones } from "lucide-react";

const pillars = [
  {
    Icon: Award,
    title: "Trusted Brands",
    desc: "Quality-certified FMCG brands meeting strict food safety standards.",
  },
  {
    Icon: Package,
    title: "Wide Product Range",
    desc: "Diverse portfolio covering multiple shelf categories in one order.",
  },
  {
    Icon: Zap,
    title: "Fast Distribution",
    desc: "Timely delivery across 6 cities for consistent shelf stocking.",
  },
  {
    Icon: DollarSign,
    title: "Competitive Margins",
    desc: "Best-in-market trade pricing. Transparent pricing, no hidden costs.",
  },
  {
    Icon: Headphones,
    title: "Dedicated Support",
    desc: "Personal service via WhatsApp and phone during business hours.",
  },
];

export default function WhyChooseUs() {
  const headerRef = useIntersectionObserver();
  const gridRef   = useIntersectionObserver();

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-sky-50 to-white border-t border-sky-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700 mb-3">Why Choose Us</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
            Why partners choose{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Arpita Enterprises</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            Reliable FMCG availability, transparent trade service, and local distribution focus.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-5 mb-10">
          {/* Top row: first three pillars - SKY BLUE WITH BEAT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.slice(0, 3).map((p, idx) => {
              const Icon = p.Icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="beat-on-hover rounded-2xl border-2 border-sky-200 bg-white p-7 shadow-md cursor-default"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 mb-4 text-white shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm leading-6 text-gray-600">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
          {/* Bottom row: remaining two pillars - SKY BLUE WITH BEAT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
            {pillars.slice(3).map((p, idx) => {
              const Icon = p.Icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="beat-on-hover rounded-2xl border-2 border-sky-200 bg-white p-7 shadow-md cursor-default"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 mb-4 text-white shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm leading-6 text-gray-600">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md mb-10"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 mb-3">Service Coverage</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {company.serviceArea.split(", ").map((area) => (
              <motion.span 
                key={area}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex min-h-12 items-center justify-center px-3 py-2 text-center rounded-xl border-2 border-sky-200 bg-sky-50 text-sky-700 font-semibold text-sm cursor-default hover:border-sky-400 hover:bg-sky-100 transition-all"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-md transition-all hover:bg-sky-700 hover:shadow-lg">
              Become a Trade Partner
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
