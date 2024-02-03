/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0075EA",
          100: "#b2cbf2",
        }, //blue
        info: { DEFAULT: "#00bcd4", 100: "#eef8fa" },
        perso: "#00c851",
        secondary: { DEFAULT: "#173c70", 100: "#e8ebf0", 900: "#1b3058" },
        warn: { DEFAULT: "#f2a93b", 100: "#fdf7ed" },
        error: { DEFAULT: "#f83546", 100: "#fdeeef" },
        success: { DEFAULT: "#20ad61", 100: "#edf6f0" },
        text: "#212529",
        neutral4: "#5d6873",
        neutral3: "#8494a4",
        neutral2: { DEFAULT: "#ced7df", 100: "#f1f1f1" },
        neutral1: "#f2f4f8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        600: "600",
        700: "700",
        900: "900",
      },
      fontSize: {
        xxs: "0.5rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        36: "36px",
      },
      top: {
        32: "128px",
        36: "144px",
        45: "200px",
      },
    },
  },
  variants: {},
  plugins: [],
};
