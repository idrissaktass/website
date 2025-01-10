import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const TextContent = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0.3, x: 90 }}
      animate={isTextInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box sx={{ maxWidth: "600px", textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="H48px" mb={2} color="textPrimary">
          I'm Frontend Developer
          <br />
          İdris Aktaş
        </Typography>

        <Typography color="textSecondary" mt={2}>
          Turning ideas into impactful web experiences with React, TypeScript, and the MERN Stack. Let's build something amazing together!
        </Typography>
      </Box>
    </motion.div>
  );
};

const ImageContent = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0.3, y: 90 }}
      animate={isImageInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
        <Box
          component="img"
          src="/renovation.png"
          sx={{
            display:"flex",
            justifySelf:{xs:"center", md:"unset"},
            objectFit: "cover",
            width: {xs:"120%", sm:"70%", md:"400px", lg:"500px"},
            height: "100%",
            maxHeight: "100%",
            borderRadius: "10px",
          }}
        />
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: { xs: 5, md: 0 },
        backgroundColor: "#00fff208",
        padding: { xs: "60px 35px 60px 35px", md: "100px 50px 100px 50px" },
      }}
    >
      <TextContent />
      <ImageContent />
    </Box>
  );
};

export default HeroSection;
