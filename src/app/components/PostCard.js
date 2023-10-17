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
        '& .MuiCardHeader-subheader': {
          color: 'primary.muted',
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
