import React, { useRef, useEffect } from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/system";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import { motion, useInView, useAnimation } from "framer-motion";

const servicesData = [
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
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
  const isInView = useInView(cardRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      while (true) {
        await controls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 0.9 },
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    };

    const delay = index * 500; // Her kart için başlangıçta farklı gecikme
    const timeout = setTimeout(() => startAnimation(), delay);

    return () => clearTimeout(timeout);
  }, [controls, index]);


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
            p: 2,
            borderRadius: 3,
            boxShadow: 3,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#ffe6e6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                {icon}
              </Box>
            </Box>
            <Typography variant="H24px" color="textPrimary" align="center">
              {title}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              mt={1}
              mb={2}
            >
              {description}
            </Typography>
            <Box display="flex" justifyContent="center">
              <IconButton
                sx={{
                  backgroundColor: "#f0f0f0",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </CardContent>
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
