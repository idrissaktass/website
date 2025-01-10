import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { Grid } from "@mui/system";

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              backgroundColor: "#61a05f",
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
            Hi there! 👋 I'm a Web Developer with a Computer Engineering degree from Çukurova University. Specializing in React, TypeScript, and the MERN Stack, I enjoy building user-friendly, visually appealing web applications using tools like Material UI and Bootstrap.
  
            <br/>I have nearly a year of experience as a Frontend Developer at PokaMind. Also developed some projects to improve my skills ranging from movie suggestion apps to platforms connecting people with lost belongings. I’m passionate about turning ideas into functional, meaningful projects and continuously improving my skills.
  
            <br/>Thank you for visiting my website—explore my projects and let’s connect for collaboration!
          </Typography>
          <Button
            onClick={() => scrollToSection("contact")} 
            key={"contact"}
            variant="contained"
            sx={{
              position: "relative",
              backgroundColor: "#61a05f",
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
  return (
    <Box sx={{ 
      display: "flex",
      justifyContent: "center",
      position: "relative",
      padding: { xs: "35px", md: "50px" },
    }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/about.jpg')",
          backgroundSize: {xs:"250%", sm:"200%", md:"110%", lg:"80%"},
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.7,
          filter: "blur(5px)",
          zIndex: -1,
        }}
      />
      
      <Grid bgcolor={"white"} width={"fit-content"} py={4} borderRadius={"10px"}>
        <Typography variant="H38px" color="textPrimary">
          About Me
        </Typography>
        
        <Grid
          mt={1}
          justifySelf={"center"}
          sx={{
            backgroundColor: "#61a05f",
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
        </Box>
      </Grid>
    </Box>

  );
};

export default AboutMe;
