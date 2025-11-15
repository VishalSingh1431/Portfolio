import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
 
import Internship from './Internship';
import Achievements from './Container1';
import Contact from './Contact';
import About from './About'; 
 
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const leftTextRef = useRef(null);
  const rightAnimRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftTextRef.current) observer.observe(leftTextRef.current);
    if (rightAnimRef.current) observer.observe(rightAnimRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <div className={`min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Left Section - Text */}
              <div 
                ref={leftTextRef}
                className="text-center md:text-left md:w-1/2 space-y-4 slide-in-from-left relative z-[100]"
              >
                <div className="inline-block relative mb-4 group/header">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse group-hover/header:opacity-40 group-hover/header:scale-110 transition-all duration-700 ease-in-out"></div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative group-hover/header:scale-105 transition-transform duration-500 ease-in-out">
                    Hi There! 👋🏻
                  </h1>
                </div>
                
                <h1 className="flex flex-col md:flex-row text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white items-center md:items-start justify-center md:justify-start gap-2 group/name">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/name:scale-110 transition-transform duration-500 ease-in-out inline-block">I'M</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover/name:scale-110 group-hover/name:drop-shadow-lg transition-all duration-500 ease-in-out inline-block">VISHAL KUMAR SINGH</span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white min-h-[60px] group/role">
                  <TypeAnimation
                    sequence={[
                      'Software Engineer',
                      1500,
                      '',
                      500,
                      'Tech Lead',
                      1500,
                      '',
                      500,
                      'Full Stack Developer',
                      1500,
                      '',
                      500,
                      'MERN Stack Developer',
                      1500,
                      '',
                      500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover/role:scale-105 group-hover/role:drop-shadow-lg transition-all duration-500 ease-in-out inline-block"
                  />
                </h2>
              </div>
              
              {/* Right Section - Animation */}
              <div 
                ref={rightAnimRef}
                className="flex justify-center items-center md:w-1/2 w-full slide-in-from-right"
              >
                <div className="relative w-full flex justify-center items-center group/animation">
                  <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse group-hover/animation:opacity-60 group-hover/animation:scale-110 transition-all duration-1000 ease-in-out"></div>
                  <div style={{ transform: 'scale(1.5)', transformOrigin: 'center' }} className="group-hover/animation:scale-[1.6] transition-transform duration-700 ease-in-out">
                    <DotLottieReact
                      src="https://lottie.host/72b42112-38e7-4200-8888-134817588d83/rMh1cR2eNh.lottie"
                      loop
                      autoplay
                      className="relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div id="achievements" className="py-4">
          <Achievements/>
        </div>
        <div className="py-4">
          <About/>
        </div>
        <div className="py-4">
          <Internship/>
        </div>
        <div className="py-4">
          <Contact/>
        </div> 
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none particle">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-30px, -30px) scale(1.05); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 20s ease-in-out infinite; }
        .slide-in-from-left {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-in-from-right {
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-in-from-bottom {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-in-visible {
          opacity: 1 !important;
        }
        .slide-in-from-left.slide-in-visible {
          transform: translateX(0);
        }
        .slide-in-from-right.slide-in-visible {
          transform: translateX(0);
        }
        .slide-in-from-bottom.slide-in-visible {
          transform: translateY(0);
        }
        /* Ensure hover effects work - override inline styles on hover */
        .group\/animation:hover > div[style*="transform"] {
          transform: scale(1.6) !important;
        }
        /* Ensure text hover effects work */
        .group\/header:hover h1 {
          transform: scale(1.05) !important;
        }
        .group\/header:hover > div {
          transform: scale(1.1) !important;
        }
        .group\/name:hover span {
          transform: scale(1.1) !important;
        }
        .group\/role:hover span {
          transform: scale(1.05) !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
