import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiPostsResponse, IPostState, RootState } from '../types';
import { getPosts } from '../services/codeleap';

const initialState: IPostState = {
  posts: [],
  offset: 0,
  status: 'idle',
};

export const fetchPosts = createAsyncThunk<
  ApiPostsResponse,
  void,
  { state: RootState }
>('posts/fetchPosts', async (_, { getState }) => {
  const currentOffset = getState().posts.offset;

  try {
    return await getPosts(currentOffset);
  } catch (e) {
    return e.message;
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    editPost: (state, action) => {
      state.posts = state.posts.map(post => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    },
    resetOffset: state => {
      state.offset = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success';
        state.posts =
          state.offset === 0
            ? (state.posts = action.payload.results)
            : [...state.posts, ...action.payload.results];
        state.offset += 20;
      })
      .addCase(fetchPosts.rejected, state => {
        state.status = 'error';
      });
  },
});

export const getAllPosts = (state: RootState) => state.posts.posts;
export const getPostsStatus = (state: RootState) => state.posts.status;

export const { addPost, editPost, removePost, resetOffset } =
  postsSlice.actions;

export default postsSlice.reducer;
