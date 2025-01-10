import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/system";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import { motion, useInView, useAnimation } from "framer-motion";

const servicesData = [
  {
    title: "Lost and Found App",
    description:
      "Developed a full-stack lost and found web application to help users post, search, and find lost items or pets.",
    icon: <LaptopOutlinedIcon />,
    link: "https://www.lostandfoundtr.online/",
  },
  {
    title: "Movie App",
    description:
      "A movie application that allows users to find movies, enhancing their experience with personalized suggestions.",
    icon: <LaptopOutlinedIcon />,
    link: "https://www.cinescope.online/",
  },
];

const ServiceCard = ({ title, description, icon, link, index }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isInView = useInView(cardRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.9, delay: index * 0.5 },
      });
    };

    const intervalId = setInterval(() => {
      if (!hovered) {
        startAnimation();
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [controls, hovered, index]);

  return (
    <Grid
      item
      size={{ xs: 12, sm: 8, md: 4, xl: 3 }}
      ref={cardRef}
      onClick={() => window.open(link, "_blank")}
      style={{ cursor: "pointer" }} // Mouse imlecini değiştirir
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        <motion.div animate={controls}>
          <Card
            sx={{
              backgroundColor: hovered ? "#002f63" : "transparent",
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s, background-color 0.6s",
              position: "relative",
              minHeight: 200,
              height: hovered ? "max-content" : 200,
              overflow: "hidden",
              "&:hover": { transform: "scale(1.02)" },
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('/practices.jpg')",
                backgroundSize: hovered ? "180%" : "cover",
                backgroundPosition: "center",
                opacity: hovered ? 0 : 0.3,
                transition:
                  "background-size 0.6s ease, opacity 0.6s ease, transform 0.6s ease",
                transform: hovered ? "scale(1.1)" : "scale(1)",
                zIndex: 1,
              }}
            />
            <CardContent
              sx={{
                height: "10px",
                mt: hovered ? 2 : 0,
                position: "relative",
                top: hovered ? "10%" : "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                zIndex: 2,
                transition: "top 0.3s",
              }}
            >
              <Typography
                variant="H32px"
                color={hovered ? "white" : "textPrimary"}
                align="center"
              >
                {title}
              </Typography>
            </CardContent>

            <motion.div
              style={{
                display: hovered ? "flex" : "none",
                zIndex: 2,
                textAlign: "center",
                alignItems: "center",
                height: "100%",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="body1"
                align="center"
                color={hovered ? "white" : "textSecondary"}
              >
                {description}
              </Typography>
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    </Grid>
  );
};

const Services = () => {
  return (
    <Box
      sx={{ backgroundColor: "#00fff208", padding: { xs: "35px", md: "80px" } }}
    >
      <Typography variant="H38px" align="center" color="textPrimary">
        My Practices
      </Typography>
      <Grid
        mt={1}
        justifySelf={"center"}
        mb={6}
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
      <Grid container gap={8} justifyContent="center">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
