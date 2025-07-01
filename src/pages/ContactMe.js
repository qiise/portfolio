import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react';

import cloud2 from '../assets/clouds/cloud2.png';
import cloud3 from '../assets/clouds/cloud3.png';
import cloud4 from '../assets/clouds/cloud4.png';
import cloud5 from '../assets/clouds/cloud5.png';

function ContactMe(){

    return(
        <div className = "relative overflow-hidden min-h-screen bg-[#1C5D99] p-8 flex items-center justify-center"
        >
            
             {/* Cloud Background Images */}
            <img
                src={cloud2}
                alt="cloud"
                className="absolute top-10 left-10 animate-bounce-cloud opacity-50"
                style={{ top: '5%', right: '20%', width: '400px'}}
            />
            <img
                src={cloud3}
                alt="cloud"
                className="absolute bottom-10 right-10 animate-bounce-cloud"
                style={{ bottom: '10%', left: '45%', width: '800px'}}
            />
            <img
                src={cloud4}
                alt="cloud"
                className="absolute bottom-50 right-50 animate-bounce-cloud"
                style={{ width: '200px' }}
            />
            <img
                src={cloud4}
                alt="cloud"
                className="absolute bottom-50 right-5 animate-bounce-slow"
                style={{ width: '200px' }}
            />
            <img
                src={cloud5}
                alt="cloud"
                className="absolute top-12 left-2 animate-bounce-slow"
                style={{ width: '300px' }}
            />
            <img
                src={cloud3}
                alt="cloud"
                className="absolute top-30 left-20 animate-bounce-smaller"
                style={{ top: '35%', left: '15%', width: '550px'}}
            />
            <img
                src={cloud2}
                alt="cloud"
                className="absolute top-30 left-20 animate-bounce-cloud opacity-75"
                style={{ bottom: '10%', left: '11%', width: '300px',}}
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
                src={cloud5}
                alt="cloud"
                className="absolute animate-bounce-smaller"
                style={{ top: '3%', left: '50%', width: '200px', }}
            />
            <img
                src={cloud3}
                alt="cloud"
                className="absolute animate-bounce-slow opacity-80"
                style={{ top: '10%', left: '35%', width: '350px',  }}
            />


           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className = "text-white font-jersey text-4xl text-left mt-2"
           >
                <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-xl p-6 shadow-lg ">
                    <p><a href="mailto:hannah.qi@columbia.edu" className="flex items-center gap-2 hover:underline hover:text-blue-300 transition-all duration-200">
                        <FaEnvelope />email: hannah.qi@columbia.edu</a> 
                    <a href="https://www.linkedin.com/in/hannahqi/" target="_blank" rel="nooperner noreferrer" className="flex items-center gap-2 hover:underline hover:text-blue-300 transition-all duration-200"> 
                        <FaLinkedin></FaLinkedin>LinkedIn</a>
                    <a href="https://github.com/qiise" target="_blank" rel="nooperner noreferrer" className="flex items-center gap-2 hover:underline hover:text-blue-300 transition-all duration-200"> 
                        <FaGithub></FaGithub>Github</a>
                    </p>
                </div>
           </motion.div>
           
        </div>
    )
}

export default ContactMe;