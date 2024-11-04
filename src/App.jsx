// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import SinglePost from './pages/SinglePost';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import BlogProvider from './context/BlogContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage login state
  const [user, setUser] = useState(''); // Track the logged-in user’s name

  // Private route wrapper to restrict access if not authenticated
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <BlogProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="container mx-auto p-4 flex-grow">
            <Routes>
              {/* Login Route */}
              <Route
                path="/login"
                element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />}
              />

              {/* Welcome Route */}
              <Route path="/welcome" element={<Welcome user={user} />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoute>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <CreatePost />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <PrivateRoute>
                    <EditPost />
                  </PrivateRoute>
                }
              />
              <Route
                path="/blog/:id"
                element={
                  <PrivateRoute>
                    <SinglePost />
                  </PrivateRoute>
                }
              />

              {/* Not Found Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
};

export default App;
