import React from "react";
import { Box, Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        gap:{ xs: 5, md: 0 },
        backgroundColor: "#fef6f5",
        padding: { xs: "35px", md: "50px" },
      }}
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
            backgroundColor: "#f06262",
            color: "white",
            textTransform: "none",
            "&:hover": { backgroundColor: "#e04e4e" },
          }}
        >
          <Typography>Learn More</Typography>
        </Button>
      </Box>

      <Box
        sx={{
          height:{xs:"350px", md:"500px"},
          overflow:"hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
            component="img"
            src="/megan.png"
            alt="Megan"
            sx={{
                objectFit:"cover",
                width: "100%",
                height: "auto",
                borderRadius: "10px",
            }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
