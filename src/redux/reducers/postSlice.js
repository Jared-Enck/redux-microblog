import { createSlice } from '@reduxjs/toolkit';

const post1 = {
  id: '1p',
  post: {
    title: 'test title',
    description: 'test desc',
    body: 'test body',
    comments: {},
  },
};
const post2 = {
  id: '2p',
  post: {
    title: 'test title2',
    description: 'test desc2',
    body: 'test body2',
    comments: {},
  },
};

const initialState = { [post1.id]: post1.post, [post2.id]: post2.post };

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state[action.payload.id] = action.payload.post;
    },

    removePost: (state, action) => {
      delete state[action.payload];
    },

    updatePost: (state, action) => {
      const changes = action.payload.changes;
      for (let key in changes) {
        state[action.payload.postId][key] = changes[key];
      }
    },

    default: (state) => {
      return state;
    },
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;

export default postSlice.reducer;
