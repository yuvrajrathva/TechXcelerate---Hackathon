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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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

import Opportunities from "./Dashboard/Opportunities";
import MyAssignments from "./Dashboard/Assignment";
import MyContributions from "./Dashboard/Contributions";
import SuccessStories from "./Dashboard/SuccessStory";
import HowToDonate from "./Dashboard/HowToDonate";
import AboutUs from "./Dashboard/AboutUs";
import FAQ from "./Dashboard/FAQSupport";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Dashboard = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

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

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const Items = [
    {
      text: "Opportunities",
      icon: <PersonPinCircleIcon className="text-[#A0A0A0]" />,
      component: <Opportunities />,
    },
    {
      text: "My Assignments",
      icon: <Diversity1Icon className="text-[#A0A0A0]" />,
      component: <MyAssignments />,
    },
    {
      text: "My Contributions",
      icon: <InterestsIcon className="text-[#A0A0A0]" />,
      component: <MyContributions />,
    },
    {
      text: "Success Stories",
      icon: <AutoStoriesIcon className="text-[#A0A0A0]" />,
      component: <SuccessStories />,
    },
    {
      text: "How to Donate",
      icon: <VolunteerActivismIcon className="text-[#A0A0A0]" />,
      component: <HowToDonate />,
    },
    {
      text: "About Us",
      icon: <InfoIcon className="text-[#A0A0A0]" />,
      component: <AboutUs />,
    },
    {
      text: "FAQ & Support",
      icon: <LiveHelpIcon className="text-[#A0A0A0]" />,
      component: <FAQ />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List className="text-end">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tab}
          onChange={handleTabChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {Items.map((item, index) => (
            <>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  // give visible box shadow to selected tab
                  ...(tab === index && {
                    boxShadow: "rgba(82,150,217, .5) 0px 1px 4px",
                    // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                  }),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  margin: "auto",
                  width: "100%",
                  paddingLeft: "30px",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
                onClick={() => setTab(index)}
              >
                <IconButton key={item.text} className="gap-2">
                  {item.icon}
                </IconButton>
                <Tab
                  key={item.text}
                  label={item.text}
                  {...a11yProps(index)}
                  className="p-0"
                ></Tab>
              </Box>
            </>
          ))}
        </Tabs>
      </List>
      <List>
        <ListItem disablePadding className="text-red-600">
          <ListItemButton
            onClick={logout}
            sx={{
              bgcolor: "background.paper",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              margin: "auto",
              width: "100%",
              paddingLeft: "30px",
            }}
          >
            <IconButton>
              <LogoutIcon />
            </IconButton>
            <ListItemText primary="Logout" className="p-0" />
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
          {Items.map((item, index) => (
            <TabPanel value={tab} index={index}>
              {item.component}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
