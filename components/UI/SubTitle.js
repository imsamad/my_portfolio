import Typography from "@mui/material/Typography";

const SubTitle = ({ text }) => {
  return (
    <Typography
      variant="caption"
      align="center"
      component="h1"
      sx={{ fontWeight: 600 }}
      gutterBottom
    >
      {text}
    </Typography>
  );
};

export default SubTitle;
