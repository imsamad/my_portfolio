import Typography from "@mui/material/Typography";
const Title = ({ text }) => {
  return (
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      color="info.light"
      sx={{
        pb: 1,
        fontSize: { xs: "1.5rem", mxs: "2rem" },
        fontWeight: 700,
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
