import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "gray": "#808080",
      "black": "#000000",
      "white": "#ffffff",
      "green":"#1d9b1d",
      "red":"#e72929"
    },
    extend: {},
  },
  plugins: [],
};
export default config;
