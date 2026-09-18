/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // White minimal design system
        base: {
          DEFAULT: "#FFFFFF",
          raised: "#F8FAFC",
          line: "#E5E7EB",
        },

        ink: {
          DEFAULT: "#111827",
          muted: "#64748B",
          faint: "#94A3B8",
        },

        signal: {
          DEFAULT: "#2563EB",
          bright: "#1D4ED8",
          dim: "#93C5FD",
        },
      },

      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },

      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(16px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        "pulse-line": {
          "0%, 100%": {
            opacity: "0.4",
          },
          "50%": {
            opacity: "1",
          },
        },
      },

      animation: {
        "fade-up":
          "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",

        "fade-in": "fade-in 0.6s ease-out both",

        "pulse-line": "pulse-line 2.4s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};