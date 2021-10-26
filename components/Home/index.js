import { Container, Grid, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ProfileCard from './ProfileCard';
import Intro from './Intro';
const index = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{ minHeight: '90vh', width: '100%', bgcolor: 'grey.50' }}
    >
      <Toolbar />
      <Container fixed>
        <Grid container>
          <Grid item xs={12} md={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <Intro />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default index;
