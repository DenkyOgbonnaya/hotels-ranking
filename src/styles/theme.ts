"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D3A837",
      light: "#FCEDCA",
      contrastText: "#000000",
    },
    secondary: {
      main: "#23856D",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2DC071",
    },
    error: {
      main: "#E74040",
    },
    text: {
      primary: "#090702",
      secondary: "#737373",
    },

    background: {
      default: "#F0F0F7F7",
      paper: "#ffffff",
    },
    muted: {
      main: "#BDBDBD",
    },
    light: {
      main: "#FFF",
    },
  },

  /* Type scale for typography fontsize is 1.125(Major seconds) approximated  */

  typography: {
    fontFamily: "var(--font-inter)",
    fontSize: 16,
    xs: {
      fontSize: "0.75rem", //12px
    },
    sm: {
      fontSize: "0.875rem", //14px
    },
    base: {
      fontSize: "1rem", //16px
    },
    lg: {
      fontSize: "1.125rem", //18px
    },
    xl: {
      fontSize: "1.438rem", //23px
    },
    "2xl": {
      fontSize: "1.5rem", // 24px
    },
    "3xl": {
      fontSize: "1.602rem", // 25.63p
    },
    "4xl": {
      fontSize: "1.802rem", //28.83px
    },
    "5xl": {
      fontSize: "2rem", //32.44px
    },
    "6xl": {
      fontSize: "2.281rem", //36.49px
    },
    "7xl": {
      fontSize: "2.57rem", //41.05px
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1250,
      xxl: 1450,
      xxxl: 1550,
      xxxxl: 1650,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          disableUnderline: true,
        },
      },
      styleOverrides: {},
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          // width: "300px",
          maxHeight: "20px",
          backgroundColor: "#f9f9f9",
          padding: "0px",
        },
        inputRoot: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue",
            padding: "0px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "darkblue",
            padding: "0px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "green",
            padding: "0px",
          },
        },
      },
    },
  },
});

export default theme;
