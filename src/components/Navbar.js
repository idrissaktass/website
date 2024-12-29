import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fef6f5", boxShadow: "none", paddingTop: 1.5 }}>
      <Toolbar sx={{ justifyContent: { xs: "space-between", sm: "space-around" } }}>
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
          {[
            { label: "Home", id: "hero" },
            { label: "About", id: "about" },
            { label: "Portfolio", id: "services" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <Typography
              key={item.id}
              variant="H24px"
              color="textPrimary"
              onClick={() => scrollToSection(item.id)}
              sx={{ cursor: "pointer" }}
            >
              {item.label}
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
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Portfolio", id: "services" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <ListItem button key={item.id} onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
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