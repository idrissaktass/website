import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Grid } from "@mui/system";

const ContactMe = () => {
  return (
    <Grid container bgcolor={"#fef6f5"} display={"flex"} justifyContent={"center"} p={{xs:"35px", md:"50px"}}>
      <Grid display={"flex"} flexDirection={"column"} alignItems={"center"} size={{xs:12, sm:10, md:9, lg:7, xl:6}}>
        <Box width={"100%"} display={"flex"} flexDirection={"column"}>
          <Typography variant="H24px" textAlign={"start"} color="textPrimary">
            Let's get in touch
          </Typography>
          <Typography variant="H54px" mb={4} textAlign={"start"} color="textPrimary">
            Contact Me
          </Typography>
        </Box>

        <Box width={"100%"}
          sx={{
            display: "flex",
            flexDirection: {xs:"column", md:"unset"},
            alignItems: {xs:"start", md: "unset"},
            justifyContent: "start",
            gap: "2rem",
            mb: 4,
          }}
        >
          <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
            <Box sx={{border:"1px solid #f06262", borderRadius:"100%", padding:"12px 12px 10px 12px", color:"#f06262"}}>
              <LocalPhoneOutlinedIcon fontSize="large"/>
            </Box>
            <Typography variant="body1" color="textSecondary">123 123 123 123</Typography>
          </Box>
          <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
            <Box sx={{border:"1px solid #f06262", borderRadius:"100%", padding:"12px 12px 10px 12px", color:"#f06262"}}>
              <EmailOutlinedIcon fontSize="large" />
            </Box>  
            <Typography variant="body1" color="textSecondary">xd@gmail.com</Typography>
          </Box>
          <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
            <Box sx={{border:"1px solid #f06262", borderRadius:"100%", padding:"12px 12px 10px 12px", color:"#f06262"}}>
              <LocationOnOutlinedIcon fontSize="large" />
            </Box>
            <Typography variant="body1" color="textSecondary">01 Merkez Patlıyor Herkez</Typography>
          </Box>
        </Box>

        <Box
          component="ContactMe"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent:"start",
            width: "100%",
          }}
        >
          <Typography variant="H24px" mb={2} color="textPrimary">
            Leave a Message
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="E-Mail"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button
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
      </Grid>
    </Grid>
  );
};

export default ContactMe;
