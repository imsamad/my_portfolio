import { Container, Divider, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

import SkillCard from './SkillCard';
const skills = [
  {
    name: 'Frontend',
    list: [
      { label: 'React.js/Next.js', percentage: '90', icon: '' },
      { label: 'HTML/CSS', percentage: '90', icon: '' },
      { label: 'Next.js', percentage: '90', icon: '' },
    ],
  },
  {
    name: 'Backend',
    list: [
      { label: 'Node/Express', percentage: '90', icon: '' },
      { label: 'Firebase', percentage: '70', icon: '' },
      { label: 'CMS(Strapi)', percentage: '80', icon: '' },
    ],
  },
  {
    name: 'database',
    list: [
      { label: 'MongoDB', percentage: '90', icon: '' },
      { label: 'Firebase', percentage: '70', icon: '' },
      { label: 'MySql', percentage: '85', icon: '' },
    ],
  },
];
const index = () => {
  return (
    <Box
      component="section"
      id="skills"
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
          Why choose me
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
          My skills
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {skills.map((skill) => (
            <Grid key={skill.name} xs={12} sm={6} md={4} item>
              <SkillCard name={skill.name} list={skill.list} skill={skill} />
            </Grid>
          ))}
        </Grid>
        <Toolbar />
      </Container>
    </Box>
  );
};

export default index;
