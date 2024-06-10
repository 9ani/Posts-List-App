import React from 'react';
import Link from 'next/link';
import { Post } from '../types';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="p-4 border-b border-gray-300">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="text-sm">{post.body}</p>
      <Link href={`/posts/${post.id}`}>
        <span className="text-blue-500 hover:underline">Read more</span>
      </Link>
    </div>
  );
};

export default PostItem;
