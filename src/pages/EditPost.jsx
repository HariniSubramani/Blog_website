import React, { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { blogs, updateBlog } = useContext(BlogContext);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const [title, setTitle] = useState(blog?.title || '');
  const [description, setDescription] = useState(blog?.description || '');
  const [content, setContent] = useState(blog?.content || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog({ id: parseInt(id), title, description, content });
    navigate('/home');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 mb-4 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 mb-4 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
