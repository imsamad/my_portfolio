import { Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import Toolbar from '@mui/material/Toolbar';
const index = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ height: '90vh', width: '100%', bgcolor: 'grey.50' }}
    >
      <Container fixed>
        <Divider />
        <Toolbar />
        <Typography variant="h1"> Skills </Typography>
      </Container>
    </Box>
  );
};

export default index;
