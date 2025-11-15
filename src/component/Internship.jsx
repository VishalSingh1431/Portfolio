import React, { useState, useEffect, useRef } from 'react';

const Internship = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);
    const cardRefs = useRef([]);

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
        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            title: "AlphaSquare Labs - Software Engineer",
            type: "Full-time",
            duration: "Nov 2025 - Present",
            icon: "🚀",
            color: "from-cyan-500 to-blue-500",
            website: "https://www.alphasquarelabs.com/",
            points: [
                "Developing enterprise solutions using SAP B1 HANA and .NET SDK for business process automation.",
                "Working on ERP system integrations and custom modules for business operations optimization.",
                "Implementing C# based solutions for enterprise applications and system enhancements.",
                "Collaborating with cross-functional teams to deliver scalable and efficient solutions.",
                "Exposure: SAP B1 HANA, .NET SDK, C#, ERP Systems, Business Integration."
            ]
        },
        {
            title: "KashiBnB - Tech Lead",
            type: "Full-time",
            duration: "Jan 2025 - Nov 2025",
            icon: "👨‍💻",
            color: "from-green-500 to-emerald-500",
            website: "https://kashibnb.com/",
            points: [
                "Led and managed overall development team as Tech Lead, overseeing project planning and delivery timelines.",
                "Designed and implemented complete system architecture for the platform.",
                "Mentored junior developers and conducted code reviews to ensure code quality.",
                "Implemented agile methodologies and best practices for efficient development workflows.",
                "Exposure: MERN Stack, Team Leadership, Project Management, Full-Stack Development."
            ]
        },
        {
            title: "Vayv Systems - Web App Development",
            type: "Internship",
            duration: "May 2024 - Jul 2024",
            icon: "💼",
            color: "from-purple-500 to-pink-500",
            points: [
                "Developed an inventory and sales management tool to track warehouse items from import to delivery.",
                "Implemented user authentication, item addition, and location features, boosting efficiency by 60% and minimizing dependence on traditional methods like Excel.",
                "Developed a dashboard to display product totals, locations, prices, quantities, and enhanced management.",
                "Integrated analytics for low and out-of-stock items, enhancing decision-making and operational efficiency.",
                "Exposure: React, MongoDB, Express.js, Node.js, and Tailwind CSS."
            ]
        },
        {
            title: "St. Thomas School - Freelance",
            type: "Freelance",
            icon: "🏫",
            color: "from-purple-500 to-pink-500",
            website: "https://stthomaspartawal.com/",
            points: [
                "Developed a responsive website for St. Thomas School, enhancing SEO for top rankings and establishing their online presence.",
                "Designed and implemented user-friendly sections and an enquiry form for easier communication.",
                "Utilized TailwindCSS and JavaScript to ensure optimal performance across various screen sizes.",
                "Exposure: SEO, JavaScript, TailwindCSS, Git, GitHub, Responsive Web Design, Collaboration."
            ]
        },
        {
            title: "Sparsh Academy - Freelance",
            type: "Freelance",
            icon: "🎓",
            color: "from-green-500 to-emerald-500",
            website: "https://www.sparshacademypartawal.com/",
            points: [
                "Developed a responsive and SEO-optimized website for Sparsh Academy, focusing on a clean design to improve user experience and engagement.",
                "Implemented a user-friendly interface with easy access to course details, faculty, and contact information.",
                "Ensured the website is mobile-friendly and fully responsive, enhancing accessibility across devices.",
                "Exposure: React, TailwindCSS, JavaScript, Git, GitHub, SEO Optimization, Responsive Design."
            ]
        },
        {
            title: "Advitha Exim - Freelance",
            type: "Freelance",
            icon: "🛒",
            color: "from-orange-500 to-red-500",
            website: "https://www.advithaexim.com/home",
            points: [
                "Developed an e-commerce platform for Advitha Exim, enabling them to easily manage products and customer orders online.",
                "Built an intuitive admin panel to manage inventory, sales, and customer inquiries.",
                "Incorporated payment gateway integration and security measures for safe transactions.",
                "Exposure: React, Node.js, Express.js, MongoDB, E-commerce Integration, Payment Gateway, TailwindCSS."
            ]
        },
        {
            title: "Prabha Dental Care - Freelance",
            type: "Freelance",
            icon: "🦷",
            color: "from-indigo-500 to-purple-500",
            website: "https://www.prabhadentalcare.com",
            points: [
                "Created a user-friendly website for Prabha Dental Care with an easy-to-navigate interface to showcase services and treatments.",
                "Designed an online appointment booking system to streamline patient interactions and reduce waiting time.",
                "Ensured a responsive design that works across multiple devices and screen sizes for better accessibility.",
                "Exposure: React, TailwindCSS, JavaScript, Responsive Design, User Interface."
            ]
        }
    ];

    return (
        <div className="relative w-full py-12">
            {/* Header */}
            <div 
                ref={headerRef}
                className="text-center mb-10 slide-in-from-bottom"
            >
                <div className="inline-block relative mb-6 group/header">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse group-hover/header:opacity-40 group-hover/header:scale-110 transition-all duration-700 ease-in-out"></div>
                    <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative group-hover/header:scale-105 transition-transform duration-500 ease-in-out">
                        INTERNSHIPS & FREELANCE
                        </h1>
                    </div>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/30 hover:scale-125 hover:shadow-cyan-400/50 transition-all duration-500 ease-in-out"></div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed hover:text-cyan-300 transition-colors duration-500 ease-in-out">
                    Real-world experience building solutions for clients
                </p>
                    </div>

            {/* Experiences Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            ref={el => cardRefs.current[index] = el}
                            className={`group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out ${
                                index % 2 === 0 ? 'slide-in-from-left' : 'slide-in-from-right'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start mb-4">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-3xl mr-4 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-500 ease-in-out shadow-lg`}>
                                    {exp.icon}
                    </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-500 ease-in-out">
                                                {exp.title}
                                            </h2>
                                            <p className="text-cyan-300 font-semibold group-hover:text-cyan-200 group-hover:scale-105 transition-all duration-500 ease-in-out">{exp.type}</p>
                                            {exp.duration && (
                                                <p className="text-gray-400 text-sm group-hover:text-gray-300 group-hover:scale-105 transition-all duration-500 ease-in-out">{exp.duration}</p>
                                            )}
                    </div>
                                        {exp.website && (
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cyan-400 hover:text-cyan-300 hover:scale-125 hover:rotate-12 transition-all duration-500 ease-in-out ml-4"
                                                title="Visit Website"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                </div>
            </div>
                            </div>

                            <div className="space-y-2">
                                {exp.points.map((point, pointIndex) => (
                                    <div
                                        key={pointIndex}
                                    className="flex items-start p-3 rounded-2xl bg-gray-700/30 hover:bg-gray-700/50 hover:border hover:border-cyan-500/20 hover:scale-105 transition-all duration-500 ease-in-out group/point"
                                  >
                                    <span className="text-cyan-400 text-xl mr-4 mt-1 group-hover/point:scale-125 group-hover/point:rotate-12 transition-all duration-500 ease-in-out">✦</span>
                                    <span className="text-gray-300 group-hover/point:text-white transition-all duration-500 ease-in-out leading-relaxed flex-1">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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

export default Internship;
