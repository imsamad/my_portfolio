import { Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import AboutMeIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/RememberMe";
import ServicesIcon2 from "@mui/icons-material/VolunteerActivism";
import SkillsIcon from "@mui/icons-material/MiscellaneousServices";
import ProjectIcon from "@mui/icons-material/Source";

const lisItems = [
  { label: "About Me", icon: <AboutMeIcon />, link: "#home" },
  { label: "Skills", icon: <SkillsIcon />, link: "#skills" },
  { label: "Service", icon: <ServicesIcon2 />, link: "#services" },
  { label: "Projects", icon: <ProjectIcon />, link: "#projects" },
  { label: "ContactMe", icon: <ContactsIcon />, link: "#contact" },
];

export default function SideBarNav({ open, toggleDrawer }) {
  const list = (
    <Box
      sx={{
        width: 250,
      }}
      role="navbar"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        subheader={
          <ListSubheader inset={true}>
            <CardActionArea>
              <Link href="#home" sx={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  component="h1"
                  color="info.light"
                  sx={{ py: 1 }}
                >
                  imsamad.
                </Typography>
              </Link>
            </CardActionArea>
          </ListSubheader>
        }
      >
        <Divider />
        {lisItems.map((item) => (
          <Fragment key={item.label}>
            <Link href={item.link} underline="none" color="inherit">
              <ListItem button key={item.label}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {list}
    </Drawer>
  );
}
