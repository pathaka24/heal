import * as React from 'react';
import styles from './serviceList.module.css'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServiceList(props) {
  return (
    <Link href={`/service/${props.id}`}>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="300"
        image= {props.imgUrl}
        alt={props.serviceName}
        className={styles.imgCon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.serviceName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {props.des}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="large">Read More</Button>
      </CardActions>
    </Card>
    </Link>
  );
}
