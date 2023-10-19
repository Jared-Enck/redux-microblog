'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
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
import { useSelector, shallowEqual } from 'react-redux';

export default function PostView() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const { postId } = useParams();
  const posts = useSelector((store) => store.root.posts, shallowEqual);

  const post = posts[postId];

  const handleClose = () => setOpen(false);

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
          {post ? (
            <>
              <PostHeader
                post={post}
                isSmall={isSmall}
                setOpen={setOpen}
              />

              <Typography sx={{ fontSize: '1.2rem' }}>{post.body}</Typography>

              <CommentList comments={post.comments} />
            </>
          ) : (
            <Typography
              variant={isSmall ? 'h5' : 'h4'}
              sx={{
                textAlign: 'center',
              }}
            >
              Sorry, can't find the post you're looking for.
            </Typography>
          )}
        </Stack>
      </Container>
    </>
  );
}
