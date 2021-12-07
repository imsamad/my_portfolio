import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import SideNavbar from "../SideNavbar";
import NavLink from "../NavLink";
const index = () => {
  const [sideNav, setSideNav] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSideNav(open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "info.light", color: "#fff" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 2 }}
          >
            imsamad.
          </Typography>
          <Box sx={{ display: { sm: "flex", xs: "flex", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { sm: "none", xs: "none", md: "flex" } }}>
            <NavLink href="#home" label="AboutMe" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#services" label="Services" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="ContactMe" />
          </Box>
        </Toolbar>
      </AppBar>
      <SideNavbar open={sideNav} toggleDrawer={toggleDrawer} />
    </Box>
  );
};
export default index;
