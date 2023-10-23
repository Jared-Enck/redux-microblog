import { Stack, InputLabel } from '@mui/material';
import useFields from '@/app/hooks/useFields';
import { StyledInput, PrimaryButton } from '@/app/styled';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchComments } from '@/redux/reducers/postSlice';

export default function CommentForm() {
  const dispatch = useDispatch();
  const initialState = {
    text: '',
  };
  const [formData, handleChange, setFormData] = useFields(initialState);

  const postId = useSelector((store) => store.root.postReducer.post.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.text);
    await dispatch(addComment({ postId, payload: { ...formData } }));
    await dispatch(fetchComments(postId));
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
