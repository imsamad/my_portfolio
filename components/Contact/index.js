import { Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const index = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ height: '90vh', width: '100%', bgcolor: 'grey.400' }}
    >
      <Toolbar />
      <Container fixed>
        <Typography variant="h1"> Contact </Typography>
      </Container>
    </Box>
  );
};

export default index;
