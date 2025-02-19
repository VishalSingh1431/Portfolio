import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-500 text-white text-center py-4 ">
      <p className="text-sm">
        © 2025 All rights reserved. | Designed by Vishal Kumar Singh
        <a 
          href="https://www.linkedin.com/in/vishal-singh1431" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:underline ml-2"
        >
          <FaLinkedin className="inline mr-1" />
          LinkedIn
        </a> 
        | 
        <a 
          href="https://www.instagram.com/_vishal1431?igshid=ZDBuYmwxeDVkcHhx" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:underline ml-2"
        >
          <FaInstagram className="inline mr-1" />
          Instagram
        </a>
      </p>
    </div>
  );
};

export default Footer;
