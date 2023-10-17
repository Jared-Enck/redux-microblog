'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Typography,
  TextField,
  FormLabel,
  Stack,
  Button,
  alpha,
} from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../theme';

const SaveButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.text,
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.8),
  },
}));

const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.lightest,
  borderColor: theme.palette.primary.lightest,
  '&:hover': {
    color: theme.palette.primary.text,
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function PostForm({ type = 'New' }) {
  const initialState = {
    title: '',
    description: '',
    body: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
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
            <div key={idx}>
              <FormLabel
                htmlFor={input}
                sx={{ color: 'primary.text' }}
              >
                {label}
              </FormLabel>
              <TextField
                name={input}
                value={formData[input]}
                onChange={handleChange}
                multiline={idx === 2}
                rows={idx === 2 ? 5 : null}
                required
                sx={{
                  width: '100%',
                  bgcolor: 'primary.light',
                  borderRadius: 1,
                  '& .MuiInputBase-input': {
                    color: 'primary.text',
                  },
                }}
              />
            </div>
          );
        })}
        <Stack
          direction='row'
          spacing={1}
        >
          <SaveButton
            variant='contained'
            type='submit'
          >
            Save
          </SaveButton>
          <Link href={'/'}>
            <CancelButton variant='outlined'>Cancel</CancelButton>
          </Link>
        </Stack>
      </Stack>
    </form>
  );
}
