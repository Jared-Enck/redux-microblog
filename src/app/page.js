'use client';
import React, { useEffect } from 'react';
import { Container, Typography, Divider } from '@mui/material';
import PostList from './components/PostList';
import { useSelector, shallowEqual } from 'react-redux';

export default function Home() {
  const posts = useSelector((store) => store.root.posts, shallowEqual);

  return (
    <Container maxWidth='lg'>
      <Typography
        variant='h4'
        gutterBottom
        sx={{ color: 'primary.text' }}
      >
        Recent Blogs
      </Typography>

      <Divider sx={{ bgcolor: 'primary.light', marginBottom: '1.5rem' }} />

      <PostList posts={Object.entries(posts)} />
    </Container>
  );
}
