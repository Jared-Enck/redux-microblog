import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function LoadingSpinner() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Typography
      color={'primary.text'}
      variant={isSmall ? 'h5' : 'h4'}
      sx={{
        textAlign: 'center',
      }}
    >
      Loading...
    </Typography>
  );
}
