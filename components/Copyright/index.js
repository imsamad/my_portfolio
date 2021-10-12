import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const index = () => {
  return (
    <Box
      component="section"
      id="copyright"
      sx={{ height: '40vh', width: '100%', bgcolor: 'secondary.main' }}
    >
      <Container fixed>
        <Typography variant="h1"> Copyright </Typography>
      </Container>
    </Box>
  );
};

export default index;
