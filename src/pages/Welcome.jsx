import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || 'Guest';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // Navigate after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-purple-600">
      <h1 className="text-5xl font-bold text-white animate-pulse">
        Welcome, {name}!
      </h1>

      <style jsx>{`
        h1 {
          animation: glow 1.5s infinite alternate;
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 10px #ffffff, 0 0 20px #ffcc00;
          }
          50% {
            text-shadow: 0 0 20px #ffcc00, 0 0 30px #ff6600;
          }
          100% {
            text-shadow: 0 0 10px #ffffff, 0 0 20px #ffcc00;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;