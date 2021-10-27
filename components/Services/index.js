import { Container, Typography, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import ServiceCard from './ServiceCard';

const services = [
  {
    label: 'Full-stack Web Hosting',

    description:
      'This service I provide is of high qualit and above all full of experience in this field.',
    icon: '',
  },
  {
    label: 'Full-stack E-commerce Development',
    description:
      'This service I provide is of high qualit and above all full of experience in this field.',
    icon: '',
  },
  {
    label: 'API Development',
    description:
      'This service I provide is of high qualit and above all full of experience in this field.',
    icon: '',
  },
  {
    label: 'Frontend Development',
    description:
      'This service I provide is of high qualit and above all full of experience in this field.',
    icon: '',
  },
  {
    label: 'Full-Stack Development',
    description:
      'This service I provide is of high qualit and above all full of experience in this field.',
    icon: '',
  },
];

const index = () => {
  return (
    <Box
      component="section"
      id="services"
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
          What I Offer
        </Typography>
        <Typography
          align="center"
          gutterBottom
          color="info.light"
          sx={{
            pb: 1,
            fontSize: { xs: '1.5rem', mxs: '2rem' },
            fontWeight: 700,
          }}
        >
          My Services
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service) => (
            <Grid
              key={service.label}
              xs={12}
              sm={6}
              md={4}
              item
              sx={{ height: '100%' }}
            >
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default index;
