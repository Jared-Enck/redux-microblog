import React from 'react';
import { Container, Typography, Divider, Grid } from '@mui/material';
import PostCard from './components/PostCard';

const blog1 = {
  id: '1A1B',
  title: 'blog1',
  description: 'blog1 desc',
  body: 'blah blah blah',
};

const blog2 = {
  id: '2A2B',
  title: 'blog2',
  description: 'blog2 desc',
  body: 'blah blah blah',
};

const blogs = [blog1, blog2];

export default function Home() {
  return (
    <Container maxWidth='lg'>
      <Typography
        variant='h3'
        sx={{ color: 'primary.text' }}
      >
        Recent Blogs
      </Typography>

      <Divider sx={{ bgcolor: 'primary.light', margin: '1.5rem' }} />

      <Grid
        container
        spacing={2}
        justifyContent={'space-around'}
      >
        {blogs.map((b) => (
          <Grid
            key={b.id}
            item
            xs={12}
            sm={5}
          >
            <PostCard post={b} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
