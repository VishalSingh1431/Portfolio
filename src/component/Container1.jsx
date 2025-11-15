import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);
  const animationRef = useRef(null);

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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    if (animationRef.current) observer.observe(animationRef.current);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { 
      value: "2000+", 
      label: "DSA Problems", 
      sub: "Solved", 
      color: "from-cyan-500 to-blue-500",
      icon: "💻",
      delay: 0
    },
    { 
      value: "100+", 
      label: "Top 100", 
      sub: "Rankings", 
      color: "from-green-500 to-emerald-500",
      icon: "🏆",
      delay: 100
    },
    { 
      value: "6+", 
      label: "Projects", 
      sub: "Completed", 
      color: "from-purple-500 to-pink-500",
      icon: "🚀",
      delay: 200
    },
    { 
      value: "4006", 
      label: "Grand Master", 
      sub: "Coding Ninjas", 
      color: "from-orange-500 to-red-500",
      icon: "👑",
      delay: 300
    },
    { 
      value: "1461", 
      label: "Specialist", 
      sub: "Codeforces", 
      color: "from-yellow-500 to-amber-500",
      icon: "⭐",
      delay: 400
    },
    { 
      value: "2106", 
      label: "5 Star", 
      sub: "GeeksforGeeks", 
      color: "from-indigo-500 to-purple-500",
      icon: "★★★★★",
      delay: 500
    },
  ];

  return (
    <div className="relative w-full py-12">
      {/* Achievements Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              style={{ animationDelay: `${achievement.delay}ms` }}
              className={`bg-gradient-to-br ${achievement.color} p-6 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:z-10 transition-all duration-500 ease-in-out group text-white text-center relative overflow-hidden cursor-pointer ${
                index % 2 === 0 ? 'slide-in-from-left' : 'slide-in-from-right'
              }`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="absolute -top-4 -right-4 text-4xl opacity-20 group-hover:scale-150 group-hover:opacity-40 group-hover:rotate-12 transition-all duration-500 ease-in-out">
                {achievement.icon}
              </div>
              <p className="text-2xl font-black mb-2 group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300 relative z-10">
                {achievement.value}
              </p>
              <p className="font-bold text-white/90 text-sm mb-1 group-hover:text-white group-hover:scale-105 transition-all duration-300 relative z-10">{achievement.label}</p>
              <p className="text-white/70 text-xs group-hover:text-white/90 group-hover:scale-105 transition-all duration-300 relative z-10">{achievement.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Section */}
      <div 
        ref={animationRef}
        className="flex justify-center items-center w-full py-6 slide-in-from-bottom"
      >
        <div className="relative w-full flex justify-center items-center group/animation">
          <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse group-hover/animation:opacity-60 group-hover/animation:scale-110 transition-all duration-1000 ease-in-out"></div>
          <div style={{ transform: 'scale(1.5)', transformOrigin: 'center' }} className="group-hover/animation:scale-[1.6] transition-transform duration-700 ease-in-out">
            <DotLottieReact
              src="https://lottie.host/34c1b69b-6fa4-413d-bd1c-4288cd6e068e/iRJWVx7Oxt.lottie"
              loop
              autoplay
              className="relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
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
          transform: translateX(0) translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Achievements;
