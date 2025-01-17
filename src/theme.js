import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#61a05f",
    },
    secondary: {
      main: "#00fff208",
    },
    text: {
      primary: "#305041",
      secondary: "#001022c9",
      third: "white",
    },
  },
  typography: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 14,
    button: {
      textTransform: "none",
    },
    H48px: {
      fontSize: "48px",
      fontWeight: 700,
    },
    H38px: {
      fontSize: "38px",
      fontWeight: 600,
    },
    H24px: {
      fontSize: "24px",
      fontWeight: 600,
    },
    H32px: {
      fontSize: "32px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "20px",
      fontWeight: "500"
    },
  },
});

export default theme;
