tailwind.config = {
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        pet: {
          orange: "#f97316",
          teal: "#14b8a6",
          purple: "#a855f7",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.05)",
        lift: "0 18px 40px -28px rgba(15, 23, 42, 0.45)",
        deep: "0 28px 60px -32px rgba(15, 23, 42, 0.5)",
      },
    },
  },
};
