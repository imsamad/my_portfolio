import Divider from "@mui/material/Divider";
import Box from "@mui/system/Box";
import Chip from "@mui/material/Chip";

import SocialLinks from "../SocialLinks";
import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";
import Message from "../UI/Message";
import Layout from "../Layout";
import Form from "./Form";
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
        <Form />
      </Box>
    </Layout>
  );
};

export default index;
