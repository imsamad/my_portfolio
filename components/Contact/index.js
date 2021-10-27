import { Container, Typography, Divider, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import TextField from './TextField';
import SendIcon from '@mui/icons-material/Send';
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
        <Typography
          variant="caption"
          align="center"
          component="h1"
          sx={{ fontWeight: 600 }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="info.light"
          sx={{
            pb: 1,
            fontSize: { xs: '1.5rem', mxs: '2rem' },
            fontWeight: 700,
          }}
        >
          Get In Touch
        </Typography>
        <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
          <TextField label="Name" name="name" />
          <TextField label="Email" name="email" />
          <TextField label="Project" name="project" />
          <TextField label="Message" name="message" multiline rows={4} />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="info"
            disableElevation
            sx={{ borderRadius: 4, py: 0.75, mt: 1 }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
