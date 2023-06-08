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
      contrastText: "#FFF",
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
      color: '#FFF',
      "@media (max-width:600px)": {
        fontSize: '50px',
        lineHeight: '75px'
      }
    },
    h2: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "65px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "78px",
      textTransform: "uppercase",
      color: '#FFF',
      "@media (max-width:600px)": {
        fontSize: '45px',
        lineHeight: '67.5px'
      }
    },
    h3: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "35px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "42px",
      color: '#FFF',
      "@media (max-width:600px)": {
        fontSize: '20px',
        lineHeight: '30px'
      }
    },
    h4: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "130%",
      color: '#FFF',
      "@media (max-width:600px)": {
        fontSize: '21px',
        lineHeight: '31.5px'
      }
    },
    h5: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "36px",
      textTransform: "uppercase",
      color: '#FFF',
      "@media (max-width:600px)": {
        fontSize: '20px',
        lineHeight: '30px'
      }
    },
    h6: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "28px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "240%",
      color: '#FFF',
      "@media (max-width:600px)": {
        fontSize: '19px',
        lineHeight: '28.5px'
      }
    },
    subtitle1: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: '20px',
        lineHeight: '30px'
      }
    },
    subtitle2: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      color: '#FFF',
      "@media (max-width:600px)": {
        fontSize: '20px',
        lineHeight: '30px'
      }
    },
    body2: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      "@media (max-width:600px)": {
        fontSize: '16px',
        lineHeight: '22.5px'
      }
    },
    button: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "uppercase",
      "@media (max-width:600px)": {
        fontSize: '15px',
        lineHeight: '22.5px'
      }
    },
    caption: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: "25px",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "uppercase",
      "@media (max-width:600px)": {
        fontSize: '15px',
        lineHeight: '22.5px'
      }
    }
  },
});
