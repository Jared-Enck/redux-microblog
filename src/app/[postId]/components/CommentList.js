import React from 'react';
import { Stack, Divider, Box, Typography } from '@mui/material';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import { useSelector, shallowEqual } from 'react-redux';

export default function CommentList() {
  const comments = useSelector(
    (store) => store.root.postReducer.post.comments,
    shallowEqual
  );
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant='h5'>Comments</Typography>
        <Divider sx={{ bgcolor: 'primary.light', margin: '1rem' }} />
      </Box>

      <Box sx={{ height: '30vh', overflow: 'auto' }}>
        {comments.length ? (
          comments.map((c, idx) => {
            const first = idx === 0 ? '.3rem .3rem 0rem 0rem' : null;
            const last =
              idx === comments.length - 1 ? '0rem 0rem .3rem .3rem' : null;
            const solo = comments.length === 1 ? '.3rem' : null;
            return (
              <Box
                key={c.id}
                sx={{
                  borderRadius: solo || first || last,
                  backgroundColor:
                    idx % 2 === 1 ? 'primary.light' : 'primary.lightest',
                }}
              >
                <CommentItem
                  comment={c}
                  idx={idx}
                />
              </Box>
            );
          })
        ) : (
          <Typography
            variant='h6'
            sx={{ fontStyle: 'italic', padding: 1 }}
          >
            No comments yet...
          </Typography>
        )}
      </Box>

      <Box>
        <Divider sx={{ bgcolor: 'primary.light', margin: '1rem' }} />
      </Box>

      <CommentForm />
    </Stack>
  );
}
