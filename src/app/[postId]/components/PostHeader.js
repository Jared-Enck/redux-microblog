import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Votes from '@/app/components/Votes';

export default function PostHeader({
  postData,
  isSmall,
  setOpen,
  handleDelete,
}) {
  const { postId, title, description, votes } = postData;

  const handleEditClick = () => setOpen(true);

  return (
    <Grid
      container
      justifyContent={'space-between'}
    >
      <Grid
        item
        xs={8}
        md={10}
      >
        <Typography variant={isSmall ? 'h5' : 'h4'}>{title}</Typography>
        <Typography
          variant={isSmall ? 'h6' : 'h5'}
          color='primary.text'
          sx={{ fontStyle: 'italic' }}
          gutterBottom
        >
          {description}
        </Typography>
        <Votes
          postId={postId}
          votes={votes}
        />
      </Grid>

      <Grid
        item
        xs={4}
        md={2}
        sx={{
          marginBottom: 'auto',
          display: 'flex',
          justifyContent: isSmall ? 'space-around' : 'right',
        }}
      >
        <IconButton onClick={handleEditClick}>
          <EditNoteIcon
            fontSize={'large'}
            sx={{
              color: 'primary.text',
              '&:hover': { color: 'secondary.main' },
            }}
          />
        </IconButton>
        <IconButton onClick={() => handleDelete(postId)}>
          <DeleteForeverIcon
            sx={{
              color: 'primary.text',
              '&:hover': { color: 'error.main' },
              transform: 'scale(1.3)',
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}
