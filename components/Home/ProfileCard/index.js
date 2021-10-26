import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DownloadIcon from '@mui/icons-material/Download';

import SocialLinks from '../../SocialLinks';

const index = () => {
  return (
    <Box
      sx={{
        py: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          overflow: 'hidden',
          border: 1,
          borderColor: 'info.dark',
        }}
      >
        <img
          // src="https://randomuser.me/api/portraits/men/75.jpg"
          src="/images/abdussamad.jpg"
          width="100%"
          height="100%"
        />
      </Box>
      <Typography
        variant="h6"
        component="h1"
        align="center"
        color="info.dark"
        sx={{ mt: 2, fontSize: '1.5rem', fontWeight: 600 }}
      >
        Abdus Samad
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        gutterBottom
        color="info.dark"
      >
        Full Stack Developer
      </Typography>
      <SocialLinks />
      <Button
        variant="contained"
        color="info"
        disableElevation
        startIcon={<DownloadIcon />}
      >
        Resume
      </Button>
    </Box>
  );
};

export default index;
