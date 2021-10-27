import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from './Card';
const index = () => {
  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card />
    </Grid>
  );
};

export default index;
