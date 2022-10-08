import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function JobCard(props) {

  return (
    <Card>
      <CardHeader
        title={`${props.title}`}
        subheader={`${props.location}`}
      />
      <CardMedia
        component="img"
        height="194px"
        image={`${props.img}`}
        alt={`Picture of ${props.img}`}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
            {props.skills[0]}, {props.skills[1]}, {props.skills[2]}
        </Typography>   
      </CardContent>
    </Card>
  );
}