import { motion } from "framer-motion";
import { MapPin, Package } from "lucide-react";

const areas = [
  { name: "Ulhasnagar", position: { left: "50%",  top: "50%"  }, isHub: true },
  { name: "Kalyan",     position: { left: "50%",  top: "14%"  } },
  { name: "Dombivli",   position: { left: "78%",  top: "35%"  } },
  { name: "Ambernath",  position: { left: "70%",  top: "76%"  } },
  { name: "Badlapur",   position: { left: "30%",  top: "76%"  } },
  { name: "Thane",      position: { left: "22%",  top: "35%"  } },
];

const connections = [
  { x1: "50%", y1: "50%", x2: "50%", y2: "14%" },
  { x1: "50%", y1: "50%", x2: "78%", y2: "35%" },
  { x1: "50%", y1: "50%", x2: "70%", y2: "76%" },
  { x1: "50%", y1: "50%", x2: "30%", y2: "76%" },
  { x1: "50%", y1: "50%", x2: "22%", y2: "35%" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-gradient-to-b from-sky-50 via-white to-blue-50 border-t border-sky-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-8">

        {/* ── LEFT ─────────────────────────────────────────────────── */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              <MapPin className="h-3 w-3" />
              Coverage
            </span>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl lg:text-4xl lg:leading-tight">
              6 Cities Across{" "}
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Thane District</span>
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              FMCG distribution across high-demand trade corridors in Thane District.
            </p>
          </motion.div>

          {/* City cards - SKY BLUE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {areas.map((area) => (
              <motion.div
                key={area.name}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.03 }}
                className={`group flex cursor-default items-center gap-3 rounded-xl border-2 transition-all ${
                  area.isHub
                    ? "border-sky-400 bg-sky-100 px-5 py-3.5 shadow-md"
                    : "border-sky-200 bg-white px-4 py-3 shadow-sm hover:border-sky-400 hover:bg-sky-50"
                }`}
              >
                {area.isHub ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white shadow-md">
                    <Package className="h-4 w-4" />
                  </div>
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border-2 border-sky-300 text-sky-600 group-hover:bg-sky-50 group-hover:border-sky-500 transition-colors">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900">{area.name}</p>
                  {area.isHub && <p className="text-[10px] font-semibold text-sky-700">Hub</p>}
                </div>
                {!area.isHub && (
                  <svg className="h-4 w-4 flex-shrink-0 text-sky-400 group-hover:text-sky-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats - SKY BLUE */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-md divide-x divide-gray-200"
          >
            {[
              { value: "6",    label: "Cities",    color: "text-gray-900" },
              { value: "30+",  label: "km Radius", color: "text-gray-900" },
              { value: "500+", label: "Partners",  color: "text-sky-700"   },
            ].map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center py-3.5 px-3">
                <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-600">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Map - SKY BLUE with CLEAR CIRCLES ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border-2 border-sky-300 bg-white/95 p-6 shadow-lg backdrop-blur-md lg:sticky lg:top-24 lg:self-start"
        >
          {/* Bg glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          </div>

          {/* Header */}
          <div className="relative mb-4 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              Thane District
            </p>
            <motion.span 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full bg-sky-100 border-2 border-sky-300 px-3 py-1 text-[10px] font-bold text-sky-700"
            >
              Live
            </motion.span>
          </div>

          {/* Map canvas */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 border-2 border-sky-200">

            {/* Dot grid */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.2) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                opacity: 0.4,
              }}
            />

            {/* Concentric rings - CLEAN CIRCLES */}
            <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {[260, 180, 100].map((size, ri) => (
                <motion.div
                  key={size}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + ri * 0.12 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: size, height: size, left: "50%", top: "50%",
                    border: `2px solid rgba(14,165,233,${0.2 + ri * 0.1})`,
                    background: ri === 2 ? "rgba(14,165,233,0.08)" : "transparent",
                  }}
                />
              ))}
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradSky" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {connections.map((conn, i) => (
                <motion.line
                  key={i}
                  x1={conn.x1} y1={conn.y1} x2={conn.x2} y2={conn.y2}
                  stroke="url(#lineGradSky)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.12 }}
                />
              ))}
            </svg>

            {/* City markers - CLEAR LABELS */}
            {areas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.09, type: "spring", stiffness: 280, damping: 18 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: area.position.left, top: area.position.top }}
              >
                {area.isHub ? (
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="absolute inset-0 rounded-xl bg-sky-400/20 blur-md"
                    />
                    <div className="relative flex flex-col items-center gap-1.5 rounded-2xl border-3 border-sky-600 bg-white px-4 py-2.5 shadow-lg">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-600 text-white shadow-md">
                        <Package className="h-4 w-4" />
                      </div>
                      <div className="text-center">
                        <p className="text-base font-black text-gray-900 leading-tight">{area.name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-700">Hub</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.08 }} className="group flex flex-col items-center gap-1 cursor-default">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-sky-500 bg-white shadow-md group-hover:bg-sky-50 transition-colors">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.25 }}
                        className="h-2 w-2 rounded-full bg-sky-600"
                      />
                    </div>
                    <div className="min-w-[82px] rounded-lg border-2 border-sky-300 bg-white px-2.5 py-1.5 text-center shadow-md group-hover:border-sky-500 transition-all">
                      <p className="text-xs font-bold text-gray-900 whitespace-nowrap sm:text-sm">{area.name}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Bottom label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="hidden"
            >
              <p className="text-xs font-bold text-gray-700 whitespace-nowrap">
                <span className="text-sky-700">{areas.length} Cities</span>
                {" · "}Thane District
              </p>
            </motion.div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center justify-center gap-5 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-sky-600 shadow-sm" />
              <span className="font-semibold text-gray-700">Hub</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-sky-600" />
              <span className="font-semibold text-gray-700">City</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
