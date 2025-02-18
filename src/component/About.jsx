import React from 'react';

const About = () => {
    return (
        <div className='p-12 bg-blue-300'>
            <div className='max-w-6xl mx-auto'> {/* Added max-w-6xl and mx-auto for centering */}
                <h1 className='text-violet-500 text-6xl text-center pb-4 transform transition duration-300 hover:scale-125'>
                    About Me
                </h1>
                <div className='flex flex-col md:flex-row gap-8 items-center'> {/* Flex column on small screens, row on medium screens */}
                    <div className='bg-white shadow-lg p-6 rounded-lg flex-1 transform transition duration-300 hover:scale-105'>
                        <p className='text-blue-950'>
                            Hi, I’m <strong>Vishal Kumar Singh</strong>, a <strong>B-Tech </strong> student at <strong>IIT (BHU), Varanasi</strong>, with a strong passion for technology and problem-solving. I excel in <strong>competitive programming</strong>, holding titles like <strong>Grand Master (Rated 4006)</strong> on <strong>Coding Ninjas</strong>, <strong>5 Star (Rated 2106)</strong> on <strong>GeeksforGeeks</strong>, and <strong>Specialist (Rated 1461)</strong> on <strong>Codeforces</strong>. With over <strong>2000+ DSA problems solved</strong> and top global ranks in coding competitions, I thrive on challenges and continuously push my limits.
                        </p>
                        <p className='text-blue-950 mt-4'> {/* Added margin-top for spacing */}
                            Beyond programming, I’m a skilled <strong>full-stack web developer</strong> with expertise in <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>. I’ve built projects like a <strong>Food Delivery App</strong> and a <strong>Flash Games Website</strong>, and gained practical experience through internships at <strong>Vayv Systems</strong> and as a <strong>Freelance Web Developer</strong>. My work focuses on creating efficient, user-friendly solutions that solve real-world problems. I’m always eager to learn, innovate, and contribute to impactful projects.
                        </p>
                    </div>
                    {/* Image Section */}
                    <img 
                        src="/Images\HeroImage.jpg" 
                        alt="About Me" 
                        className='max-h-75 h-auto rounded-3xl  shadow-lg transform transition duration-300 hover:scale-105' 
                    />
                </div>
            </div>
        </div>
    );
};

export default About;