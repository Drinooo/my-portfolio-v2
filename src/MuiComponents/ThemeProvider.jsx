import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#18242F",
      light: "#18242F",
      dark: "#18242F",
      contrastText: "#18242F",
    },
    secondary: {
      main: "#D6412B",
      light: "#D6412B",
      dark: "#D6412B",
      contrastText: "#D6412B",
    },
    tertiary: {
      main: "#FFF",
      light: "#FFF",
      dark: "#FFF",
      contrastText: "#000",
    }
  },
  typography: {
    h1: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "75px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "90px",
      textTransform: "uppercase",
      color: '#FFF'
    },
    h2: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "65px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "78px",
      textTransform: "uppercase",
      color: '#FFF'
    },
    h3: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "35px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "42px",
      color: '#FFF'
    },
    h4: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "130%",
      color: '#FFF'
    },
    h5: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "36px",
      textTransform: "uppercase",
      color: '#FFF'
    },
    h6: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "28px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "240%",
      color: '#FFF'
    },
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "36px",
      color: '#FFF'
    },
    body2: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      color: '#FFF'
    },
    button: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "uppercase",
    },
  },
});
