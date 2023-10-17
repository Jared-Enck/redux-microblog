'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Dialog,
  useMediaQuery,
  IconButton,
  Stack,
  Grid,
  Divider,
  Box,
} from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTheme } from '@emotion/react';
import PostForm from '../components/PostForm';

export default function PostView() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleEditClick = () => setOpen(true);

  const handleDeleteClick = () => console.log('deleting...');

  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={isSmall}
        sx={{
          '& .MuiPaper-root': {
            bottom: isSmall ? null : '15%',
            padding: '2rem',
            bgcolor: 'background.default',
          },
        }}
      >
        <PostForm
          type='Edit'
          setOpen={setOpen}
        />
      </Dialog>

      <Container maxWidth={'md'}>
        <Stack
          sx={{
            color: 'primary.text',
          }}
          spacing={5}
        >
          <Grid
            container
            justifyContent={'space-between'}
          >
            <Grid
              item
              xs={8}
              md={10}
            >
              <Typography
                variant={isSmall ? 'h5' : 'h4'}
                gutterBottom
              >
                Really Really Long Blog Title
              </Typography>
              <Typography
                variant={isSmall ? 'h6' : 'h5'}
                color='primary.muted'
                sx={{ fontStyle: 'italic' }}
              >
                Blog description
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              md={2}
              sx={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: isSmall ? 'space-around' : 'right',
              }}
            >
              <IconButton onClick={handleEditClick}>
                <EditNoteIcon
                  fontSize={'large'}
                  sx={{
                    color: 'primary.text',
                    '&:hover': { color: 'secondary.main' },
                  }}
                />
              </IconButton>
              <IconButton onClick={handleDeleteClick}>
                <DeleteForeverIcon
                  sx={{
                    color: 'primary.text',
                    '&:hover': { color: 'error.main' },
                    transform: 'scale(1.3)',
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>

          <Typography sx={{ fontSize: '1.2rem' }}>Blog body</Typography>

          <Stack spacing={2}>
            <Box>
              <Typography variant='h5'>Comments</Typography>
              <Divider sx={{ bgcolor: 'primary.light', margin: '1rem' }} />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
