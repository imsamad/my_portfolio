import { Container, Divider, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Toolbar from "@mui/material/Toolbar";

import SkillCard from "./SkillCard";

const index = ({ skills }) => {
  return (
    <Box
      component="section"
      id="skills"
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
          Why choose me
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
          My skills
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {skills.list.map((skill) => (
            <Grid
              key={skill?.id || skill?._id || skill?.name}
              xs={12}
              sm={6}
              md={4}
              item
            >
              <SkillCard skill={skill} />
            </Grid>
          ))}
        </Grid>
        <Toolbar />
      </Container>
    </Box>
  );
};

export default index;
