import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress, Card } from "@mui/material";
import { Grid } from "@mui/system";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const formRef = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailError(false);

    emailjs
      .sendForm(
        "service_7st8pbj",
        "template_63i9e4h",
        formRef.current,
        "offOxd6LjCh6-Ctmj"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setEmailSent(true);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setEmailError(true);
        }
      )
      .finally(() => setIsLoading(false));
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
          style={{ width: "100%" }}
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
                pointerEvents: (isLoading || emailSent) ? "none" : "auto", // Disable form while loading
              }}
            >
              <Typography variant="h6" mb={2} color="textPrimary" sx={{ opacity: (isLoading || emailSent) ? 0.5 : 1 }}>
                Leave a Message
              </Typography>
              <TextField  sx={{ opacity: (isLoading || emailSent) ? 0.5 : 1 }}
                label="Name"
                name="user_name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                disabled={isLoading || emailSent}
              />
              <TextField  sx={{ opacity: (isLoading || emailSent) ? 0.5 : 1 }}
                label="E-Mail"
                name="user_email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                disabled={isLoading || emailSent}
              />
              <TextField  sx={{ opacity: (isLoading || emailSent) ? 0.5 : 1 }}
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
                disabled={isLoading || emailSent}
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#f06262",
                    color: "white",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#e04e4e" },
                  }}
                  disabled={isLoading || emailSent}
                >
                  Submit
                </Button>
                {isLoading && (
                  <CircularProgress
                    size={48}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
                {emailSent && (
                  <Card
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80%",
                      p: 3,
                      textAlign: "center",
                      bgcolor: "#e0ffe0",
                    }}
                  >
                  <Typography variant="h6" color="green">
                    Email successfully sent!
                  </Typography>
                </Card>
                )}
              </Box>
              {emailError && (
                <Typography variant="body2" color="error" mt={1}>
                  Failed to send message. Please try again.
                </Typography>
              )}
            </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ContactMe;
