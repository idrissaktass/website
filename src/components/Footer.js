import React from "react";
import { Box, Typography, Link } from "@mui/material";

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
        pt: 3,
        mt: "auto",
      }}
    >
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer" }}
        onClick={handleScrollToTop}
      >
        Back to Top
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        İdris Aktaş
      </Typography>
      <Box sx={{ mt: 2 }}>
      <Link href="mailto:idrissaktass98@gmail.com" underline="hover" color="inherit" sx={{ mx: 1 }}>
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
