import { Container, Grid, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProfileCard from "./ProfileCard";
import Intro from "./Intro";

const index = ({ intro }) => {
  const { aboutMe, ...rest } = intro;
  return (
    <Box
      component="section"
      id="home"
      sx={{ width: "100%", bgcolor: "grey.100" }}
    >
      <Toolbar />
      <Container fixed>
        <Grid container>
          <Grid item xs={12} md={4}>
            <ProfileCard intro={rest} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Intro aboutMe={aboutMe} />
          </Grid>
        </Grid>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
