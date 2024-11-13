import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D3A837",
        primaryLight: "#FCEDCA",
        onPrimary: "#000000",
        onPrimaryLight: "#2A2A2A",
        body: "#090702",
        heading: "#090702",
        faded: "#475569",
        surface: "#F0F0F7F7",
        card: "#F0F0F7F7",
        background: "#FFFFFF",
        border: "#dde2ec",
        inputBorder: "#464855",
        inputLabel: "#151621",
        shadow: "#0000000D",
      },
      fontSize: {
        xs: [
          "0.75rem", // 12px
          {
            lineHeight: "1.438rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem", //14px
          {
            lineHeight: "1.438rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        base: [
          "1rem", //16px
          {
            lineHeight: "normal",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        l: [
          "1.125rem", //18px
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        xl: [
          "1.438rem", //23px
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "2xl": [
          "1.5rem", // 24px
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "3xl": [
          "1.602rem", // 25.63px
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "1.875rem", // 30px
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "5xl": [
          "2rem", // 32px

          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "6xl": [
          "2.281rem", // 36.496px
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "7xl": [
          "2.57rem", //41.12px
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        heading: ["--font-sans"],
        body: ["--font-inter"],
        light: ["--font-roboto"],
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1250px",
        xxl: "1450px",
        xxxl: "1550px",
        xxxxl: "1650px",
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.375rem",
        lg: "1rem",
      },
    },
    container: {
      padding: "1rem",
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
