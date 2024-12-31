import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const handleScrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#444",
        color: "#fff",
        textAlign: "center",
        py: 3,
        mt: "auto",
      }}
    >
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer" }}
        onClick={handleScrollToTop}
      >
        <ArrowUpwardIcon sx={{ position: "relative", top: "5px" }} /> Back to Top
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Elif Toraman
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Privacy & Terms of Use
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          About
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Why Trust Me
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Policy
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Email Me
        </Link>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          <i className="fab fa-twitter"></i>
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          <i className="fab fa-facebook"></i>
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          <i className="fab fa-linkedin"></i>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
