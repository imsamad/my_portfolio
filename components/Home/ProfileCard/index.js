import React from 'react';
import { Button, Typography } from '@mui/material';

import { Box } from '@mui/system';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
const index = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: '3rem',
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
        sx={{ fontWeight: 600 }}
        align="center"
        color="info.dark"
        sx={{ mt: 2, fontSize: '1.5rem' }}
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: '1.5rem',
        }}
      >
        <IconButton size="small" sx={{ display: 'inline-block' }}>
          <TwitterIcon fontSize="small" color="info" />
        </IconButton>
        <IconButton size="small" sx={{ display: 'inline-block', mx: 2 }}>
          <PhoneIcon fontSize="small" color="info" />
        </IconButton>
        <IconButton size="small" sx={{ display: 'inline-block' }}>
          <EmailIcon fontSize="small" color="info" />
        </IconButton>
      </Box>
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
