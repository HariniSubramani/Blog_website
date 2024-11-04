import React, { useState, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date().toLocaleString();

    // Basic validation to check if all fields are filled
    if (!title || !description || !content || !author) {
      alert('Please fill in all fields');
      return;
    }

    // Add the blog post
    addBlog({ title, description, content, author, date, image });

    // Redirect to the home page after creating a post
    navigate('/home'); // Redirecting to the Home component
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Create New Post</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto" encType="multipart/form-data">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          className="w-full p-2 mb-4 border rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Thumbnail</label>
          <div className="mt-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Thumbnail Preview" className="w-32 h-32 object-cover rounded-lg" />
            </div>
          )}
        </div>

        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;