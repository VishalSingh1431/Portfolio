import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const projectRefs = useRef([]);

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

    if (headerRef.current) observer.observe(headerRef.current);
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Flash Games",
      period: "July 2023 - November 2023",
      icon: "🎮",
      color: "from-purple-500 to-pink-500",
      points: [
        { icon: "🎮", text: "Developed an interactive website featuring classic flash games like Sudoku, TicTacToe, Othello, and Minesweeper." },
        { icon: "🧩", text: "Implemented game AI using algorithms like Minimax, Alpha-Beta Pruning, Backtracking, and BFS for optimal gameplay." },
        { icon: "💡", text: "Used recursion for Sudoku board generation and game theory for strategic AI moves in Othello and TicTacToe." },
        { icon: "🌐", text: "Exposure: HTML5, CSS3, JavaScript, Data Structures & Algorithms." }
      ]
    },
    {
      title: "Food Delivery App",
      period: "December 2023 - March 2024",
      icon: "🍕",
      color: "from-cyan-500 to-blue-500",
      points: [
        { icon: "🍕", text: "Developed a full-stack food delivery app with an intuitive UI, search functionality, and seamless order management." },
        { icon: "🛠", text: "Built the frontend using React with TailwindCSS for a clean, responsive design that adapts to all screen sizes." },
        { icon: "🛒", text: "Designed a secure backend with Node.js & Express to handle API requests and real-time data retrieval." },
        { icon: "📦", text: "Implemented MongoDB for efficient order and inventory management with real-time updates." },
        { icon: "🔐", text: "Integrated Google reCAPTCHA for enhanced security in the contact and authentication forms." },
        { icon: "🌐", text: "Exposure: React, Node.js, Express.js, MongoDB, Google reCAPTCHA." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-16 slide-in-from-bottom"
        >
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative">
              MY RECENT WORKS
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-400/30"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative projects built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out ${
                index % 2 === 0 ? 'slide-in-from-left' : 'slide-in-from-right'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-3xl mr-4 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-500 ease-in-out shadow-lg`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-all duration-500 ease-in-out">
                    {project.title}
                  </h2>
                  <p className="text-cyan-300 font-semibold group-hover:text-cyan-200 transition-colors duration-500">{project.period}</p>
                </div>
              </div>

              <div className="space-y-4">
                {project.points.map((point, pointIndex) => (
                  <div
                    key={pointIndex}
                    className="flex items-start p-4 rounded-2xl bg-gray-700/30 hover:bg-gray-700/50 hover:border hover:border-cyan-500/20 transition-all duration-500 ease-in-out group/point"
                  >
                    <span className="text-2xl mr-4 mt-1 group-hover/point:scale-125 group-hover/point:rotate-12 transition-all duration-500 ease-in-out">{point.icon}</span>
                    <span className="text-gray-300 group-hover/point:text-white transition-all duration-500 ease-in-out leading-relaxed flex-1">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
          transform: translateX(0) translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Projects;
