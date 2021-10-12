import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const index = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ height: '90vh', width: '100%', bgcolor: 'info.main' }}
    >
      <Container fixed>
        <Typography variant="h1"> Projects </Typography>
      </Container>
    </Box>
  );
};

export default index;
