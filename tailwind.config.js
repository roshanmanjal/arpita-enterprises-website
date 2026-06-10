/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "Times New Roman", "sans-serif"],
        display: ["Lexend", "serif"],
      },
      colors: {
        // PRIMARY: Modern Royal Blue (Premium B2B)
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",   // PRIMARY Royal Blue
          600: "#2563eb",   // Deeper Royal
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // SECONDARY: Teal Accent
        teal: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        // PURPLE: Gradient Accent
        purple: {
          50:  "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        eatbit: {
          light: "#FEE1BD",
          mid:   "#F5C07A",
          dark:  "#5E3100",
          deep:  "#3D1F00",
        },
        craveto: {
          light: "#FFF8E7",
          gold:  "#FCC746",
          dark:  "#1a1a2e",
          deep:  "#0f0f1a",
        },
      },
      boxShadow: {
        "card":       "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "card-md":    "0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -1px rgb(0 0 0 / 0.05)",
        "card-lg":    "0 10px 30px -4px rgb(0 0 0 / 0.12), 0 4px 8px -2px rgb(0 0 0 / 0.08)",
        "card-xl":    "0 20px 50px -8px rgb(0 0 0 / 0.16), 0 8px 16px -4px rgb(0 0 0 / 0.12)",
        "premium":    "0 2px 8px -1px rgb(59 130 246 / 0.15), 0 1px 3px 0 rgb(59 130 246 / 0.1)",
        "premium-md": "0 8px 20px -6px rgb(59 130 246 / 0.25), 0 4px 8px -2px rgb(59 130 246 / 0.15)",
        "premium-lg": "0 20px 40px -8px rgb(59 130 246 / 0.3), 0 8px 16px -4px rgb(59 130 246 / 0.2)",
        "glow":       "0 0 40px -8px rgb(59 130 246 / 0.4), 0 0 20px -4px rgb(139 92 246 / 0.2)",
        "glow-teal":  "0 0 30px -6px rgb(20 184 166 / 0.4)",
      },
      animation: {
        "fade-up":     "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":     "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "float":       "float 6s ease-in-out infinite",
        "float-slow":  "float 8s ease-in-out infinite",
        "shimmer":     "shimmer 2s linear infinite",
        "ticker":      "ticker 30s linear infinite",
        "pulse-glow":  "pulseGlow 3s ease-in-out infinite",
        "slide-up":    "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in":    "scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp:     { "0%": { opacity:"0", transform:"translateY(28px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:     { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        slideRight: { "0%": { opacity:"0", transform:"translateX(-24px)" }, "100%": { opacity:"1", transform:"translateX(0)" } },
        slideUp:    { "0%": { opacity:"0", transform:"translateY(40px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        scaleIn:    { "0%": { opacity:"0", transform:"scale(0.9)" }, "100%": { opacity:"1", transform:"scale(1)" } },
        float:      { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-12px)" } },
        shimmer:    { "0%": { backgroundPosition:"200% 0" }, "100%": { backgroundPosition:"-200% 0" } },
        ticker:     { "0%": { transform:"translateX(0)" }, "100%": { transform:"translateX(-50%)" } },
        pulseGlow:  { "0%,100%": { opacity:"0.3", transform:"scale(1)" }, "50%": { opacity:"0.6", transform:"scale(1.05)" } },
      },
    },
  },
  plugins: [],
};
