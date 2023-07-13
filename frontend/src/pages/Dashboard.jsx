import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import InterestsIcon from "@mui/icons-material/Interests";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import InfoIcon from "@mui/icons-material/Info";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const drawerWidth = 240;
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

const Dashboard = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ["Requirments", "Applied", "Connections"]
  // I want MUI icons for all of following
  const upperItem = [
    { text: "Opportunities", icon: <PersonPinCircleIcon /> },
    { text: "My Assignments", icon: <Diversity1Icon /> },
  ];

  const lowerItem = [
    { text: "My Contributions", icon: <InterestsIcon /> },
    { text: "Success Stories", icon: <AutoStoriesIcon />},
    { text: "How to Donate", icon: <VolunteerActivismIcon /> },
    { text: "About Us", icon: <InfoIcon /> },
    { text: "FAQ & Support", icon: <LiveHelpIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {upperItem.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {lowerItem.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding className="text-red-600">
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={changeTheme}
              startIcon={
                isDarkTheme ? (
                  <LightModeIcon className="text-white" />
                ) : (
                  <DarkModeIcon />
                )
              }
              sx={{ ml: "auto" }}
              className="text-white"
            >
              {isDarkTheme ? "Light Mode" : "Dark Mode"}
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* All Content */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
