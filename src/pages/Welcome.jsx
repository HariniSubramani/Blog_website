// pages/Welcome.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = ({ user }) => {
  const navigate = useNavigate();

  // Redirect to the Home page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-indigo-700 animate-clean-boom">
        Welcome, {user}!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4 animate-clean-fade">
        We're thrilled to have you here 🎉
      </p>
    </div>
  );
};

export default Welcome;
