import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Navigator from "./components/Layout/Navigator";
import Header from "./components/Layout/Header";
import Copyright from "./components/Layout/Copyright";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import AppRoutes from "./routes/AppRoutes";

let theme = createTheme();

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#081627",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(255,255,255,0.15)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#4fc3f7",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: theme.spacing(2),
          "& svg": {
            fontSize: 20,
          },
        },
      },
    },
  },
};

const categories = [
  {
    id: "Build",
    children: [
      {
        id: "My Sets",
        icon: <PeopleIcon />,
        link: "/admin/item",
        active: false,
      },
      {
        id: "My Items",
        icon: <DnsRoundedIcon />,
        link: "/login",
        active: false,
      },
    ],
  },
  {
    id: "Admin",
    children: [
      {
        id: "Edit Items",
        icon: <SettingsIcon />,
        link: "/admin/item",
        active: false,
      },
      {
        id: "Edit Users",
        icon: <PeopleIcon />,
        link: "/admin/item",
        active: false,
      },
      {
        id: "Edit Sets",
        icon: <PhonelinkSetupIcon />,
        link: "/admin/item",
        active: false,
      },
    ],
  },
];

const drawerWidth = 256;

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{ flex: 1, py: 3, px: 3, bgcolor: "#eaeff1" }}
          >
            <AppRoutes />
          </Box>
          <Copyright />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
