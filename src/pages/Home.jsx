import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Blog Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <div 
              key={blog.id} 
              className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {blog.image ? (
                <img src={URL.createObjectURL(blog.image)} alt={blog.title} className="h-48 w-full object-cover" />
              ) : (
                <div className="h-48 bg-gray-300"></div> 
              )}

              <div className="px-6 py-4">
                <h2 className="font-bold text-2xl mb-2 text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-700 text-base mb-4">{blog.description}</p>
                <p className="text-gray-600 text-sm"><strong>Author:</strong> {blog.author}</p>
                <p className="text-gray-600 text-sm"><strong>Date:</strong> {blog.date}</p>
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="inline-block text-indigo-500 hover:text-indigo-700 font-semibold transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No blog posts available. Please create one!</p>
        )}
      </div>

      <div className="text-center mt-10">
        <Link 
          to="/create" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Create New Post
        </Link>
      </div>
    </div>
  );
};

export default Home;
