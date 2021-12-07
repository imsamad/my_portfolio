import Typography from "@mui/material/Typography";
const Message = ({ text, extra }) => {
  return (
    <Typography
      sx={{
        maxWidth: "sm",
        textAlign: "center",
        mx: "auto",
        letterSpacing: 2,
        mb: 2,
      }}
    >
      {text} {` `}
      {extra && extra}
    </Typography>
  );
};

export default Message;
