import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const TextContent = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0.3, x: 90 }}
      animate={isTextInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box sx={{ maxWidth: "500px", textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="H54px" mb={2} color="textPrimary">
          I'm Web Developer
          <br />
          Elif Toraman
        </Typography>

        <Typography color="textSecondary" mb={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        <Button
          variant="contained"
          sx={{
            position: "relative",
            backgroundColor: "#f06262",
            color: "white",
            textTransform: "none",
            overflow: "hidden",
            "&:hover": { backgroundColor: "#e04e4e" },
            "::before": {
              content: '""',
              position: "absolute",
              top: 50,
              left: "150%",
              width: "300%",
              height: "100%",
              background: "linear-gradient(to right, transparent, rgba(255, 202, 202, 0.6), transparent)",
              zIndex: 1,
              transform: "rotate(45deg)",
              animation: "lightBorder 3.5s infinite",
            },
          }}
        >
          <Typography>Learn More</Typography>
          <style>
            {`
              @keyframes lightBorder {
                0% {
                  left: -150%;
                }
                100% {
                  left: 150%;
                }
              }
            `}
          </style>
        </Button>

      </Box>
    </motion.div>
  );
};

const ImageContent = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0.3, y: 90 }}
      animate={isImageInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          height: { xs: "350px", md: "500px" },
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/megan.png"
          alt="Megan"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </Box>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: { xs: 5, md: 0 },
        backgroundColor: "#fef6f5",
        padding: { xs: "35px", md: "50px" },
      }}
    >
      <TextContent />
      <ImageContent />
    </Box>
  );
};

export default HeroSection;
