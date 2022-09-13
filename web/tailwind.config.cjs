/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      100: 100,
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    extend: {
      width: {
        "flued-1": "min(100% - 2rem, 1550px)",
      },
      colors: {
        "surface-100": "hsl(var(--clr-surface-100) / <alpha-value>)",
        "surface-900": "hsl(var(--clr-surface-900) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-text": "var(--gradient-text)",
        "gradient-shadow": "var(--gradient-shadow)",
      },
      aspectRatio: {
        box: 1,
        card: "3/5",
        landscape: "4/3",
        portrait: "3/4",
        ultrawide: "18/5",
        golden: "1.618/1",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
