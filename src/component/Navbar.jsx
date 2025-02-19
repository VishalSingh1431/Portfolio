import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 bg-blue-500 h-auto md:h-25 justify-between items-center p-3 px-4 md:px-20">
        {/* Logo and Hamburger Menu */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-white text-lg font-bold">Vishal Kumar Singh</h1>
          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-5 text-gray-200 items-center w-full md:w-auto`}
        >
          <ul className=" flex flex-col md:flex-row gap-5 items-center">
            <li className="hover:text-white cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/AboutUs">ABOUT</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/projects">PROJECT</Link>
            </li>
            <li>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                <a
                  href="https://drive.google.com/file/d/1oQhsY1eXS6nez2IQwwmik5s9y5haj8xH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </button>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex justify-end gap-4 p-10`}>
          <a href="https://github.com/VishalSingh1431" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vishal-singh1431/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.instagram.com/_vishal1431/?igshid=ZDBuYmwxeDVkcHhx#" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;