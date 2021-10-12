import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const index = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{ height: '90vh', width: '100%', bgcolor: 'warning.main' }}
    >
      <Container fixed>
        <Typography variant="h1"> Home </Typography>
      </Container>
    </Box>
  );
};

export default index;
