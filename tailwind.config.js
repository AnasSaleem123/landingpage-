/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#bbdcfd",
        space: {
          950: "#010412", // Exact dark purple-blue from neone-bg.png and swatch
          900: "#030822", // Lighter space navy
          800: "#060d33", // Medium space navy
          700: "#0a1347",
          600: "#111f69",
          500: "#1b2d8c",
        },
        electric: {
          400: "#38bdf8", // Neon sky blue
          500: "#0ea5e9", // Bright blue
          600: "#2563eb", // Deep blue
          700: "#1d4ed8",
        }
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 8s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'spin-celestial': 'spin-celestial 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.95))' },
        },
        'spin-celestial': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(14, 165, 233, 0.45), 0 0 40px rgba(37, 99, 235, 0.25)',
        'neon-hover': '0 0 30px rgba(14, 165, 233, 0.75), 0 0 60px rgba(37, 99, 235, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'inner-glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
