'use client';
import React, { useState, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import {
  Container,
  Typography,
  Dialog,
  useMediaQuery,
  Stack,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import PostForm from '../components/PostForm';
import PostHeader from './components/PostHeader';
import CommentList from './components/CommentList';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchPost, deletePost, resetErrors } from '@/redux/reducers/postSlice';
import { fetchTitles } from '@/redux/reducers/titleSlice';
import { useRouter } from 'next/navigation';

export default function PostView() {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const { postId } = useParams();

  const post = useSelector(
    (store) => store.root.postReducer.post,
    shallowEqual
  );
  const isLoading = useSelector((state) => state.root.postReducer.isLoading);
  const error = useSelector((state) => state.root.postReducer.error);

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    await dispatch(deletePost(postId));
    await dispatch(fetchTitles());
    push('/');
  };

  useEffect(() => {
    if (!Object.keys(post) || post.id !== Number(postId))
      dispatch(fetchPost(postId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetErrors());
  }, [path]);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={isSmall}
        sx={{
          '& .MuiPaper-root': {
            bottom: isSmall ? null : '15%',
            padding: '2rem',
            bgcolor: 'background.default',
          },
        }}
      >
        <PostForm
          type='Edit'
          setOpen={setOpen}
          postData={{ postId, post }}
        />
      </Dialog>

      <Container maxWidth={'md'}>
        <Stack
          sx={{
            color: 'primary.text',
          }}
          spacing={5}
        >
          {isLoading || (!post.title && !error) ? (
            <Typography
              variant={isSmall ? 'h5' : 'h4'}
              sx={{
                textAlign: 'center',
              }}
            >
              Loading...
            </Typography>
          ) : error ? (
            <Typography
              variant={isSmall ? 'h5' : 'h4'}
              sx={{
                textAlign: 'center',
              }}
            >
              Sorry, can't find the post you're looking for.
            </Typography>
          ) : (
            <>
              <PostHeader
                postData={{
                  postId,
                  title: post.title,
                  description: post.description,
                }}
                isSmall={isSmall}
                setOpen={setOpen}
                handleDelete={handleDelete}
              />

              <Typography sx={{ fontSize: '1.2rem' }}>{post.body}</Typography>

              <CommentList comments={post.comments} />
            </>
          )}
        </Stack>
      </Container>
    </>
  );
}
