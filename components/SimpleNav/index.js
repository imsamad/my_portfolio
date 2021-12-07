import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";

const index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "info.light", color: "#fff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/">
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.light",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "none",
                letterSpacing: 2,
                mr: 2,
                fontSize: 16,
              }}
              disableElevation
              size="small"
            >
              imsamad.com
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default index;
