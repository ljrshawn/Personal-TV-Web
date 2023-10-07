import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        title: ["var(--font-j_sans)"],
      },
      colors: {
        microtv: {
          50: "#FBE9E7",
          100: "#FFCCBC",
          200: "#FFAB91",
          300: "#FF8A65",
          400: "#FF7043",
          500: "#FF5722",
          600: "#F4511E",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
        },
        background: {
          200: "#707070",
          300: "#606060",
          400: "#505050",
          500: "#404040",
          600: "#303030",
          700: "#202020",
          800: "#101010",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
