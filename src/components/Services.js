import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent, Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/system";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import { motion, useInView, useAnimation } from "framer-motion";

const servicesData = [
  {
    title: "Lost and Found",
    description:
      "Developed a full-stack lost and found web application to help users post, search, and find lost items or pets.",
    icon: <LaptopOutlinedIcon />,
    link: "https://www.lostandfoundtr.online/",
  },
  {
    title: "Diary AI",
    description:
      "A personalized AI-powered app that analyzes users' daily experiences and emotional states, providing detailed reports and weekly insights to help improve well-being.",
    icon: <LaptopOutlinedIcon />,
    link: "https://diary-ai-0.vercel.app/",
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
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [opened, setOpened] = useState(false);
  
  const toggleCard = () => {
    console.log("toggle")
    if (isMdUp) {
      window.open(link, "_blank");
      console.log("toggleif")

    }
  };

  const handleCardClick = (e) => {
    if (!isMdUp) {
      setOpened(!opened);
      console.log("cardclick")
    } else {
      toggleCard();
    }
  };

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
    <Grid item size={{ xs: 12, sm: 8, md: 5, lg: 3, xl: 3 }} ref={cardRef}
    sx={{
      cursor: isMdUp ? 'pointer' : 'default',
    }}
    onClick={isMdUp ? () => window.open(link, "_blank") : null}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        <motion.div animate={controls}>
          <Card
            sx={{
              backgroundColor: hovered ? "#0b260b" : "transparent",
              p: 2,
              border: "2px solid rgb(0, 0, 0)",
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
                opacity: hovered ? 0 : 0.6,
                transition:
                  "background-size 0.6s ease, opacity 0.6s ease, transform 0.6s ease",
                transform: hovered ? "scale(1.1)" : "scale(1)",
                zIndex: 1,
              }}
            />
            <CardContent onClick={isMdUp ? () => window.open(link, "_blank") : null}
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
                color="textThird"
                align="center"
                bgcolor={hovered ? "none" : "#305041b8"}
                border={hovered ? "none" : "2px solid #305041"}
                borderRadius={hovered ? "none" : "10px"}
                padding={hovered ? "0" : "4px"}
              >
                {title}
              </Typography>
            </CardContent>

            <motion.div
              style={{
                display: hovered ? "flex" : "none",
                zIndex: 3,
                gap: 10,
                flexDirection: "column",
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
              <Box
                borderRadius={"100%"}
                bgcolor={"#61a05f"}
                padding={"8px 8px 6px 10px"}
                color={"#0b260b"}
                onClick={handleCardClick}
                sx={{
                  cursor: "pointer",
                  zIndex: 4,
                }}
              >
                <ArrowForwardIosIcon />
              </Box>
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
      sx={{ backgroundColor: "#305041",
        padding: { xs: "35px 10px 45px 10px", md: "50px", lg:"50px 10px 50px 10px" },
       }}
    >
      <Typography variant="H38px" align="center" color="textThird">
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
      <Grid container gap={3} justifyContent="center">
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
