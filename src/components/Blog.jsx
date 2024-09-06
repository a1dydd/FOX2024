import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BOX from '../assets/BOX.jpg'; // Default image or placeholder

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog posts from WordPress REST API with embedded media
    axios.get('http://43.216.138.235/blog/wp-json/wp/v2/posts?_embed=true')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='pt-[90px] pb-[300px]'>
      <h1 className='px-[110px] pb-[50px] font-bold text-4xl'>Blog</h1>

      <div className='flex'>
        <div className='pl-[40px] pr-[130px] w-[290px]'>
          <p className='font-bold text-xl'>Latest Posts</p>
          <ul className='flex flex-col gap-5 pt-[20px] text-md'>
            {posts.map(post => (
              <li key={post.id}>
                <a href={`/blog/${post.id}`}>{post.title.rendered}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className='flex flex-wrap gap-[70px]'>
            {posts.map(post => (
              <li key={post.id} className='w-[500px]'>
                <img
                  src={post._embedded && post._embedded['wp:featuredmedia'] 
                    ? post._embedded['wp:featuredmedia'][0].source_url 
                    : BOX}
                  alt={post.title.rendered}
                  className='h-[300px] w-[500px] object-cover'
                />
                <div className='pt-[40px]'>
                  <p className='pb-[10px] font-bold text-xl'>{post.title.rendered}</p>
                  <p className='text-lg' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <a href={`/blog/${post.id}`} className='text-blue-500'>Read more...</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
