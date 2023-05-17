import axios from 'axios';
import { Alert } from 'react-native';
import { IPost, IPrePost } from '../types';

const codeleap = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

codeleap.interceptors.response.use(
  response => response.data,
  error => {
    Alert.alert(
      'Ops 😟',
      'An error ocurred, prease check your internet connection and try again.',
    );
    return Promise.reject(error);
  },
);

export const getPosts = (offset = 0) =>
  codeleap.get(`careers/?limit=20&offset=${offset}`);

export const createPost = (post: IPrePost) => codeleap.post('careers/', post);

export const updatePost = (post: IPost) =>
  codeleap.patch(`careers/${post.id}/`, {
    title: post.title,
    content: post.content,
  });

export const deletePost = (postId: number) =>
  codeleap.delete(`careers/${postId}`);
