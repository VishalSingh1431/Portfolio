import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const animationRef = useRef(null);
  const formRef = useRef(null);

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
    if (animationRef.current) observer.observe(animationRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_3c67w2c',
        'template_ado4l0t',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message
        },
        'YN8MpwRdsAY95GlVk'
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch(() => {
        setStatus('Failed to send message. Try again later.');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-10 slide-in-from-bottom"
        >
          <div className="inline-block relative mb-6 group/header">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse group-hover/header:opacity-40 group-hover/header:scale-110 transition-all duration-700 ease-in-out"></div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative group-hover/header:scale-105 transition-transform duration-500 ease-in-out">
              CONTACT ME
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/30 hover:scale-125 hover:shadow-cyan-400/50 transition-all duration-500 ease-in-out"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed hover:text-cyan-300 transition-colors duration-500 ease-in-out">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Animation Section */}
          <div 
            ref={animationRef}
            className="slide-in-from-left"
          >
            <div className="relative w-full flex justify-center items-center group/animation">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse group-hover/animation:opacity-60 group-hover/animation:scale-110 transition-all duration-1000 ease-in-out"></div>
              <div style={{ transform: 'scale(1.2)', transformOrigin: 'center' }} className="group-hover/animation:scale-[1.3] transition-transform duration-700 ease-in-out">
                <DotLottieReact
                  src="https://lottie.host/ee3a14b9-08af-45b9-9d4a-5022c421829b/bgmtfuzV0a.lottie"
                  loop
                  autoplay
                  className="relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div 
            ref={formRef}
            className="slide-in-from-right"
          >
            <div className="group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out">
              {status && (
                <div className={`mb-6 p-4 rounded-2xl text-center font-semibold animate-fade-in-up ${
                  status.includes('successfully') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30'
                } transition-all duration-500 ease-in-out`}>
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-cyan-300 font-semibold mb-2 text-lg group-hover/label:text-cyan-200 transition-colors duration-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:scale-[1.02] hover:border-cyan-500/30 hover:bg-gray-700/70 hover:scale-[1.01] transition-all duration-500 ease-in-out"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 font-semibold mb-2 text-lg group-hover/label:text-cyan-200 transition-colors duration-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:scale-[1.02] hover:border-cyan-500/30 hover:bg-gray-700/70 hover:scale-[1.01] transition-all duration-500 ease-in-out"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 font-semibold mb-2 text-lg group-hover/label:text-cyan-200 transition-colors duration-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:scale-[1.02] hover:border-cyan-500/30 hover:bg-gray-700/70 hover:scale-[1.01] transition-all duration-500 ease-in-out resize-none"
                    placeholder="Enter your message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-110 hover:shadow-2xl hover:rotate-1 transition-all duration-500 ease-in-out shadow-lg"
                >
                  📧 SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
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

export default Contact;
