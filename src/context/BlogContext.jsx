import { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs
      ? JSON.parse(savedBlogs)
      : [
          {
            id: 1,
            title: 'Learning React',
            author: 'Harini subramaniam', 
            date: '10/02/2023, 2:15 PM', 
            description: 'Basics of React for beginners',
            content: 'React is a JavaScript library for building user interfaces...',
            image: null, 
          },
          {
            id: 2,
            title: 'React State Management',
            author: 'Dharani subramaniam', 
            date: '09/30/2023, 11:00 AM', 
            description: 'Understanding state in React',
            content: 'State management is essential for building dynamic apps...',
            image: null, 
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {

    const newBlog = { 
        ...blog, 
        id: blogs.length + 1,
        author: blog.author || 'Unknown Author', 
        date: blog.date || new Date().toLocaleString() 
    };
    setBlogs([...blogs, newBlog]);
};

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
