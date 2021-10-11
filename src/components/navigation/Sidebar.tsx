import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { grey } from "@mui/material/colors";
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import navOptions from "data/navOptions";

const drawerWidth = 240;

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const NavLink = styled(
  RouterNavLink,
  {}
)<NavLinkProps>(({ theme }) => ({
  width: 150,
  color: "inherit",
  textDecoration: "none",
}));

interface SidebarProps {
  theme: any;
  open: boolean;
  handleDrawerClose: () => void;
}

export default function Sidebar({
  theme,
  open,
  handleDrawerClose,
}: SidebarProps) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          background: theme.palette.mode === "dark" ? grey[900] : "",
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navOptions.map((option, index) => (
          <NavLink
            to={option.to}
            activeStyle={{
              background: "rgba(255,255,255,0.15)",
            }}
          >
            <ListItem
              button
              key={option.label}
              style={{ background: "inherit" }}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.label} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
}
