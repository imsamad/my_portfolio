import Link from "@mui/material/Link";
import Box from "@mui/system/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const index = ({ iconLg }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        my: "0.5rem",
      }}
    >
      <MyLink
        Icon={TwitterIcon}
        href="https://twitter.com/imsamad06"
        iconLg={iconLg}
      />
      <MyLink Icon={PhoneIcon} href="tel:+919870645161" iconLg={iconLg} />
      <MyLink
        Icon={EmailIcon}
        href="mailto:imsamad00@gmail.com"
        iconLg={iconLg}
      />
      <MyLink
        Icon={GitHubIcon}
        href="https://github.com/imsamad"
        iconLg={iconLg}
      />
      <MyLink
        Icon={LinkedInIcon}
        href="https://www.linkedin.com/in/imsamad/"
        iconLg={iconLg}
      />
    </Box>
  );
};

const MyLink = ({ href, Icon, iconLg }) => (
  <Link href={href} target="_blank" rel="noopener" sx={{ mr: 2, mb: 2 }}>
    <IconButton
      size="small"
      sx={{ display: "inline-block", bgcolor: "grey.200", p: 1 }}
    >
      <Icon fontSize={iconLg ? "large" : "small"} color="info" />
    </IconButton>
  </Link>
);
export default index;
