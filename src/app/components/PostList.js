import { Grid, Typography } from '@mui/material';
import PostCard from './PostCard';

export default function PostList({ posts = [] }) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={'space-around'}
    >
      {posts.length ? (
        posts.map((p) => (
          <Grid
            key={p[0]}
            item
            xs={12}
            sm={5}
          >
            <PostCard post={p} />
          </Grid>
        ))
      ) : (
        <Grid item>
          <Typography
            variant='h5'
            color={'primary.text'}
          >
            Loading...
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
