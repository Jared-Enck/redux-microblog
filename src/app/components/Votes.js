import { Stack, Typography, IconButton } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

export default function Votes({ handleClick, votes }) {
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
