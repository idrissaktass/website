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
      <Box border={"2px solid #305041"} bgcolor={"#ffffff7d"} p={3} sx={{ maxWidth: "600px", textAlign: { xs: "center", md: "left" } }}>
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

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: "column", md: "row" }, alignItems: "center",
      justifyContent: "space-evenly",
      gap: { xs: 5, md: 0 }, 
      padding: { xs: "200px 35px 120px 35px", md: "250px 50px 200px 50px" },
     }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('/about.jpg')",
        backgroundSize: { xs: "250%", sm: "200%", md: "110%", lg: "78%" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.7,
        filter: "blur(5px)",
        zIndex: -1,
      }} />
      
      <TextContent />
    </Box>
  );
};

export default HeroSection;
