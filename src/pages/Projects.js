import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

function Projects() {
  const navigate = useNavigate();

  const projectList = [
    {
      title: 'AI-DARWIN (Research Project @ Columbia\'s CRIS Lab)',
      description:
        `Currently working on a research project that uses symbolic regression and machine learning to uncover mechanisms in chemical systems. \
        Utilizing a set of initial conditions and elementary equations, the AI-DARWIN tool builds a set of ODE that is capable of modeling \
        reaction mechanisms with high accuracy. The next steps are to introduce a stochastic element in order to model more complex and changing \
        biological and financial systems. I collaborated on an abstract submitted to AIChE 2025. \
        \n\nTech stack: Numpy, Sympy, scikit-learn`,
    },
    {
      title: 'Pet Health Vision Model (nala)',
      description:
        `Currently working on a computer vision model that specializes in analyzing the pet eye health. The goal is to reduce the number of unnecessary pet visits \
        to help pet owners be more cost-efficient. I built full backend and frontend integration of this tool into the existing web app design so that users can upload and image and \
        recieve the prediction by interacting with various UI elements. \
        \n\n Tech stack: React, Next.js, Hugging Face, Pytorch, TensorFlow`,
    },
    {
      title: 'PreMed Cheatsheet',
      description:
        `Created a web app to support premed students navigating the med school application process. \
        Launched the MVP (called MedLink) in 24 hours at a Columbia hackathon, with community forum, login/signup, friend request, and AI chatbot fefeatures. \
        Rebranded as PreMed Cheatsheet and spearheaded the development of the current UI/UX design and database manipulation.\
        PreMed Cheatsheet has gained over $10K+ in revenue. \n\nTech stack: React, Firebase (Django for MVP), TypeScript, Tailwind.`,
    },
    
  ];

  return (
    <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
    >
      <div className="min-h-screen bg-[#1C5D99] p-8 flex flex-col items-center justify-start text-white">
        <h1 className="text-5xl font-jersey mb-10 text-center">My Projects</h1>

        <div className="space-y-8 w-full max-w-4xl">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white hover:shadow-xlg hover:shadow-white transition-shadow duration-300"
            >
              <h2 className="text-3xl mb-2 font-jersey text-white">{project.title}</h2>
              <p className="text-white text-md whitespace-pre-line">{project.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/home/Projects/Blog')}
          className="mt-8 block mx-auto px-8 py-2 rounded-full bg-[#274dbd] text-white text-3xl tracking-widest border border-black shadow hover:bg-[#1f3ca0] transition-all font-jersey"
        >
          Read My Blog
        </button>
      </div>
    </motion.div>
  );
}

export default Projects;