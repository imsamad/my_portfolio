import Fab from "@mui/material/Fab";
import Box from "@mui/system/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const index = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 30, right: 20, zIndex: 100 }}>
      <Fab color="primary" size="medium" onClick={() => window.scrollTo(0, 0)}>
        <ArrowUpwardIcon size="medium" />
      </Fab>
    </Box>
  );
};

export default index;
