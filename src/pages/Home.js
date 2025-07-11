import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FolderButton from '../components/FolderButton'
import InstructionsPanel from '../components/MessageBox';
import BookComponent from '../components/AboutMeBook';
import { motion } from 'framer-motion'


function Home() {
  const navigate = useNavigate();

  const handleAboutNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    
    <div className="min-h-screen bg-[#1C5D99] p-8 flex items-center justify-center">
      <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row gap-16 w-full max-w-6xl mx-auto items-center lg:items-center justify-center">
          {/* Left Side - Folders and Book */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ">
            {/* Folders Column */}
            <div className="flex flex-col gap-10 ">
              <FolderButton onClick={() => navigate('/home/Experience')}>
                Experience
              </FolderButton>

              <FolderButton onClick={() => navigate('/home/Projects')}>
                Projects
              </FolderButton>

              <FolderButton onClick={() => navigate('/home/ContactInfo')}>
                Contact Me
              </FolderButton>
            </div>

            {/* Book positioned to the right of folders */}
            <div className="lg:ml-8 ">
              <BookComponent onNavigate={handleAboutNavigation} />
            </div>
          </div>

          {/* Right Side - Instructions Panel */}
          <div className="flex-shrink-0 animate-bounce-smaller">
            <InstructionsPanel />
          </div>
        </div>
      </motion.div>
    </div>
  );
}


export default Home;