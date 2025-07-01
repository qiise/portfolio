import React, { useState } from 'react';
import resumePDF from '../assets/WebsiteResume.pdf';
import profileImage from '../assets/pfp.jpg'
import { motion } from 'framer-motion'
import cloud2 from '../assets/clouds/cloud2.png';
import cloud3 from '../assets/clouds/cloud3.png';
import cloud4 from '../assets/clouds/cloud4.png';
import cloud5 from '../assets/clouds/cloud5.png';




function AboutMe() {
    const [showPDF, setShowPDF] = useState(false);
    const handleResumeClick = () => {
        setShowPDF(true);
    };

    return (
        <div className="relative overflow-hidden min-h-screen  p-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#1C5D99] -z-20"></div>
            <div className = "opacity-50 absolute inset-0 -z-10">
                <img
                    src={cloud3}
                    alt="cloud"
                    className="absolute bottom-10 right-10 animate-bounce-cloud"
                    style={{ bottom: '5%', left: '45%', width: '800px'}}
                />
            
                <img
                    src={cloud4}
                    alt="cloud"
                    className="absolute bottom-50 right-5 animate-bounce-slow opacity-50"
                    style={{ width: '200px' }}
                />
                <img
                    src={cloud5}
                    alt="cloud"
                    className="absolute top-12 left-2 animate-bounce-slow"
                    style={{ width: '300px' }}
                />
            
                <img
                    src={cloud2}
                    alt="cloud"
                    className="absolute top-30 left-20 animate-bounce-cloud opacity-45"
                    style={{ top: '10%', left: '65%', width: '500px', }}
                />
                <img
                    src={cloud4}
                    alt="cloud"
                    className="absolute top-10 left-20 animate-bounce-smaller"
                    style={{ bottom: '10%', left: '80%', width: '400px', }}
                />
                <img
                    src={cloud5}
                    alt="cloud"
                    className="absolute left-20 animate-bounce-smaller"
                    style={{ bottom: '1%', left: '20%', width: '500px', }}
                />
                <img
                    src={cloud4}
                    alt="cloud"
                    className="absolute animate-bounce-cloud"
                    style={{ bottom: '30%', left: '5%', width: '200px',  }}
                />
                
                <img
                    src={cloud3}
                    alt="cloud"
                    className="absolute animate-bounce-slow opacity-80"
                    style={{ top: '10%', left: '35%', width: '350px',  }}
                />
            </div>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-30 items-center lg:items-start w-full max-w-6xl"
            >
                <div className="flex flex-col lg:flex-row gap-40 items-center lg:items-start w-full max-w-6xl">
                    {/* Left Side: Text About Me */}
                    <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-xl p-6 shadow-lg text-white text-lg lg:w-1/2 space-y-4">
                        <h1 className="text-5xl mb-4 font-jersey">Hi, my name is Hannah!</h1>
                        <p>
                            I'm a Computer Science student and Egleston Scholar at Columbia University with a strong interest in artificial intelligence, software development, and finance. 
                            I enjoy building things that are both technically challenging and practically useful—whether that’s a mobile app to help students navigate course selection, or AI tools for health or modeling systems. 
                            I’m especially drawn to projects that combine creative thinking with real-world impact.
                        </p>
                        <p>
                            Lately, I’ve been working on full-stack web and mobile development as well as building AI tools. 
                            These experiences have helped me explore how technology can support better decision-making, make information more accessible, and bring ideas to life. 
                            I'm always curious to learn more, and excited to keep growing at the intersection of AI, CS, and the systems that shape our world.
                        </p>
                    </div>

                    {/* Right Side: Image and Resume Button */}
                    <div className="flex flex-col items-center space-y-10">
                        {/* Placeholder for image */}
                        <div className="overflow-hidden w-64 h-64 rounded-full bg-white bg-opacity-30 backdrop-blur-md flex items-center justify-center text-white text-xl border-8">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button
                            onClick={handleResumeClick}
                            className="mt-8 block mx-auto px-8 py-2 rounded-full bg-[#274dbd] text-white text-3xl tracking-widest border border-black shadow hover:bg-[#1f3ca0] transition-all font-jersey"
                        >
                            View My Resume
                        </button>
                    </div>
                </div>

                {/* Fullscreen PDF Overlay */}
                {showPDF && (
                    <div className="fixed inset-0 bg-[#1C5D99] bg-opacity-80 z-50 flex items-center justify-center p-6">
                        <div className="bg-white bg-opacity-70 rounded-xl w-full max-w-5xl h-[90vh] flex flex-col border border-gray-700 shadow-lg overflow-hidden">
                        {/* Close button container */}
                        <div className="flex justify-center items-center h-16 border-b border-gray-700 px-4">
                            <button
                            onClick={() => setShowPDF(false)}
                            className="px-8 py-2 rounded-full bg-[#274dbd] text-white text-3xl tracking-widest border border-black shadow hover:bg-[#1f3ca0] transition-all font-jersey"
                            >
                            Close
                            </button>
                        </div>

                        {/* Iframe with fixed height instead of flex-grow */}
                        <iframe
                            src={resumePDF}
                            title="My Resume"
                            className="w-full"
                            style={{ height: '85%', border: 'none' }}
                        />
                        </div>
                    </div>
                    )}
            </motion.div>
        </div>
        
    );
}

export default AboutMe;