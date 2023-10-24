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
      const { data } = await axios(`${BASE_URL}/api/posts`);
      return data.sort((a, b) => a.votes - b.votes).reverse();
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
    updateTitle: (state, action) => {
      state.titles.filter((t) => {
        if (t.id === Number(action.payload.postId)) {
          t.title = action.payload.changes.title;
          t.description = action.payload.changes.description;
        }
      });
    },
    updateTitleVotes: (state, action) => {
      let currentIdx;
      const titles = state.titles;
      titles.filter((t, idx) => {
        if (t.id === Number(action.payload.postId)) {
          currentIdx = idx;
        }
      });
      action.payload.delta === 'up'
        ? (titles[currentIdx].votes += 1)
        : (titles[currentIdx].votes -= 1);

      const currentVotes = titles[currentIdx].votes;

      if (titles[currentIdx - 1]) {
        if (titles[currentIdx - 1].votes < currentVotes) {
          for (let i = currentIdx; i > 0; i--) {
            if (titles[i - 1]) {
              if (titles[i - 1].votes < currentVotes) {
                const temp = titles[i - 1];
                titles[i - 1] = titles[i];
                titles[i] = temp;
              }
            }
          }
        }
      }
      if (titles[currentIdx + 1]) {
        if (titles[currentIdx + 1].votes > currentVotes) {
          for (let i = currentIdx; i < titles.length; i++) {
            if (titles[i + 1]) {
              if (titles[i + 1].votes > currentVotes) {
                const temp = titles[i + 1];
                titles[i + 1] = titles[i];
                titles[i] = temp;
              }
            }
          }
        }
      }
    },
    removeTitle: (state, action) => {
      state.titles.filter((t) => t.id !== action.payload);
    },
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

export const { updateTitle, updateTitleVotes, removeTitle } =
  titleSlice.actions;

export default titleSlice.reducer;
