import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions  from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface UserProfileCardProps {
  name: string;
  avatar: string;
  onClick: () => void;
  buttonText: string;
}

export const UserProfileCard = (props: UserProfileCardProps) => {

  return (
    <Card>
      <CardMedia
        component="img"
        height="80"
        image={props.avatar}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="body2">
          <strong>
            {props.name}
          </strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={props.onClick}>
          {props.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};
