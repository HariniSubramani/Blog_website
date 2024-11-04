// pages/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic
    if (username.trim() && password === 'password') {
      setIsAuthenticated(true); // Set user as authenticated
      setUser(username); // Store the username
      navigate('/welcome'); // Redirect to the welcome page
    } else {
      alert('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
      <form
        className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full"
        onSubmit={handleLogin}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-600">Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="password"
          placeholder="Password (try 'password')"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
