import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function PostHeader({ isSmall, setOpen }) {
  const handleEditClick = () => setOpen(true);

  const handleDeleteClick = () => console.log('deleting...');
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
        <Typography
          variant={isSmall ? 'h5' : 'h4'}
          gutterBottom
        >
          Really Really Long Blog Title
        </Typography>
        <Typography
          variant={isSmall ? 'h6' : 'h5'}
          color='primary.muted'
          sx={{ fontStyle: 'italic' }}
        >
          Blog description
        </Typography>
      </Grid>

      <Grid
        item
        xs={4}
        md={2}
        sx={{
          marginTop: 'auto',
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
        <IconButton onClick={handleDeleteClick}>
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
