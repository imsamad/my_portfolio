import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PhoneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailIcon from '@mui/icons-material/MailOutlineTwoTone';

import TwitterIcon from '@mui/icons-material/Twitter';
import Table from './Table';
const index = () => {
  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Typography
        variant="caption"
        align="center"
        component="h1"
        sx={{ fontWeight: 600 }}
        gutterBottom
      >
        My Intro
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        About Me
      </Typography>
      <Typography
        align="center"
        variant="body1"
        sx={{ fontSize: { md: '1.2rem' }, my: 4 }}
      >
        I am Abdus Samad, a full stack web developer focused on crafting great
        web experiences. Designing and Coding have been my passion since the
        days I started working with computers but I found myself into web
        design/development since 2007. I enjoy creating beautifully designed,
        intuitive and functional websites.
      </Typography>
      <Box sx={{ my: 4 }}>
        <Table />
      </Box>
    </Box>
  );
};
const Info = () => (
  <>
    <Typography variant="h5">Information</Typography>
    <Box sx={{ display: 'flex', my: 1, flexWrap: 'wrap' }}>
      <PhoneIcon color="info" />
      <Typography sx={{ mx: 2 }}>+91-9870645161</Typography>
    </Box>
    <Box sx={{ display: 'flex', my: 1, flexWrap: 'wrap' }}>
      <EmailIcon color="info" />
      <Typography sx={{ mx: 2 }} noWrap>
        asdevlpr1206@gmail.com
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', my: 1, flexWrap: 'wrap' }}>
      <TwitterIcon color="info" />
      <Typography sx={{ mx: 2 }}>imsamad06</Typography>
    </Box>
  </>
);
export default index;