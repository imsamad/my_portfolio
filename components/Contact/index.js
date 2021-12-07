import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import SendIcon from "@mui/icons-material/Send";
import Chip from "@mui/material/Chip";

import TextField from "./TextField";
import SocialLinks from "../SocialLinks";
import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";
import Message from "../UI/Message";
import Layout from "../Layout";

const index = ({ contact }) => {
  return (
    <Layout id="contact">
      <SubTitle text={contact.subtitle} />
      <Title text={contact.title} />
      <Message text={contact.message} />
      <Box sx={{ maxWidth: "sm", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SocialLinks />
        </Box>
        <Divider>
          <Chip label="OR" />
        </Divider>
        <TextField label="Name" name="name" />
        <TextField label="Email" name="email" />
        <TextField label="Project" name="project" />
        <TextField label="Message" name="message" multiline rows={4} />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          color="info"
          disableElevation
          sx={{ borderRadius: 4, py: 0.75, mt: 1 }}
        >
          Send Message
        </Button>
      </Box>
    </Layout>
  );
};

export default index;
