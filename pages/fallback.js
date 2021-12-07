import Typography from "@mui/material/Typography";
import SimpleNav from "../components/SimpleNav";
import Box from "@mui/system/Box";
const fallback = () => {
  return (
    <>
      <SimpleNav />
      <Box sx={{ p: 4 }}>
        <Typography align="center" variant="h2" gutterBottom>
          Unable to connect to the Internet.
        </Typography>
        <Typography align="center" variant="h3" color="error">
          You are offline.
        </Typography>
      </Box>
    </>
  );
};

export default fallback;
