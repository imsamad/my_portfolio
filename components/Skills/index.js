import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const index = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ height: '90vh', width: '100%', bgcolor: 'success.main' }}
    >
      <Container fixed>
        <Typography variant="h1"> Skills </Typography>
      </Container>
    </Box>
  );
};

export default index;
