import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const initialState = {
  post: {},
  isLoading: false,
  error: null,
};

export const fetchPost = createAsyncThunk(
  'post/fetchPost',
  async (postId, thunkAPI) => {
    try {
      return (await axios.get(`${BASE_URL}/api/posts/${postId}`)).data;
    } catch (err) {
      console.error('Error: ', err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const savePost = createAsyncThunk('post/addPost', async (post) => {
  try {
    return (await axios.post(`${BASE_URL}/api/posts`, post)).data;
  } catch (err) {
    console.error(err.response.data.message);
  }
});

export const editPost = createAsyncThunk(
  'post/editPost',
  async ({ postId, changes }) => {
    try {
      return (await axios.put(`${BASE_URL}/api/posts/${postId}`, changes)).data;
    } catch (err) {
      console.error(err.response.data.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (postId) => {
    try {
      return (await axios.delete(`${BASE_URL}/api/posts/${postId}`)).data;
    } catch (err) {
      console.error(err.response.data.message);
    }
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePost: (state, action) => {
      for (let key in action.payload) {
        state.post[key] = action.payload[key];
      }
    },
    resetErrors: (state) => {
      state.error = null;
    },
    default: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { updatePost, resetErrors } = postSlice.actions;

export default postSlice.reducer;
