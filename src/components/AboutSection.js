import React, { useRef } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";

const TextSection = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, x: -90 }}
      animate={isTextInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box sx={{ maxWidth: "500px", textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="H38px" color="textPrimary">
          Developing With a Passion While Exploring The World.
        </Typography>
        <Grid
          mt={1}
          justifySelf={{ xs: "center", md: "start" }}
          sx={{
            backgroundColor: "#f06262",
            width: "120px",
            height: "2px",
            position: "relative",
            overflow: "hidden",
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-120px",
              width: "120px",
              height: "2px",
              background: "linear-gradient(to right, transparent, #fff, transparent)",
              animation: "moveLight 2.5s infinite",
            },
          }}
        >
          <style>
            {`
            @keyframes moveLight {
              0% {
                left: -120px;
              }
              100% {
                left: 120px;
              }
            }
            `}
          </style>
        </Grid>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            marginBottom: 4,
            marginTop: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f06262",
            color: "white",
            "&:hover": { backgroundColor: "#e04e4e" },
          }}
        >
          <Typography variant="body1">Contact Me</Typography>
        </Button>
      </Box>
    </motion.div>
  );
};

const ImageSection = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0, y: -90 }}
      animate={isImageInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          height: { xs: "350px", md: "500px" },
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          boxShadow: {
            xs: "15px 0px 5px 8px #f06262",
            sm: "30px 0px 7px 15px #f06262",
          },
        }}
      >
        <Box
          component="img"
          src="/megan.png"
          alt="Megan"
          sx={{
            objectFit: "cover",
            width: "100%",
            maxWidth: 400,
            borderRadius: "10px",
          }}
        />
      </Box>
    </motion.div>
  );
};

const AboutMe = () => {
  return (
    <Box sx={{ backgroundColor: "#fffbfa", padding: { xs: "35px", md: "50px" } }}>
      <Typography variant="H38px" color="textPrimary" sx={{ marginBottom: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid
        justifySelf={"center"}
        sx={{
          backgroundColor: "#f06262",
          width: "120px",
          height: "2px",
          position: "relative",
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-120px",
            width: "120px",
            height: "2px",
            background: "linear-gradient(to right, transparent, #fff, transparent)",
            animation: "moveLight 2.5s infinite",
          },
        }}
      >
        <style>
          {`
          @keyframes moveLight {
            0% {
              left: -120px;
            }
            100% {
              left: 120px;
            }
          }
          `}
        </style>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: { xs: 5, md: 0 },
          padding: { xs: "35px", md: "50px" },
        }}
      >
        <TextSection />
        <ImageSection />
      </Box>
    </Box>
  );
};

export default AboutMe;
