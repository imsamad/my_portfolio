import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SocialLinks from '../SocialLinks';
const index = () => {
  return (
    <Box
      component="section"
      id="copyright"
      sx={{
        width: '100%',
        bgcolor: '#96c8e3',
        py: '2rem',
        px: '1rem',
        align: 'center',
      }}
    >
      <Container fixed>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            color="grey.1000"
            sx={{ fontSize: '1.5rem', fontWeight: 700 }}
          >
            Abdus Samad
          </Typography>
          <Typography align="center" sx={{ mb: 2 }}>
            I m Abdus Samad and this is my personal website , consult me here.
          </Typography>
          <SocialLinks />
          <Typography variant="body2" sx={{ mt: 2 }}>
            All right reserved by Abdus Samad - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
