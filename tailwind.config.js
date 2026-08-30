/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Design system tokens — see EDITING_GUIDE.md "How to change colors"
        base: {
          DEFAULT: "#0A0E14",
          raised: "#10151D",
          line: "#1E2530",
        },
        ink: {
          DEFAULT: "#E7EAEE",
          muted: "#8B95A5",
          faint: "#5B6472",
        },
        signal: {
          DEFAULT: "#4FD1C5",
          bright: "#7BE8DC",
          dim: "#2E8A80",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-line": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "pulse-line": "pulse-line 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
