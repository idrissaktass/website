import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f06262", // Ana renk (ör. Hire Me butonu için)
    },
    secondary: {
      main: "#fef6f5", // Navbar arka plan rengi
    },
    text: {
      primary: "#002f63", // Menü metin rengi
      secondary: "#001022c9",
    },
  },
  typography: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 14, // Varsayılan font boyutu
    button: {
      textTransform: "none", // Buton yazıları için
    },
    H54px: {
      fontSize: "54px",
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
    body1: {
      fontSize: "20px", // Genel metin boyutu
      fontWeight: "500"
    },
  },
});

export default theme;
