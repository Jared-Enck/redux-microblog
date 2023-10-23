import { Grid, Typography } from '@mui/material';
import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';

export default function PostList({ titles = [], isLoading, error }) {
  if (error) error;
  return (
    <Grid
      container
      spacing={2}
      justifyContent={'space-around'}
    >
      {!isLoading ? (
        titles.map((t) => (
          <Grid
            key={t.id}
            item
            xs={12}
            sm={5}
          >
            <PostCard post={t} />
          </Grid>
        ))
      ) : (
        <Grid item>
          <LoadingSpinner />
        </Grid>
      )}
    </Grid>
  );
}
