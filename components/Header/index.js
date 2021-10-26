import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: 'info.light' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <NavLink href="#home" label="AboutMe" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="ContactMe" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default index;
const NavLink = ({ href, label }) => (
  <Link href={href} underline="none">
    <Button
      sx={{
        color: '#fff',
        fontWeight: '7  00',
        textTransform: 'none',
        letterSpacing: '2px',
        mr: 2,
        fontSize: 16,
      }}
    >
      {label}
    </Button>
  </Link>
);
