import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { Grid } from "@mui/system";

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
      <Box sx={{ maxWidth: "1000px", textAlign: { xs: "center" } }}>
        <Typography variant="h4" color="textPrimary">
          Developing With a Passion While Exploring The World.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            marginBottom: 4,
            marginTop: 2,
          }}
        >
          Hi there! 👋 I'm a Web Developer with a Computer Engineering degree from Çukurova University. Specializing in React, TypeScript, and the MERN Stack, I enjoy building user-friendly, visually appealing web applications using tools like Material UI and Bootstrap.
          <br />I have nearly a year of experience as a Frontend Developer at PokaMind. Also developed some projects to improve my skills ranging from movie suggestion apps to platforms connecting people with lost belongings. I’m passionate about turning ideas into functional, meaningful projects and continuously improving my skills.
          <br />Thank you for visiting my website, explore my projects and let’s connect for collaboration!
        </Typography>
        <Button
          onClick={() => (window.location.href = "mailto:idrissaktass98@gmail.com")}
          key={"contact"}
          variant="contained"
          sx={{
            position: "relative",
            backgroundColor: "#305041",
            color: "white",
            textTransform: "none",
            overflow: "hidden",
            "&:hover": { backgroundColor: "#61a05f" },
            "::before": {
              content: '""',
              position: "absolute",
              top: 50,
              left: "150%",
              width: "300%",
              height: "100%",
              background: "linear-gradient(to right, transparent,rgba(97, 160, 95, 0.4), transparent)",
              zIndex: 1,
              transform: "rotate(45deg)",
              animation: "lightBorder 3.5s infinite",
            },
          }}
        >
          <Typography>Contact Me</Typography>
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

const AboutMe = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: { xs: "35px 10px 35px 10px", md: "50px" },
      }}
    >
      <Typography variant="H38px" color="textPrimary" >
        About Me
      </Typography>
      <Grid
          mt={1}
          justifySelf={{ xs: "center", md: "start" }}
          sx={{
            backgroundColor: "#305041",
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
          width:"80%",
          display: "flex",
          flexDirection: { xs: "column-reverse"},
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextSection />
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: -90 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Box>
            <Box
              component="img"
              src="/cartoon.gif"
              width={{xs:"100%", sm: "80%"}}
              sx={{
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutMe;
