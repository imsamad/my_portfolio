import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import PhoneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import EmailIcon from "@mui/icons-material/MailOutlineTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";

import Table from "./Table";
import Title from "../../UI/Title";
import SubTitle from "../../UI/SubTitle";

const index = ({ aboutMe }) => {
  return (
    <Box sx={{ pt: "2rem" }}>
      <SubTitle text="My Intro" />
      <Title text="About Me" />
      <Typography
        align="center"
        variant="body1"
        sx={{ fontSize: { md: "1.2rem" } }}
      >
        I am {` `}
        <span style={{ color: "#01579b", fontWeight: 700 }}>Abdus Samad</span>,
        {aboutMe}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Table />
      </Box>
    </Box>
  );
};

const Info = () => (
  <Box sx={{ maxWidth: 200, overflow: "auto", border: 2 }}>
    <Typography variant="h5">Information</Typography>
    <Box sx={{ display: "flex", my: 1, flexWrap: "wrap" }}>
      <PhoneIcon color="info" />
      <Typography sx={{ mx: 2 }}>+91-9870645161</Typography>
    </Box>
    <Box sx={{ display: "flex", my: 1, flexWrap: "wrap" }}>
      <EmailIcon color="info" />
      <Typography sx={{ mx: 2 }} noWrap>
        asdevlpr1206@gmail.com
      </Typography>
    </Box>
    <Box sx={{ display: "flex", my: 1, flexWrap: "wrap" }}>
      <TwitterIcon color="info" />
      <Typography sx={{ mx: 2 }}>imsamad06</Typography>
    </Box>
  </Box>
);
export default index;
