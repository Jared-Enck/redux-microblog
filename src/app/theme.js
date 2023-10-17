'use client';
import { createTheme } from '@mui/material';
import { green, blue, grey, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#10263a',
      main: '#09172f',
      dark: '#050b20',
      text: grey[100],
      muted: grey[500],
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    success: {
      main: green[500],
    },
    error: {
      main: red.A400,
    },
  },
});
