import React from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardActions, CardHeader } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateVotes } from '@/redux/reducers/postSlice';
import { fetchTitles } from '@/redux/reducers/titleSlice';
import Votes from './Votes';

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
        <Votes
          handleClick={handleClick}
          votes={votes}
        />
      </CardActions>
    </Card>
  );
}
