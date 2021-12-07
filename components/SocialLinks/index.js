import Link from "@mui/material/Link";
import Box from "@mui/system/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const index = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        my: "0.5rem",
      }}
    >
      <MyLink Icon={TwitterIcon} href="https://twitter.com/imsamad06" />
      <MyLink Icon={PhoneIcon} href="tel:9870645161" />
      <MyLink Icon={EmailIcon} href="mailto:imsamad00@gmail.com" />
      <MyLink Icon={GitHubIcon} href="https://github.com/imsamad" />
    </Box>
  );
};
const MyLink = ({ href, Icon }) => (
  <Link href={href} target="_blank" rel="noopener" sx={{ mr: 1 }}>
    <IconButton size="small" sx={{ display: "inline-block" }}>
      <Icon fontSize="small" color="info" />
    </IconButton>
  </Link>
);
export default index;
