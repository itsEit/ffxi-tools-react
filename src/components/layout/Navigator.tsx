import { Link, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import { ReactComponentElement, useEffect, useState } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

const Categories = [
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
interface NavigatorProps {
  PaperProps?: object;
  variant?: string;
  sx?: object;
  open?: boolean;
  onClose?: object;
  DrawerProps?: DrawerProps;
}

interface NavigationItems {
  id: string;
  children: [
    {
      id: string;
      icon: JSX.Element;
      link: string;
      active: boolean;
    }
  ];
}

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const [links, setLinks] = useState([...Categories]);
  const location = useLocation().pathname;

  useEffect(() => {
    const newPath = location;
    links.forEach((main) => {
      main.children.forEach((item) => {
        if (newPath === item.link) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    });
    setLinks([...links]);
  }, [location]);

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          FFXI-Tools
        </ListItem>

        {links.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 1, px: 2 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  selected={active}
                  sx={item}
                  to={link}
                  component={Link}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
