import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Achievements = () => {
  return (
    <div>
        <div className="bg-blue-300 py-12 px-8 flex justify-center">
      <div className="w-full max-w-6xl bg-white shadow-lg p-6 rounded-lg flex flex-wrap gap-2">
        <div className="flex-1 min-w-[30%] p-4 bg-gray-50 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
          <p className="text-2xl font-bold text-blue-700">2000+</p>
          <p className="text-gray-600">DSA Problems Solved</p>
        </div>
        <div className="flex-1 min-w-[30%] p-4 bg-gray-50 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
          <p className="text-2xl font-bold text-blue-700">100+</p>
          <p className="text-gray-600">Times Secured Under 100 Rankings</p>
        </div>
        <div className="flex-1 min-w-[30%] p-4 bg-gray-50 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
          <p className="text-2xl font-bold text-blue-700">5</p>
          <p className="text-gray-600">Freelance+ Internship</p>
        </div>
        <div className="flex-1 min-w-[30%] p-4 bg-gray-50 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
          <p className="text-2xl font-bold text-blue-700">Rated 4006</p>
          <p className="text-gray-600">Grand Master on Coding Ninjas</p>
        </div>
        <div className="flex-1 min-w-[30%] p-4 bg-gray-50 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
          <p className="text-2xl font-bold text-blue-700">Rated 1461</p>
          <p className="text-gray-600">Specialist on Codeforces</p>
        </div>
        <div className="flex-1 min-w-[30%] p-4 bg-gray-50 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 ">
          <p className="text-2xl font-bold text-blue-700">Rated 2106</p>
          <p className="text-gray-600 ">5 Star on GFG</p>
        </div>
      </div>
       
    </div>
    <div className="flex justify-center scale-170 h-[200px] md:h-[300px] lg:h-[400px]">
  <DotLottieReact
    src="https://lottie.host/34c1b69b-6fa4-413d-bd1c-4288cd6e068e/iRJWVx7Oxt.lottie"
    loop
    autoplay
  />
</div>
    </div>
  );
};

export default Achievements;