import { Container, Typography, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

import ServiceCard from './ServiceCard';

const index = () => {
  return (
    <Box
      component="section"
      id="services"
      sx={{ width: '100%', bgcolor: 'grey.100' }}
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
          What I Offer
        </Typography>
        <Typography variant="h4" align="center" gutterBottom sx={{ pb: 1 }}>
          My Services
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <ServiceCard />
        </Grid>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
