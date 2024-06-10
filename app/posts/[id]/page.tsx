"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import createAxiosInstance from '@/app/axiosInstance';

interface PostProps {
  params: {
    id: string;
  };
}

const PostPage: React.FC<PostProps> = async ({ params }) => {
  const { id } = params;

  let post;
  try {
    const axiosInstance = createAxiosInstance(null);
    const response = await axiosInstance.get(`/posts/${id}`);
    post = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-lg w-full space-y-8">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">{post.title}</h2>
        <p className="mt-4 text-gray-600">{post.body}</p>
      </div>
    </div>
  </div>
  );
};

export default PostPage;
