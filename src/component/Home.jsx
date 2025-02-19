import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
 
import Internship from './Internship';
import Achievements from './Container1';
import Contact from './Contact';
import About from './About'; 
 
const Home = () => {
  return (
    <div className="h-fit flex flex-col items-center justify-center bg-blue-300 max-w-full overflow-hidden">
      {/* Top Section - Text and Animation */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center sm:pl-10 sm:pt-10 md:pl-20 md:pt-20 pb-0 max-w-full">
        {/* Left Section - Text */}
        <div className="text-center md:text-left md:w-1/2 max-w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-full">
            Hi There! 👋🏻
          </h1>
          <h1 className="flex text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white justify-center md:justify-start flex-wrap max-w-full">
            <span className="whitespace-nowrap">I'M</span>
            <span className="text-blue-950 ml-2 whitespace-nowrap">VISHAL KUMAR SINGH</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-4 max-w-full">
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
        <div className="flex justify-center items-center md:w-1/2 max-w-full">
          <DotLottieReact
            src="https://lottie.host/72b42112-38e7-4200-8888-134817588d83/rMh1cR2eNh.lottie"
            loop
            autoplay
            className="w-full max-w-full"
          />
        </div>
      </div>  
      <Achievements/>
      <About/>
      <Internship/>
      <Contact/> 
    </div>
  );
};

export default Home;
