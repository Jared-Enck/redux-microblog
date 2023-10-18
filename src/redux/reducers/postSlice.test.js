import { store } from '../store';
import reducer, { addPost, removePost } from './postSlice';

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

describe('Posts redux state tests for adding post', () => {
  it('Should initially set empty object', () => {
    const state = store.getState().root.postsReducer;
    expect(state).toEqual({});
  });

  it('Should add post', () => {
    const previousState = {};
    expect(reducer(previousState, addPost(post1))).toEqual({
      [post1.id]: post1.post,
    });
  });
});

describe('Posts redux state tests for removing post', () => {
  it('Should remove post based on post id', () => {
    const previousState = { [post1.id]: post1.post, [post2.id]: post2.post };
    expect(reducer(previousState, removePost(post1.id))).toEqual({
      [post2.id]: post2.post,
    });
  });
});
