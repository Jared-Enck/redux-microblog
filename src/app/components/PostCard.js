import React from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardHeader } from '@mui/material';

export default function PostCard({ post }) {
  const { id, title, description } = post;
  return (
    <Card
      sx={{
        bgcolor: 'primary.lightest',
        color: 'primary.text',
        transition: '150ms ease-out',
        '& .MuiCardHeader-subheader': {
          color: 'primary.muted',
        },
        '&:hover': {
          transform: 'scale(1.03)',
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
    </Card>
  );
}
