import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import { PostAdd } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar
      component={'nav'}
      position='static'
      sx={{ bgcolor: 'primary.main' }}
    >
      <Container maxWidth='xl'>
        <Toolbar>
          <Link href={'/'}>
            <Typography sx={{ fontSize: '1.7rem', color: 'primary.text' }}>
              Blog
            </Typography>
          </Link>
          <Link
            href={'/new'}
            style={{ marginLeft: 'auto' }}
          >
            <IconButton>
              <PostAdd
                sx={{ color: 'primary.text', transform: 'scale(1.3)' }}
              />
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
