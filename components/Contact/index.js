import { Container, Typography, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

const index = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ width: '100%', bgcolor: 'grey.100' }}
    >
      <Container fixed>
        <Divider />
        <Toolbar />

        <Typography variant="h1"> Contacts </Typography>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
