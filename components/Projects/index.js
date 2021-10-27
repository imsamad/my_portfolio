import { Container, Typography, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

import PojectCard from './PojectCard';

const index = () => {
  return (
    <Box
      component="section"
      id="projects"
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
          My Portfolio
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="info.light"
          gutterBottom
          sx={{
            pb: 1,
            fontSize: { xs: '1.5rem', mxs: '2rem' },
            fontWeight: 700,
          }}
        >
          My Projects
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <PojectCard />
        </Grid>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
