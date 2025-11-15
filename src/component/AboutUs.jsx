import React, { useState, useEffect, useRef } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [activeSection, setActiveSection] = useState('summary');
  const sectionRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "AlphaSquare Labs",
      role: "Software Engineer",
      duration: "Nov 2025 - Present · 1 mo",
      location: "Noida, Uttar Pradesh",
      type: "Full-time",
      website: "https://www.alphasquarelabs.com/",
      icon: "🚀",
      technologies: ["SAP B1 HANA", ".NET SDK", "C#", "ERP Systems", "Business Integration"],
      points: [
        "Developing enterprise solutions using SAP B1 HANA and .NET SDK",
        "Working on ERP system integrations and business process automation",
        "Building custom modules for business operations optimization",
        "Implementing C# based solutions for enterprise applications",
        "Collaborating with cross-functional teams for system enhancements"
      ]
    },
    {
      company: "KashiBnB",
      role: "Tech Lead",
      duration: "Jan 2025 - Nov 2025 · 10 mos",
      location: "Varanasi, Uttar Pradesh",
      type: "Full-time",
      website: "https://kashibnb.com/",
      icon: "👨‍💻",
      technologies: ["MERN Stack", "Team Leadership", "Project Management", "Full-Stack Development"],
      points: [
        "Led and managed overall development team as Tech Lead",
        "Designed and implemented complete system architecture",
        "Mentored junior developers and conducted code reviews",
        "Oversaw project planning and delivery timelines",
        "Implemented agile methodologies and best practices"
      ]
    },
    {
      company: "Vayv Systems",
      role: "Software Developer Intern",
      duration: "May 2024 - Jul 2024 · 2 mos",
      location: "Remote",
      type: "Internship",
      website: "https://vayv.in/",
      icon: "💫", 
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      points: [
        "Developed inventory management system boosting efficiency by 60%",
        "Implemented user authentication and dashboard analytics",
        "Built real-time inventory tracking features",
        "Reduced dependency on manual Excel processes",
        "Integrated analytics for stock management and decision-making"
      ]
    }
  ];

  const skills = {
    "Enterprise Tech": ["SAP B1 HANA", ".NET SDK", "C#", "ERP Systems"],
    "Frontend": ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    "Tools & Others": ["Git", "GitHub", "Agile", "VS Code", "Postman"]
  };

  const socialLinks = [
    {
      platform: "LinkedIn",
      handle: "/in/vishal-singh1431",
      url: "https://www.linkedin.com/in/vishal-singh1431/",
      icon: "💼",
      color: "from-blue-500 to-cyan-500"
    },
    {
      platform: "GitHub",
      handle: "VishalSingh1431",
      url: "https://github.com/VishalSingh1431",
      icon: "🐙",
      color: "from-purple-500 to-pink-500"
    },
    {
      platform: "LeetCode",
      handle: "Vishal1431",
      url: "https://leetcode.com/u/Vishal1431/",
      icon: "⚡",
      color: "from-orange-500 to-yellow-500"
    },
    {
      platform: "Codeforces",
      handle: "Vishal1431",
      url: "https://codeforces.com/profile/Vishal1431",
      icon: "🏆",
      color: "from-red-500 to-pink-500"
    },
    {
      platform: "Phone",
      handle: "+91 9794894561",
      url: "tel:+919794894561",
      icon: "📞",
      color: "from-green-500 to-emerald-500"
    },
    {
      platform: "Email",
      handle: "vishalkumar.singh.cer21@itbhu.ac.in",
      url: "mailto:vishalkumar.singh.cer21@itbhu.ac.in",
      icon: "📧",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:vishalkumar.singh.cer21@itbhu.ac.in';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919794894561';
  };

  const handleWebsiteClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        {['summary', 'experience', 'skills', 'achievements'].map((section, index) => (
          <button
            key={section}
            onClick={() => {
              const element = document.getElementById(section);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`block w-3 h-3 rounded-full my-4 transition-all duration-500 ease-in-out cursor-pointer ${
              activeSection === section 
                ? 'bg-cyan-400 scale-150 shadow-lg shadow-cyan-400/50' 
                : 'bg-white/30 hover:bg-white/50 hover:scale-125'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative">
              ABOUT ME
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-400/30"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Software Engineer • Tech Lead • Competitive Programmer • Full-Stack Developer
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-20">
          
          {/* Left Sidebar - Profile */}
          <div className="xl:col-span-4 space-y-8">
            {/* Profile Card */}
            <div className={`group relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-10 opacity-0 scale-95'
            }`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-1000"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl group-hover:scale-105 transition-all duration-500 ease-in-out">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="/Images/HeroImage.jpg" 
                    alt="Vishal Kumar Singh"
                    className="relative w-48 h-48 mx-auto rounded-2xl object-cover shadow-2xl border-4 border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <div className="transition-all duration-300">
                    <h2 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">Vishal Kumar Singh</h2>
                    <p className="text-cyan-400 font-semibold text-lg transition-all duration-300 group-hover:scale-105">Software Engineer</p>
                    <p className="text-gray-400 text-sm mt-1 flex items-center justify-center transition-colors duration-300 group-hover:text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse transition-all duration-300"></span>
                      AlphaSquare Labs
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 ease-in-out">
                    🚀 Open To Work
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                    {[
                      { label: "Experience", value: "1+ Year", icon: "💼" },
                      { label: "Projects", value: "6+", icon: "📁" },
                      { label: "Freelance", value: "2", icon: "🎯" },
                      { label: "DSA Problems", value: "2000+", icon: "⚡" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-3 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 hover:border hover:border-cyan-500/20 hover:scale-105 transition-all duration-500 ease-in-out group/stat cursor-pointer">
                        <div className="text-2xl mb-1 group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-500 ease-in-out">{stat.icon}</div>
                        <div className="text-cyan-400 font-bold text-lg group-hover/stat:text-cyan-300 transition-colors duration-500">{stat.value}</div>
                        <div className="text-gray-400 text-xs group-hover/stat:text-gray-300 transition-colors duration-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:scale-105">
              <h3 className="text-white font-bold text-lg mb-4 text-center transition-colors duration-300 hover:text-cyan-400">Let's Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((contact, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      if (contact.platform === 'Email') handleEmailClick();
                      else if (contact.platform === 'Phone') handlePhoneClick();
                      else handleSocialClick(contact.url);
                    }}
                    className={`bg-gradient-to-r ${contact.color} p-4 rounded-2xl text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out">{contact.icon}</span>
                        <div>
                          <div className="font-semibold group-hover:translate-x-1 transition-all duration-500 ease-in-out">{contact.platform}</div>
                          <div className="text-white/80 text-sm truncate max-w-[140px] group-hover:text-white transition-all duration-500 ease-in-out">{contact.handle}</div>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">→</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-8 space-y-8">
            
            {/* Professional Summary */}
            <div 
              id="summary"
              data-section="summary"
              ref={el => sectionRefs.current[0] = el}
              className="group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <div className="flex items-center mb-8 transition-all duration-300">
                <div className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-500 ease-in-out"></div>
                <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">Professional Summary</h2>
              </div>
              <div className="space-y-4">
                {[
                  "🚀 Software Engineer at AlphaSquare Labs, specializing in SAP B1 HANA and .NET SDK for enterprise solutions",
                  "👨‍💻 Former Tech Lead at KashiBnB with hands-on experience in team management and full-stack development",
                  "🎓 B.Tech graduate from IIT (BHU), Varanasi with strong foundation in computer science fundamentals",
                  "🏆 Competitive programmer with elite rankings: Grand Master (4006) and Specialist (1461)",
                  "💡 Passionate about building scalable applications and solving complex business problems",
                  "🔧 Proficient in MERN stack with expertise in both frontend and backend development"
                ].map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 rounded-2xl bg-gray-700/30 hover:bg-gray-700/50 hover:border hover:border-cyan-500/20 hover:scale-105 transition-all duration-500 ease-in-out group/point"
                  >
                    <span className="text-cyan-400 text-xl mr-4 mt-1 group-hover/point:scale-125 group-hover/point:rotate-12 transition-all duration-500 ease-in-out">✦</span>
                    <span className="text-gray-300 group-hover/point:text-white transition-all duration-500 ease-in-out leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div 
              id="experience"
              data-section="experience"
              ref={el => sectionRefs.current[1] = el}
              className="group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <div className="flex items-center mb-8 transition-all duration-300">
                <div className="w-2 h-10 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-400/50 transition-all duration-500 ease-in-out"></div>
                <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-green-300">Work Experience</h2>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ease-in-out cursor-pointer group/exp ${
                      expandedExperience === index
                        ? 'border-cyan-400 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 scale-105 shadow-2xl'
                        : 'border-gray-600 hover:border-cyan-400 hover:bg-gray-700/30 hover:scale-105'
                    }`}
                    onMouseEnter={() => setExpandedExperience(index)}
                    onMouseLeave={() => setExpandedExperience(null)}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl transition-opacity duration-500 ${
                      expandedExperience === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl group-hover/exp:scale-110 group-hover/exp:rotate-12 transition-all duration-500 ease-in-out">
                            {exp.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-bold text-white group-hover/exp:text-cyan-400 transition-all duration-500 ease-in-out">
                                  {exp.role}
                                </h3>
                                <p className="text-cyan-300 font-semibold">{exp.company}</p>
                                <p className="text-gray-400 text-sm">{exp.duration}</p>
                                <p className="text-gray-400 text-sm">{exp.location} • {exp.type}</p>
                              </div>
                              {exp.website && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleWebsiteClick(exp.website);
                                  }}
                                  className="text-cyan-400 hover:text-cyan-300 transform hover:scale-110 hover:rotate-12 transition-all duration-500 ease-in-out ml-4"
                                  title="Visit Website"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className={`transform transition-all duration-500 ease-in-out ${
                          expandedExperience === index ? 'rotate-180 text-cyan-400 scale-110' : 'text-gray-400 hover:text-cyan-400 hover:scale-110'
                        }`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/30 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Content */}
                      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                        expandedExperience === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-4 border-t border-gray-600/50">
                          <ul className="space-y-3">
                            {exp.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start text-gray-300 hover:text-cyan-200 transition-all duration-500 ease-in-out group/list-item">
                                <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover/list-item:scale-125 group-hover/list-item:rotate-12 transition-all duration-500 ease-in-out">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Education Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skills */}
              <div 
                id="skills"
                data-section="skills"
                ref={el => sectionRefs.current[2] = el}
                className="group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <div className="flex items-center mb-6 transition-all duration-300">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-500 ease-in-out"></div>
                  <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">Technical Skills</h2>
                </div>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items], index) => (
                    <div key={category} className="group/skill">
                      <h3 className="text-cyan-400 font-bold text-lg mb-3">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-xl text-sm font-medium border border-gray-600/50 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/30 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out cursor-pointer"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="group bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 ease-in-out">
                <div className="flex items-center mb-6 transition-all duration-300">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-500 ease-in-out"></div>
                  <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">Education</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 group/edu hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 ease-in-out">
                    <div className="text-4xl mb-4 text-center group-hover/edu:scale-125 group-hover/edu:rotate-12 transition-all duration-500 ease-in-out">🎓</div>
                    <h3 className="text-white font-bold text-xl text-center mb-2 group-hover/edu:text-cyan-300 transition-colors duration-500">IIT (BHU), Varanasi</h3>
                    <p className="text-cyan-300 text-center mb-3 group-hover/edu:text-cyan-200 transition-colors duration-500">Bachelor of Technology</p>
                    <div className="text-gray-400 text-sm text-center space-y-1 group-hover/edu:text-gray-300 transition-colors duration-500">
                      <p>2021 – 2025</p>
                      <p>CGPA: 8.47/10</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "DSA", level: "Expert", color: "from-green-500 to-emerald-500" },
                      { label: "Algorithms", level: "Advanced", color: "from-blue-500 to-cyan-500" },
                      { label: "Web Dev", level: "Advanced", color: "from-purple-500 to-pink-500" },
                      { label: "OOP", level: "Expert", color: "from-orange-500 to-yellow-500" }
                    ].map((skill, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-r ${skill.color} p-4 rounded-2xl text-white text-center transform hover:scale-110 hover:shadow-xl hover:rotate-1 transition-all duration-500 ease-in-out cursor-pointer`}
                      >
                        <div className="font-bold text-sm mb-1">{skill.label}</div>
                        <div className="text-xs opacity-90">{skill.level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div 
          id="achievements"
          data-section="achievements"
          ref={el => sectionRefs.current[3] = el}
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:scale-105 transition-all duration-500 ease-in-out">
            <h2 className="text-4xl font-bold text-center text-white mb-12 transition-all duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300">
                Coding Achievements
              </span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {[
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
              ].map((achievement, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${achievement.delay}ms` }}
                  className={`bg-gradient-to-br ${achievement.color} p-6 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-500 group text-white text-center relative overflow-hidden animate-fade-in-up`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                  <div className="absolute -top-4 -right-4 text-4xl opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500">
                    {achievement.icon}
                  </div>
                  <p className="text-2xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {achievement.value}
                  </p>
                  <p className="font-bold text-white/90 text-sm mb-1 relative z-10">{achievement.label}</p>
                  <p className="text-white/70 text-xs relative z-10">{achievement.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-6">Ready to Build Something Amazing?</h3>
              <p className="text-cyan-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm actively looking for new opportunities and excited to collaborate on innovative projects.
              </p>
              <button 
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-2xl font-black text-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-110 hover:shadow-2xl hover:rotate-1 transition-all duration-500 ease-in-out shadow-lg mb-6"
              >
                📧 SEND EMAIL
              </button>
              <div className="flex justify-center space-x-6 mt-6">
                {socialLinks.slice(0, 4).map((social, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (social.platform === 'Phone') handlePhoneClick();
                      else handleSocialClick(social.url);
                    }}
                    className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 hover:translate-x-1 transition-all duration-500 ease-in-out text-sm flex items-center space-x-2"
                  >
                    <span>{social.icon}</span>
                    <span>{social.platform}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 20s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default AboutUs;