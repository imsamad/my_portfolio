import { Container, Typography, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import ServiceCard from "./ServiceCard";

const index = ({ services }) => {
  return (
    <Box
      component="section"
      id="services"
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
          {services.subHeading}
        </Typography>
        <Typography
          align="center"
          gutterBottom
          color="info.light"
          sx={{
            pb: 1,
            fontSize: { xs: "1.5rem", mxs: "2rem" },
            fontWeight: 700,
          }}
        >
          {services.heading}
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
          {services.headline}
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {services.list.map((service) => (
            <Grid
              key={service.id || service._id || service.name}
              xs={12}
              sm={6}
              md={4}
              item
              sx={{ height: "100%" }}
            >
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
