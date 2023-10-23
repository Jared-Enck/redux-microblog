import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const initialState = {
  titles: [],
  isLoading: false,
  error: null,
};

export const fetchTitles = createAsyncThunk(
  'titles/fetchTitles',
  async (thunkAPI) => {
    try {
      return (await axios(`${BASE_URL}/api/posts`)).data;
    } catch (err) {
      console.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const titleSlice = createSlice({
  name: 'titles',
  initialState,
  reducers: {
    default: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTitles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTitles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.titles = action.payload;
    });
    builder.addCase(fetchTitles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default titleSlice.reducer;
