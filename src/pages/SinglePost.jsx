import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const SinglePost = () => {
  const { blogs, deleteBlog } = useContext(BlogContext);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  if (!blog) {
    return <div>Post not found!</div>;
  }

  const handleDelete = () => {
    deleteBlog(blog.id);
    navigate('/');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg mb-4">{blog.description}</p>
      <p className="text-gray-700 text-base mb-6">{blog.content}</p>
      <div className="mt-6">
        <Link to={`/edit/${blog.id}`} className="text-indigo-600 hover:underline mr-4">
          Edit
        </Link>
        <button onClick={handleDelete} className="text-red-600 hover:underline">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
