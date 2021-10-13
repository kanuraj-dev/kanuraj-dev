import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "components/navigation/Topbar";
import Sidebar from "components/navigation/Sidebar";
import darkBg from "assets/image/bubble-animated-background.svg";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface LayoutProps {
  theme: any;
  colorMode: any;
  children: React.ReactNode;
}

export default function Layout({
  theme,
  colorMode,
  children,
  ...props
}: LayoutProps) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage:
          theme.palette.mode === "dark"
            ? "linear-gradient(-90deg, rgb(2, 28, 53) 0%, rgb(12, 19, 41) 0%, rgb(0, 18, 39) 42.86%)"
            : "linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          backgroundImage: `url('${darkBg}')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        {...props}
      >
        <CssBaseline />
        <Topbar
          open={open}
          theme={theme}
          colorMode={colorMode}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Sidebar
          open={open}
          theme={theme}
          handleDrawerClose={handleDrawerClose}
        />
        <Main open={open}>
          {/* <DrawerHeader /> */}
          {children}
        </Main>
      </Box>
    </div>
  );
}
