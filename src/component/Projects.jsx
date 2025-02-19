import React from 'react';

const Projects = () => {
  return (
    <div className='p-6 bg-blue-300'>
      <h1 className='text-violet-500 text-6xl text-center pb-8 transform transition duration-300 hover:scale-105'>
        My Recent Works
      </h1>

      <div className='flex flex-wrap justify-center gap-8'>
        
        {/* Project 1 - Flash Games */}
        <div className='max-w-3xl bg-white rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105'>
          <h1 className='text-2xl font-bold p-2 mb-4'>
            <strong>Flash Games</strong> (July 2023 - November 2023)
          </h1>
          <ul className='space-y-3'>
            <li className="flex">
              <span>🎮</span>
              <span className="pl-2">Developed an interactive website featuring classic flash games like Sudoku, TicTacToe, Othello, and Minesweeper.</span>
            </li>
            <li className="flex">
              <span>🧩</span>
              <span className="pl-2">Implemented game AI using algorithms like Minimax, Alpha-Beta Pruning, Backtracking, and BFS for optimal gameplay.</span>
            </li>
            <li className="flex">
              <span>💡</span>
              <span className="pl-2">Used recursion for Sudoku board generation and game theory for strategic AI moves in Othello and TicTacToe.</span>
            </li>
            <li className="flex">
              <span>🌐</span>
              <span className="pl-2"><strong>Exposure</strong>: HTML5, CSS3, JavaScript, Data Structures & Algorithms.</span>
            </li>
          </ul>
        </div>

        {/* Project 2 - Food Delivery App */}
        <div className='max-w-3xl bg-white rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105'>
          <h1 className='text-2xl font-bold p-2 mb-4'>
            <strong>Food Delivery App</strong> (December 2023 - March 2024)
          </h1>
          <ul className='space-y-3'>
            <li className="flex">
              <span>🍕</span>
              <span className="pl-2">Developed a full-stack food delivery app with an intuitive UI, search functionality, and seamless order management.</span>
            </li>
            <li className="flex">
              <span>🛠</span>
              <span className="pl-2">Built the frontend using React with TailwindCSS for a clean, responsive design that adapts to all screen sizes.</span>
            </li>
            <li className="flex">
              <span>🛒</span>
              <span className="pl-2">Designed a secure backend with Node.js & Express to handle API requests and real-time data retrieval.</span>
            </li>
            <li className="flex">
              <span>📦</span>
              <span className="pl-2">Implemented MongoDB for efficient order and inventory management with real-time updates.</span>
            </li>
            <li className="flex">
              <span>🔐</span>
              <span className="pl-2">Integrated Google reCAPTCHA for enhanced security in the contact and authentication forms.</span>
            </li>
            <li className="flex">
              <span>🌐</span>
              <span className="pl-2"><strong>Exposure</strong>: React, Node.js, Express.js, MongoDB, Google reCAPTCHA.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Projects;
