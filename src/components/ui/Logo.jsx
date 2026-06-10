/**
 * Logo — AE Monogram for Arpita Enterprises
 * Variants:
 *   "full"   — icon + wordmark (navbar, default)
 *   "footer" — icon + wordmark on dark background
 *   "mark"   — icon only (favicon, loading)
 */
export default function Logo({ variant = "full", className = "" }) {
  const Mark = ({ size = 36 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="9" fill="#2563EB" />
      {/* A — left stroke */}
      <path
        d="M7 29L14.5 11H16L23.5 29"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* A — crossbar */}
      <line x1="9.8" y1="22.5" x2="20.8" y2="22.5"
        stroke="white" strokeWidth="2.1" strokeLinecap="round" />
      {/* E — spine */}
      <line x1="27" y1="12" x2="27" y2="29"
        stroke="white" strokeWidth="2.1" strokeLinecap="round" />
      {/* E — top */}
      <line x1="27" y1="12" x2="34" y2="12"
        stroke="white" strokeWidth="2.1" strokeLinecap="round" />
      {/* E — mid */}
      <line x1="27" y1="20.5" x2="33" y2="20.5"
        stroke="white" strokeWidth="2.1" strokeLinecap="round" />
      {/* E — bottom */}
      <line x1="27" y1="29" x2="34" y2="29"
        stroke="white" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );

  if (variant === "mark") return <Mark size={36} />;

  const isDark = variant === "footer";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Mark size={36} />
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold text-[15px] tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Arpita Enterprises
        </span>
        <span className="text-[10px] font-medium tracking-widest uppercase mt-0.5 text-gray-400">
          FMCG Distributor
        </span>
      </div>
    </div>
  );
}
