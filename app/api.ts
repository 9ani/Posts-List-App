import createAxiosInstance from './axiosInstance';
import { Post } from './types';

export const fetchPosts = async (authToken: string | null): Promise<Post[]> => {
  const axiosInstance = createAxiosInstance(authToken);
  const response = await axiosInstance.get('/posts');
  return response.data.posts;
};

export const fetchPostById = async (id: number, authToken: string | null): Promise<Post> => {
  const axiosInstance = createAxiosInstance(authToken);
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};
