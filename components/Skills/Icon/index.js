import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

const index = ({ Icon, text, color }) => {
  return (
    <Box sx={{ mr: 2, mt: 2 }}>
      <Icon style={{ fontSize: "4rem", color: color }} />
      <Typography sx={{ fontWeight: 700 }} variant="subtitle2" align="center">
        {text}
      </Typography>
    </Box>
  );
};

export default index;
