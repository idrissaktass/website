import React, { useRef } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Grid } from "@mui/system";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7st8pbj", // Replace with your EmailJS Service ID
        "template_63i9e4h", // Replace with your EmailJS Template ID
        formRef.current,
        "offOxd6LjCh6-Ctmj" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <Grid
      container
      bgcolor={"#fef6f5"}
      display={"flex"}
      justifyContent={"center"}
      p={{ xs: "35px", md: "50px" }}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        size={{ xs: 12, sm: 10, md: 9, lg: 7, xl: 6 }}
        sx={{ position: "relative" }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0.8, y: -120 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
        <Typography
          sx={{
            position: "absolute",
            top: "0%",
            left: { xs: "49%", sm: "30%", md: "30%", lg: "20%" },
            transform: "translate(-50%, -10%)",
            fontSize: { xs: "70px", sm: "90px", md: "120px" },
            fontWeight: "900",
            color: "rgba(0, 0, 0, 0.05)",
            zIndex: 0,
            userSelect: "none",
          }}
        >
          CONTACT
        </Typography>

        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Typography variant="H24px" textAlign={"start"} color="textPrimary">
            Let's get in touch
          </Typography>
          <Typography
            variant="H54px"
            mb={4}
            textAlign={"start"}
            color="textPrimary"
          >
            Contact Me
          </Typography>
        </Box>

        <Box
          width={"100%"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "unset" },
            alignItems: { xs: "start", md: "unset" },
            justifyContent: "start",
            gap: "2rem",
            mb: 4,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                border: "1px solid #f06262",
                borderRadius: "100%",
                padding: "12px 12px 10px 12px",
                color: "#f06262",
              }}
            >
              <LocalPhoneOutlinedIcon fontSize="large" />
            </Box>
            <Typography variant="body1" color="textSecondary">
              123 123 123 123
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                border: "1px solid #f06262",
                borderRadius: "100%",
                padding: "12px 12px 10px 12px",
                color: "#f06262",
              }}
            >
              <EmailOutlinedIcon fontSize="large" />
            </Box>
            <Typography variant="body1" color="textSecondary">
              xd@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                border: "1px solid #f06262",
                borderRadius: "100%",
                padding: "12px 12px 10px 12px",
                color: "#f06262",
              }}
            >
              <LocationOnOutlinedIcon fontSize="large" />
            </Box>
            <Typography variant="body1" color="textSecondary">
              01 Merkez Patlıyor Herkez
            </Typography>
          </Box>
        </Box>
          {/* Form Section */}
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography variant="h6" mb={2} color="textPrimary">
              Leave a Message
            </Typography>
            <TextField
              label="Name"
              name="user_name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="E-Mail"
              name="user_email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#f06262",
                color: "white",
                textTransform: "none",
                "&:hover": { backgroundColor: "#e04e4e" },
              }}
            >
              <Typography variant="body1">Submit</Typography>
            </Button>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
);
};

export default ContactMe;
