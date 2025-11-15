import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/aboutus' && location.pathname === '/aboutus') return true;
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      scrolled ? 'bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-4">
          {/* Logo and Hamburger Menu */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link to="/" className="group">
              <h1 className="text-xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Vishal Kumar Singh
              </h1>
            </Link>
            {/* Hamburger Menu (Mobile Only) */}
            <button
              onClick={toggleMenu}
              className="text-white md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-5 items-center w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row gap-5 items-center">
              <li>
                <Link 
                  to="/" 
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-500 ease-in-out ${
                    isActive('/') 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link 
                  to="/aboutus" 
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-500 ease-in-out ${
                    isActive('/aboutus') 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-500 ease-in-out ${
                    isActive('/contact') 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-500 ease-in-out ${
                    isActive('/projects') 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  PROJECT
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1oQhsY1eXS6nez2IQwwmik5s9y5haj8xH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 transform hover:scale-110 hover:shadow-lg hover:rotate-1 transition-all duration-500 ease-in-out shadow-md"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex justify-end gap-4`}>
            <a 
              href="https://github.com/VishalSingh1431" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out p-2 rounded-lg hover:bg-gray-800/50"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vishal-singh1431/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out p-2 rounded-lg hover:bg-gray-800/50"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://wa.me/919794894561" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out p-2 rounded-lg hover:bg-gray-800/50"
            >
              <FaWhatsapp size={20} />
            </a>
            <a 
              href="https://www.instagram.com/_vishal1431/?igshid=ZDBuYmwxeDVkcHhx#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out p-2 rounded-lg hover:bg-gray-800/50"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
