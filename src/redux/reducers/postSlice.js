import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const initialState = {
  post: {},
  isLoadingPost: false,
  isLoadingComments: false,
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

export const addComment = createAsyncThunk(
  'post/addComment',
  async ({ postId, payload }, thunkAPI) => {
    try {
      return (
        await axios.post(`${BASE_URL}/api/posts/${postId}/comments`, payload)
      ).data;
    } catch (err) {
      console.error('Error: ', err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchComments = createAsyncThunk(
  'post/fetchComments',
  async (postId, thunkAPI) => {
    try {
      return (await axios.get(`${BASE_URL}/api/posts/${postId}/comments`)).data;
    } catch (err) {
      console.error('Error: ', err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  'post/deleteComment',
  async ({ postId, commentId }, thunkAPI) => {
    try {
      return (
        await axios.delete(
          `${BASE_URL}/api/posts/${postId}/comments/${commentId}`
        )
      ).data;
    } catch (err) {
      console.error('Error: ', err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateVotes = createAsyncThunk(
  'post/updateVotes',
  async ({ postId, delta }) => {
    try {
      return (await axios.post(`${BASE_URL}/api/posts/${postId}/vote/${delta}`))
        .data;
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
    upVote: (state) => {
      state.post.votes += 1;
    },
    downVote: (state) => {
      state.post.votes -= 1;
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
      state.isLoadingPost = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoadingPost = false;
      state.post = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isLoadingPost = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoadingComments = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoadingComments = false;
      state.post.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoadingComments = false;
      state.error = action.error.message;
    });
  },
});

export const { updatePost, upVote, downVote, resetErrors } = postSlice.actions;

export default postSlice.reducer;
