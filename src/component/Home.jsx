import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
    <div className="h-fit flex flex-col items-center justify-center bg-blue-300">
      {/* Top Section - Text and Animation */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center sm:pl-10 sm:pt-10 md:pl-20 md:pt-20 pb-0">
        {/* Left Section - Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Hi There! 👋🏻
          </h1>
          <h1 className="flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white justify-center md:justify-start flex-wrap">
            <span className="whitespace-nowrap">I'M</span>
            <span className="text-blue-950 ml-2 whitespace-nowrap">VISHAL KUMAR SINGH</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-4">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1500,
                '',
                500,
                'MERN Stack Developer',
                1500,
                '',
                500,
                'Software Engineer',
                1500,
                '',
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
        
        {/* Right Section - Animation */}
        <div className="flex justify-center items-center md:w-1/2">
          <DotLottieReact
            src="https://lottie.host/72b42112-38e7-4200-8888-134817588d83/rMh1cR2eNh.lottie"
            loop
            autoplay
            className="w-full"
          />
        </div>
      </div> 
      {/* Bottom Section - Full Width Animation */}
      <div className="w-full">
        <DotLottieReact
          src="https://lottie.host/34c1b69b-6fa4-413d-bd1c-4288cd6e068e/iRJWVx7Oxt.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Home;