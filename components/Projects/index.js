import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

const index = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ height: '90vh', width: '100%', bgcolor: 'grey.300' }}
    >
      <Toolbar />
      <Container fixed>
        <Typography variant="h1"> Projects </Typography>
      </Container>
    </Box>
  );
};

export default index;
