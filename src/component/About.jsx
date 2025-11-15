import React, { useState, useEffect, useRef } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

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
        if (textRef.current) observer.observe(textRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative w-full py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div 
                    ref={headerRef}
                    className="text-center mb-10 slide-in-from-bottom"
                >
                    <div className="inline-block relative mb-6 group/header">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse group-hover/header:opacity-40 group-hover/header:scale-110 transition-all duration-700 ease-in-out"></div>
                        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative group-hover/header:scale-105 transition-transform duration-500 ease-in-out">
                            ABOUT ME
                        </h1>
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/30 hover:scale-125 hover:shadow-cyan-400/50 transition-all duration-500 ease-in-out"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Text Content */}
                    <div 
                        ref={textRef}
                        className="group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out space-y-4 slide-in-from-left"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-500 ease-in-out"></div>
                            <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">Who I Am</h2>
                        </div>
                        <div className="space-y-2">
                            {[
                                "🚀 Software Engineer at AlphaSquare Labs, specializing in SAP B1 HANA and .NET SDK for enterprise solutions",
                                "👨‍💻 Former Tech Lead at KashiBnB with hands-on experience in team management and full-stack development",
                                "🎓 B.Tech graduate from IIT (BHU), Varanasi with strong foundation in computer science fundamentals",
                                "🏆 Competitive programmer with elite rankings: Grand Master (4006) and Specialist (1461)",
                                "💡 Passionate about building scalable applications and solving complex business problems",
                                "🔧 Proficient in MERN stack, C#, ERP Systems, and modern web technologies",
                                "⚡ Solved 2000+ DSA problems and achieved top global ranks in coding competitions"
                            ].map((point, index) => (
                                <div 
                                    key={index}
                                    className="flex items-start p-3 rounded-2xl bg-gray-700/30 hover:bg-gray-700/50 hover:border hover:border-cyan-500/20 hover:scale-105 transition-all duration-500 ease-in-out group/point"
                                >
                                    <span className="text-cyan-400 text-xl mr-4 mt-1 group-hover/point:scale-125 group-hover/point:rotate-12 transition-all duration-500 ease-in-out">✦</span>
                                    <span className="text-gray-300 group-hover/point:text-white transition-all duration-500 ease-in-out leading-relaxed">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div 
                        ref={imageRef}
                        className="slide-in-from-right"
                    >
                        <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-in-out"></div>
                        <img 
                            src="/Images/HeroImage.jpg" 
                            alt="Vishal Kumar Singh" 
                            className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-gray-700/50 group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1 object-cover"
                        />
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Side-Entry Animations */}
            <style>{`
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

export default About;