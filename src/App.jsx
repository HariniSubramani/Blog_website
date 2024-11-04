import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import SinglePost from './pages/SinglePost';
import BlogProvider from './context/BlogContext';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login'; 
import Welcome from './pages/Welcome'; 

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/welcome'; 

  return (
    <div className="min-h-screen flex flex-col">
    
      {!hideHeaderFooter && <Header />}
      <main className="container mx-auto p-4 flex-grow">
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/welcome" element={<Welcome />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/blog/:id" element={<SinglePost />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
    
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <AppLayout />
      </Router>
    </BlogProvider>
  );
};

export default App;