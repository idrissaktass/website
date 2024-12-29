import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/system";
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';

const servicesData = [
  {
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <LaptopOutlinedIcon/>,
  },
  {
    title: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <LaptopOutlinedIcon/>,
  },
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <LaptopOutlinedIcon/>,
  },
];

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#fef6f5", padding: { xs: "35px", md: "50px" } }}>
      <Typography variant="H38px" align="center" color="textPrimary">
        What Services I'm Providing
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
        <Grid mb={6} sx={{backgroundColor: "#f06262", width:"120px", height:"2px", justifySelf:"center"}}></Grid>
      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service, index) => (
          <Grid item size={{ xs:11, sm:5.5, md:3.5, lg:3 }} key={index}>
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
                    {service.icon}
                  </Box>
                </Box>
                <Typography variant="H24px" color="textPrimary" align="center">
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                  mt={1}
                  mb={2}
                >
                  {service.description}
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
