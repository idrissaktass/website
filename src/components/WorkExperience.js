import React from "react";
import {Card, CardContent, Typography, Box, LinearProgress} from "@mui/material";
import { Grid } from "@mui/system";

const experiences = [
  {
    title: "UI/UX Designer",
    duration: "2015-2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    label: "UI/UX Designer",
    progress: 90,
  },
  {
    title: "Web Designer",
    duration: "2015-2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    label: "Web Designer",
    progress: 80,
  },
  {
    title: "Web Developer",
    duration: "2015-2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    label: "Web Developer",
    progress: 85,
  }
];

const WorkExperience = () => {
  return (
    <Box sx={{ padding: { xs: "35px", md: "50px" }, backgroundColor: "#fffbfa" }}>
      <Typography variant="H38px" align="center" color="textPrimary">
        Work Experience
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid mb={6} sx={{backgroundColor: "#f06262", width:"120px", height:"2px", justifySelf:"center"}}></Grid>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {experiences.map((experience, index) => (
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
                <Typography variant="H24px" color="textPrimary">
                  {experience.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="error"
                  fontWeight={500}
                  mb={1}
                >
                  {experience.duration}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  mb={3}
                  sx={{ minHeight: "60px" }}
                >
                  {experience.description}
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="caption"
                    color="error"
                    fontWeight={600}
                    display="block"
                  >
                    {experience.label}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={experience.progress}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "error",
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkExperience;
