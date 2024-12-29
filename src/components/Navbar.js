import React, { useState } from "react";
import { Box, color, styled } from "@mui/system";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fef6f5", boxShadow: "none", paddingTop:1.5 }}>
      <Toolbar sx={{ justifyContent: {xs:"space-between", sm:"space-around"} }}>
        <Typography
          variant="h6"
          sx={{
            color: "#f06262",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <Typography
              key={item}
              variant="H24px"
              color="textPrimary"
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f06262",
              color: "white",
              textTransform: "none",
              "&:hover": { backgroundColor: "#e04e4e" },
            }}
          >
            <Typography variant="body1">Hire Me</Typography>
          </Button>
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: "#f06262" }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {["Home", "About", "Portfolio", "Contact"].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Box textAlign="center" mt={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f06262",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#e04e4e" },
                }}
              >
                Hire Me
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
