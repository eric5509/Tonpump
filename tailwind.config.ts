import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
        '4xl': '2100px',
        '5xl': '2400px',
        '6xl': '2700px',
        '7xl': '3000px',
        '8xl': '3400px',
      },
      colors: {
        mainDark: "#210716",
        mainLight: "white",
        secondary: "#22577A",
        prim: "#9DFBFA",
        subText: "#5090A0",
        purplee: "#862078"
      },
     fontSize:{
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '13': '13px',
      '15': '15px',
      '17': '17px'
     },
      height:{
        "13": "50px"
      },
      padding:{
        2.5: "10px"
      }
    },
  },
  plugins: [],
};
export default config;
