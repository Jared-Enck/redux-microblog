import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateVotes } from '@/redux/reducers/postSlice';
import { fetchTitles } from '@/redux/reducers/titleSlice';

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const { id, title, description, votes } = post;

  const handleClick = async (delta) => {
    await dispatch(updateVotes({ postId: id, delta }));
    dispatch(fetchTitles());
  };

  return (
    <Card
      sx={{
        bgcolor: 'primary.lightest',
        color: 'primary.text',
        transition: '150ms ease-out',
        '& .MuiCardHeader-subheader': {
          color: 'primary.text',
          fontStyle: 'italic',
        },
        '&:hover': {
          transform: 'scale(1.01)',
          transition: '150ms ease-in',
        },
      }}
    >
      <CardActionArea>
        <Link href={`/${id}`}>
          <CardHeader
            title={title}
            subheader={description}
          />
        </Link>
      </CardActionArea>
      <CardActions>
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
                  color: idx === 0 ? 'secondary.main' : 'error.main',
                  transition: '150ms ease-in',
                },
              }}
            >
              {i.icon}
            </IconButton>
          ))}
        </Stack>
      </CardActions>
    </Card>
  );
}
