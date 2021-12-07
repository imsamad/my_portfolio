import { Container, Typography, Divider, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Toolbar from "@mui/material/Toolbar";

import PojectCard from "./PojectCard";

const index = ({ projects }) => {
  return (
    <Box
      component="section"
      id="projects"
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
          {projects.subHeading}
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="info.light"
          gutterBottom
          sx={{
            pb: 1,
            fontSize: { xs: "1.5rem", mxs: "2rem" },
            fontWeight: 700,
          }}
        >
          {projects.heading}
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
          {projects.headline}{" "}
          <Link href="https://github.com/imsamad" target="_blank">
            Github.
          </Link>
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {projects.list.map((project) => (
            <PojectCard project={project} key={project.id || project._id} />
          ))}
        </Grid>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
