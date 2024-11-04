import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; 
import { MdClose } from "react-icons/md"; 
import { FaSignOutAlt } from "react-icons/fa"; 

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
 
    navigate("/"); 
  };

  return (
    <header
      className={`relative p-5 shadow-lg transition-all duration-500 ease-in-out ${
        isHovered
          ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          : "bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-semibold text-white ">
          STHD Blogs
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleSidebar} aria-label="Toggle menu">
            {isSidebarOpen ? (
              <MdClose className="text-white text-3xl transition-transform duration-300 hover:scale-125" />
            ) : (
              <FiMenu className="text-white text-3xl transition-transform duration-300 hover:scale-125" />
            )}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-10 transition-all">
          <li>
            <Link
              to="/home"
              className="relative text-lg font-semibold text-white tracking-wide transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
            >
              Home
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-yellow-300 scale-x-0 transition-transform duration-300 ease-out hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="relative text-lg font-semibold text-white tracking-wide transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
            >
              Create Post
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-yellow-300 scale-x-0 transition-transform duration-300 ease-out hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative text-lg font-semibold text-white tracking-wide transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
            >
              About
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-yellow-300 scale-x-0 transition-transform duration-300 ease-out hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative text-lg font-semibold text-white tracking-wide transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
            >
              Contact
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-yellow-300 scale-x-0 transition-transform duration-300 ease-out hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center text-lg font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
            >
              <FaSignOutAlt className="mr-2" /> {/* Logout icon */}
              Logout
            </button>
          </li>
        </ul>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-indigo-700 transform transition-transform duration-500 ease-in-out z-40 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <MdClose />
          </button>
          <ul className="flex flex-col items-center mt-16 space-y-8">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="text-lg font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
                onClick={toggleSidebar}
              >
                Create Post
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
                onClick={toggleSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
                onClick={toggleSidebar}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center text-lg font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
                onClick={toggleSidebar}
              >
                <FaSignOutAlt className="mr-2" /> 
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </header>
  );
};

export default Header;