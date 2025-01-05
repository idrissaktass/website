import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/system";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import { motion, useInView, useAnimation } from "framer-motion";

const servicesData = [
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <LaptopOutlinedIcon />,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <LaptopOutlinedIcon />,
  },
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <LaptopOutlinedIcon />,
  },
];

const ServiceCard = ({ title, description, icon, index }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false); // Track hover state
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
    <Grid item size={{ xs: 12, sm: 5.5, md: 3.5, lg: 3 }} ref={cardRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        <motion.div animate={controls}>
        <Card
  sx={{
    backgroundColor: hovered ? "#00203b" : "transparent",
    p: 2,
    borderRadius: 3,
    boxShadow: 3,
    transition: "transform 0.3s, background-color 0.6s",
    position: "relative",
    minHeight:200,
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
    backgroundImage: "url('/snippet.jpg')",
    backgroundSize: hovered ? "180%" : "cover", 
    backgroundPosition: "center",
    opacity: hovered ? 0 : 0.3,
    transition: "background-size 0.6s ease, opacity 0.6s ease, transform 0.6s ease", 
    transform: hovered ? "scale(1.1)" : "scale(1)",
    zIndex: 1,
  }}
/>



            <CardContent
              sx={{
                height:"10px",
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
              <Typography  variant="H24px" color={hovered ? "white" : "textPrimary"} align="center">
                {title}
              </Typography>
            </CardContent>

            <motion.div
              style={{
                display: hovered ? "flex" : "none",
                zIndex: 2,
                textAlign: "center",
                alignItems:"center",
                height:"100%"
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

            <motion.div
              style={{
                display: hovered ? "none" : "block", 
              }}
            >
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
      sx={{ backgroundColor: "#fef6f5", padding: { xs: "35px", md: "50px" } }}
    >
      <Typography variant="H38px" align="center" color="textPrimary">
        What Services I'm Providing
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid
        justifySelf={"center"}
        mb={6}
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
      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
