import { Stack, InputLabel } from '@mui/material';
import useFields from '@/app/hooks/useFields';
import { StyledInput, PrimaryButton } from '@/app/styled';

export default function CommentForm() {
  const initialState = {
    text: '',
  };
  const [formData, handleChange, setFormData] = useFields(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.text);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={1}
        display={'flex'}
      >
        <InputLabel>
          <StyledInput
            name='text'
            value={formData.text}
            onChange={handleChange}
            placeholder='New comment'
            required
          />
        </InputLabel>
        <PrimaryButton
          variant='contained'
          type='submit'
          sx={{
            width: '6rem',
          }}
        >
          Add
        </PrimaryButton>
      </Stack>
    </form>
  );
}
