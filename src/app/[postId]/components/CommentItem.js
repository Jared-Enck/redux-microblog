import React from 'react';
import {
  Typography,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
} from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

export default function CommentItem({ comment }) {
  const handleDeleteClick = (id) =>
    console.log('deleting comment: ', comment.id);
  return (
    <ListItem>
      <ListItemText>
        <Typography color={'primary.text'}>{comment.text}</Typography>
      </ListItemText>
      <ListItemIcon sx={{ justifyContent: 'right' }}>
        <IconButton onClick={() => handleDeleteClick(comment.id)}>
          <DeleteForever
            sx={{
              color: 'primary.text',
              '&:hover': { color: 'error.main' },
            }}
          />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
}
