import { Stack, Typography, IconButton } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateVotes } from '@/redux/reducers/postSlice';
import { fetchTitles } from '@/redux/reducers/titleSlice';

export default function Votes({ postId, votes }) {
  const dispatch = useDispatch();

  const handleClick = async (delta) => {
    await dispatch(updateVotes({ postId, delta }));
    dispatch(fetchTitles());
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
