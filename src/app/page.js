'use client';
import React, { useEffect } from 'react';
import { Container, Typography, Divider } from '@mui/material';
import PostList from './components/PostList';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchTitles } from '@/redux/reducers/titleSlice';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitles());
  }, [dispatch]);

  const titles = useSelector(
    (store) => store.root.titleReducer.titles,
    shallowEqual
  );
  const isLoading = useSelector((state) => state.root.titleReducer.isLoading);
  const error = useSelector((state) => state.root.titleReducer.error);

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

      <PostList
        titles={titles}
        isLoading={isLoading}
        error={error}
      />
    </Container>
  );
}
