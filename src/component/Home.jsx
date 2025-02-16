import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
    <div>
        <div className="bg-blue-300 w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 sm:p-10 md:p-20">
      
      {/* Left Section - Text */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Hi There! 👋🏻
        </h1>
        <h1 className="flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white justify-center md:justify-start">
          I'M <span className="text-blue-950 ml-2">VISHAL KUMAR SINGH</span>
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
          style={{ width: '300px', height: '300px' }}
        />
      </div>
     
    </div>
     
     <div> 
      
    <DotLottieReact
      src="https://lottie.host/34c1b69b-6fa4-413d-bd1c-4288cd6e068e/iRJWVx7Oxt.lottie"
      loop
      autoplay
      style={{ width: 'full'  }}
    /> 
       </div>
    </div>
  );
};

export default Home;
