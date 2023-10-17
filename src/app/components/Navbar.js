import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar
      position='static'
      sx={{ bgcolor: 'primary.main' }}
    >
      <Toolbar>
        <Link href={'/'}>
          <Typography sx={{ fontSize: '1.7rem', color: 'primary.text' }}>
            Blog
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
