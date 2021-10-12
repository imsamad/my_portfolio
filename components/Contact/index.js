import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const index = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ height: '90vh', width: '100%', bgcolor: 'primary.main' }}
    >
      <Container fixed>
        <Typography variant="h1"> Contact </Typography>
      </Container>
    </Box>
  );
};

export default index;
