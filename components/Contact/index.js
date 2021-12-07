import { Container, Typography, Divider, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import TextField from "./TextField";
import SendIcon from "@mui/icons-material/Send";
import SocialLinks from "../SocialLinks";
import Chip from "@mui/material/Chip";
const index = ({ contact }) => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ width: "100%", bgcolor: "grey.100", pt: 1 }}
    >
      <Container fixed>
        <Divider />
        <Toolbar />
        <Typography
          variant="caption"
          align="center"
          component="h1"
          sx={{ fontWeight: 600 }}
        >
          {contact.subHeading}
        </Typography>
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
          {contact.heading}
        </Typography>
        <Typography
          sx={{
            maxWidth: "sm",
            textAlign: "center",
            mx: "auto",
            letterSpacing: 2,
            mb: 2,
          }}
        >
          {" "}
          {contact.headline}
        </Typography>
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
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
