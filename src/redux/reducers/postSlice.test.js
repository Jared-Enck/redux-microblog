import { store } from '../store';
import reducer, { addPost, removePost } from './postSlice';

const post1 = {
  id: '1p',
  post: {
    title: 'test title',
    description: 'test desc',
    body: 'test body',
    votes: {},
  },
};
const post2 = {
  id: '2p',
  post: {
    title: 'test title2',
    description: 'test desc2',
    body: 'test body2',
    votes: {},
  },
};

describe('Posts redux state tests for adding post', () => {
  it('Should initially set object of posts', () => {
    const state = store.getState().root.postsReducer;
    expect(state).toEqual({ posts: {}, isLoading: false, error: null });
  });

  it('Should add post', () => {
    const previousState = { posts: {}, isLoading: false, error: null };
    expect(reducer(previousState, addPost(post1))).toEqual({
      posts: { [post1.id]: post1.post },
      isLoading: false,
      error: null,
    });
  });
});

describe('Posts redux state tests for removing post', () => {
  it('Should remove post based on post id', () => {
    const previousState = {
      posts: { [post1.id]: post1.post, [post2.id]: post2.post },
      isLoading: false,
      error: null,
    };
    expect(reducer(previousState, removePost(post1.id))).toEqual({
      posts: { [post2.id]: post2.post },
      isLoading: false,
      error: null,
    });
  });
});
