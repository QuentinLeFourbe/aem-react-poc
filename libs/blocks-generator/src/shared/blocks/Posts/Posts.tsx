import { defineBlock } from 'eds-react-adapter';
import { useState, useEffect } from 'react';
import './Posts.css';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsProps {
  limit: number;
}

export function Posts({ limit }: PostsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Post[]>;
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  if (loading) {
    return <div className="posts-loading">Chargement...</div>;
  }

  if (error) {
    return <div className="posts-error">Erreur : {error}</div>;
  }

  return (
    <ul className="posts-grid">
      {posts.map((post) => (
        <li key={post.id} className="posts-item">
          <span className="posts-item-id">#{post.id}</span>
          <h3 className="posts-item-title">{post.title}</h3>
          <p className="posts-item-body">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default defineBlock(Posts, {
  decorate: (block): PostsProps => {
    // Optional: author can set a limit in the block (first cell)
    const limitText = block.querySelector(':scope > div > div')?.textContent?.trim();
    const limit = limitText ? parseInt(limitText, 10) : 10;
    return { limit: isNaN(limit) ? 10 : limit };
  },
});
