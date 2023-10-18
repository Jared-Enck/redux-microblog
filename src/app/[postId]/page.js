'use client';
import React, { useState } from 'react';
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

export default function PostView() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

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
        />
      </Dialog>

      <Container maxWidth={'md'}>
        <Stack
          sx={{
            color: 'primary.text',
          }}
          spacing={5}
        >
          <PostHeader
            isSmall={isSmall}
            setOpen={setOpen}
          />

          <Typography sx={{ fontSize: '1.2rem' }}>Blog body</Typography>

          <CommentList />
        </Stack>
      </Container>
    </>
  );
}
