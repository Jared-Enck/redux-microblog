import styled from '@emotion/styled';
import { TextField, Button, alpha } from '@mui/material';

export const StyledInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.light,
  borderRadius: '.3rem',
  '& .MuiInputBase-root': {
    border: '2px solid transparent',
    transition: '150ms ease-out',
    color: theme.palette.primary.text,
    '&:hover': {
      backgroundColor: theme.palette.primary.lightest,
      borderRadius: '.3rem',
      border: `2px solid ${theme.palette.secondary.main}`,
      transition: '150ms ease-in',
    },
  },
  '& .Mui-focused': {
    backgroundColor: theme.palette.primary.lightest,
    borderRadius: '.3rem',
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.text,
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.8),
  },
}));
