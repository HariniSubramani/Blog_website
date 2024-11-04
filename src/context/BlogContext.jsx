import { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const defaultBlogs = [
    {
      id: 1,
      title: 'Learning React',
      author: 'Harini Subramaniam',
      date: '10/02/2023, 2:15 PM',
      description: 'Basics of React for beginners',
      content: 'React is a JavaScript library for building user interfaces...',
      image: null,
    },
    {
      id: 2,
      title: 'React State Management',
      author: 'Dharani Subramaniam',
      date: '09/30/2023, 11:00 AM',
      description: 'Understanding state in React',
      content: 'State management is essential for building dynamic apps...',
      image: null,
    },
  ];

  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : defaultBlogs;
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    const newBlog = {
      ...blog,
      id: Date.now(), // Generate a unique ID based on timestamp
      author: blog.author || 'Unknown Author',
      date: blog.date || new Date().toLocaleString(),
    };
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const deleteBlog = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
