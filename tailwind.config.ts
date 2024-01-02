import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F2385A",
          dark: "#992439",
        },
        background: {
          DEFAULT: "#FFFEFC",
          translucent: "rgba(255, 254, 252, 0.9)",
          darkTranslucent: "rgba(0, 0, 0, 0.5)",
        },
        text0: "#100F0F",
        grey: {
          125: "#7F7D7D",
          245: "#F5F5F5",
          250: "#FAFAFA",
        },
        orange: "#FFD747",
        red: "#FF6847",
        green: "#77FF47",
        blue: "#47B2FF",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      fontSize: {
        body: "18px",
        button: "16px",
        small: "14px",
        tiny: "12px",
        massive: "114px",
        title: "57px",
        subtitle: "32px",
        h1: "32px",
        h2: "26px",
        blockquote: "24px",
        widgetTitle: "32px",
        caption: "13px",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
      },
      flex: {
        2: "2 2 0%",
      },
      boxShadow: {
        light: "4px 4px 16px rgba(0, 0, 0, 0.08)",
        deep: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
