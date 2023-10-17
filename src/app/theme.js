'use client';
import { createTheme } from '@mui/material';
import { green, blue, grey, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    background: {
      default: '#050b20',
    },
    primary: {
      lightest: '#203a49',
      light: '#10263a',
      main: '#09172f',
      dark: '#050b20',
      text: grey[100],
      muted: grey[500],
    },
    secondary: {
      main: '#3b4d4a',
    },
    success: {
      main: green[500],
    },
    error: {
      main: red.A400,
    },
  },
});
