import { Grid, List, Typography } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import React from 'react';
import { Box } from '@mui/system';
import toCapitalise from '../../../lib/toCapitalise';
const index = ({ name, list }) => (
  <Grid xs={12} sm={6} md={4} item>
    <Box
      sx={{
        border: 0.5,
        borderRadius: 2,
        py: 2,
        borderColor: 'info.main',
      }}
    >
      <Typography align="center" variant="h6" color="info.main" gutterBottom>
        {toCapitalise(name)}
      </Typography>
      <List dense={true} sx={{ p: 0 }}>
        {list.map((list) => (
          <SingleCourse
            key={list.label}
            percentage={list.percentage}
            label={list.label}
          />
        ))}
      </List>
    </Box>
  </Grid>
);

const SingleCourse = ({ label, percentage }) => (
  <ListItem disablePadding secondaryAction={<>{percentage}%</>}>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon size="small" color="info" />
      </ListItemIcon>
      <ListItemText
        primary={label}
        secondary={
          <Typography
            sx={{
              height: 5,
              width: `${percentage}%`,
              bgcolor: 'info.main',
              mt: 0.5,
            }}
          />
        }
      />
    </ListItemButton>
  </ListItem>
);

export default index;
