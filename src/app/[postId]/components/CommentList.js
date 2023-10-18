import React from 'react';
import { Stack, Divider, Box, Typography } from '@mui/material';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

const comments = [
  { id: '1', text: 'dis a comment' },
  { id: '2', text: 'another one' },
  { id: '3', text: 'another one, again' },
];

export default function CommentList() {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant='h5'>Comments</Typography>
        <Divider sx={{ bgcolor: 'primary.light', margin: '1rem' }} />
      </Box>

      <Box>
        {comments.map((c, idx) => {
          const first = idx === 0 ? '.3rem .3rem 0rem 0rem' : null;
          const last =
            idx === comments.length - 1 ? '0rem 0rem .3rem .3rem' : null;
          return (
            <Box
              key={c.id}
              sx={{
                borderRadius: first || last,
                backgroundColor:
                  idx % 2 === 1 ? 'primary.light' : 'primary.lightest',
              }}
            >
              <CommentItem comment={c} />
            </Box>
          );
        })}
      </Box>
      <CommentForm />
    </Stack>
  );
}
