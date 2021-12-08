import Typography from "@mui/material/Typography";
const Message = ({ text, extra }) => {
  return (
    <Typography
      sx={{
        maxWidth: "sm",
        textAlign: "center",
        mx: "auto",
        letterSpacing: 1,
        fontStyle: "italic",
        my: 6,
      }}
    >
      {text} {` `}
      {extra && extra}
    </Typography>
  );
};

export default Message;
