import React from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardActions, CardHeader } from '@mui/material';
import Votes from './Votes';

export default function PostCard({ post }) {
  const { id, title, description, votes } = post;

  return (
    <Card
      sx={{
        bgcolor: 'primary.lightest',
        color: 'primary.text',
        transition: '150ms ease-out',
        '& .MuiCardHeader-subheader': {
          color: 'primary.text',
          fontStyle: 'italic',
        },
        '&:hover': {
          transform: 'scale(1.01)',
          transition: '150ms ease-in',
        },
      }}
    >
      <CardActionArea>
        <Link href={`/${id}`}>
          <CardHeader
            title={title}
            subheader={description}
          />
        </Link>
      </CardActionArea>
      <CardActions>
        <Votes
          postId={id}
          votes={votes}
        />
      </CardActions>
    </Card>
  );
}
