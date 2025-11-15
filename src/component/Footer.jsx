import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Vishal Kumar Singh
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Software Engineer • Tech Lead • Competitive Programmer • Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyan-400 hover:translate-x-1 transition-all duration-500 ease-in-out text-sm inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-300 hover:text-cyan-400 hover:translate-x-1 transition-all duration-500 ease-in-out text-sm inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-cyan-400 hover:translate-x-1 transition-all duration-500 ease-in-out text-sm inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 hover:translate-x-1 transition-all duration-500 ease-in-out text-sm inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/vishal-singh1431" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out p-2 rounded-lg hover:bg-gray-800/50"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/VishalSingh1431" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out p-2 rounded-lg hover:bg-gray-800/50"
              >
                <FaGithub size={20} />
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
                href="https://www.instagram.com/_vishal1431?igshid=ZDBuYmwxeDVkcHhx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-cyan-400 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out p-2 rounded-lg hover:bg-gray-800/50"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 All rights reserved. | Designed by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Vishal Kumar Singh
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
