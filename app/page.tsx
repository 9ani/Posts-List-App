"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import createAxiosInstance from './axiosInstance';
import { useAuth } from './context/AuthContext';
import PostList from './components/PostList';

const Home: React.FC = () => {
  const { isAuthenticated, authToken } = useAuth();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const axiosInstance = createAxiosInstance(authToken);
        const response = await axiosInstance.get('/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    if (!isAuthenticated) {
      router.push('/login');
    } else {
      fetchPosts();
    }
  }, [isAuthenticated, authToken, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostList posts={posts} />
    </main>
  );
};

export default Home;
