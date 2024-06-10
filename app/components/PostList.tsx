import Link from 'next/link';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <span className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
