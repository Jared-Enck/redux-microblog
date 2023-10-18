'use client';
import React from 'react';
import Link from 'next/link';
import { Typography, FormLabel, Stack, Button, Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { StyledInput, PrimaryButton } from '../styled';
import useFields from '../hooks/useFields';
import { useDispatch } from 'react-redux';
import { addPost } from '@/redux/reducers/postSlice';
import { useRouter } from 'next/navigation';
import uuid from 'react-uuid';

const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.lightest,
  borderColor: theme.palette.primary.lightest,
  '&:hover': {
    color: theme.palette.primary.text,
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function PostForm({ type = 'New', setOpen }) {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const initialState = {
    title: '',
    description: '',
    body: '',
  };
  const [formData, handleChange] = useFields(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'New') {
      const payload = { id: uuid(), post: formData };
      dispatch(addPost(payload));
      push('/');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={2}
        width={'530px'}
        sx={{
          color: 'primary.text',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        }}
      >
        <Typography variant='h4'>{type} Post</Typography>

        {['title', 'description', 'body'].map((input, idx) => {
          const label = input.charAt(0).toUpperCase() + input.slice(1);

          return (
            <Box key={idx}>
              <FormLabel
                htmlFor={input}
                sx={{ color: 'primary.text' }}
              >
                {label}
              </FormLabel>
              <StyledInput
                name={input}
                value={formData[input]}
                onChange={handleChange}
                multiline={idx === 2}
                rows={idx === 2 ? 5 : null}
                required
                autoFocus={idx === 0}
              />
            </Box>
          );
        })}

        <Stack
          direction='row'
          spacing={1}
        >
          <PrimaryButton
            variant='contained'
            type='submit'
          >
            Save
          </PrimaryButton>

          {type === 'Edit' ? (
            <CancelButton
              onClick={handleClose}
              variant='outlined'
            >
              Cancel
            </CancelButton>
          ) : (
            <Link href={'/'}>
              <CancelButton variant='outlined'>Cancel</CancelButton>
            </Link>
          )}
        </Stack>
      </Stack>
    </form>
  );
}
