import { Stack, Typography, IconButton } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { updateVotes, upVote, downVote } from '@/redux/reducers/postSlice';
import { updateTitleVotes } from '@/redux/reducers/titleSlice';

export default function Votes({ postId, votes }) {
  const dispatch = useDispatch();

  const currentPostId = useSelector((store) => store.root.postReducer.post.id);

  const handleClick = async (delta) => {
    await dispatch(updateVotes({ postId, delta }));
    if (currentPostId === Number(postId)) {
      const actions = {
        up: upVote(),
        down: downVote(),
      };
      dispatch(actions[delta]);
    }
    dispatch(updateTitleVotes({ postId, delta }));
  };

  return (
    <Stack
      direction={'row'}
      spacing={1}
      marginLeft={'auto'}
    >
      <Typography alignSelf={'center'}>{votes} votes</Typography>
      {[
        { delta: 'up', icon: <ThumbUp /> },
        { delta: 'down', icon: <ThumbDown /> },
      ].map((i, idx) => (
        <IconButton
          key={i.delta}
          onClick={() => handleClick(i.delta)}
          sx={{
            color: 'primary.text',
            transition: '150ms ease-out',
            '&:hover': {
              bgcolor: 'primary.light',
              color: idx === 0 ? 'success.main' : 'error.main',
              transition: '150ms ease-in',
            },
          }}
        >
          {i.icon}
        </IconButton>
      ))}
    </Stack>
  );
}
