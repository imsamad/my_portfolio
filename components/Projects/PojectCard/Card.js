import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card
      sx={{
        bgcolor: 'inherit',
        boxShadow: 0,
        border: 0.5,
        borderRadius: 2,
        borderColor: 'info.main',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="/images/work/work1.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          MENN(Mongo + Express + Next.js + Node.js)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}
