import {
  Typography,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
} from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, fetchComments } from '@/redux/reducers/postSlice';

export default function CommentItem({ comment }) {
  const dispatch = useDispatch();

  const postId = useSelector((store) => store.root.postReducer.post.id);

  const handleDeleteClick = async () => {
    await dispatch(deleteComment({ postId, commentId: comment.id }));
    await dispatch(fetchComments(postId));
  };
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
