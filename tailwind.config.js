/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        muted: "var(--muted)",
        borderSubtle: "var(--border-subtle)",
        accentBlue: "var(--accent-blue)",
      },
      spacing: {
        xxs: "var(--xxs)",
        xs: "var(--xs)",
        s: "var(--s)",
        m: "var(--m)",
        l: "var(--l)",
        xl: "var(--xl)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        ui: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;