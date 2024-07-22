import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#151c2c',
        'lightBg': '#182237',
        'primary': '#ffffff',
        'secondary': '#b7bac1',
        'highlight': '#2e374a',
        'btnBlue': '#5d57c9'
      },
      padding: {
        "main": "50px"
      },
    },
  },
  plugins: [],
};
export default config;
