/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    layers: ["base", "components", "utilities"],
  },
  theme: {
    extend: {
      screens: {
        desktop: "1130px",
      },

      colors: {
        "primary-color": "#2563eb",
        // "light-green": "rgba(16, 255, 139, 0.5)",
        // "dark-green": "#8EFF8B",
        // "light-gray": "#AEAEAE",
      },
    },
  },
  plugins: [],
};
