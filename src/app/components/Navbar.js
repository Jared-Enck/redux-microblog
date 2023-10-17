import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { PostAdd } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar
      position='static'
      sx={{ bgcolor: 'primary.main' }}
    >
      <Toolbar sx={{ display: 'flex' }}>
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
            <PostAdd sx={{ color: 'primary.text' }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
