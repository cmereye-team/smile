module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px", //768及以上，适配平板和pc
      lg: "976px",
      xl: "1200px", //pc
    },
    extend: {
      colors: {
        // 主题色
        primary: {
          DEFAULT: "#4570B6",
        },
        //文本颜色
        text: {
          DEFAULT: "#6D6E71",
        },
      },
      fontFamily: {
        tc: ['"Noto Sans TC"', "sans-serif"],
        hk: ['"Noto Sans HK"', "sans-serif"],
        en: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
