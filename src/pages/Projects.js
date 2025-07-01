import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const projectList = [
    {
      title: 'AI-DARWIN (Research Project @ Columbia\'s CRIS Lab)',
      description:
        'Contributed to a research project that uses symbolic regression and machine learning to uncover mechanisms in chemical and financial systems. Built agent-based models and collaborated on a paper submitted to AIChE 2025.',
    },
    {
      title: 'PreMed Cheat Sheet',
      description:
        'Created a web app to support premed students navigating the med school application process. Launched the MVP in 24 hours at a Columbia hackathon, and grew it to $10K+ in revenue. Stack: React, Firebase, TypeScript, Tailwind.',
    },
    {
      title: 'Autonomous Intelligence Platform (Anote)',
      description:
        'Currently working on an orchestration tool that enhances LLM query performance. Involves building a React frontend and a Next.js backend that integrates with other AI products in development.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C5D99] p-8 flex flex-col items-center justify-start text-white">
      <h1 className="text-5xl font-jersey mb-10 text-center">My Projects</h1>

      <div className="space-y-8 w-full max-w-4xl">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white"
          >
            <h2 className="text-3xl mb-2 font-jersey text-white">{project.title}</h2>
            <p className="text-white text-md">{project.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/home/Projects/Blog')}
        className="mt-12 px-6 py-2 rounded-full bg-white text-[#1C5D99] font-bold hover:bg-blue-100 transition-all"
      >
        Read My Blog
      </button>
    </div>
  );
}

export default Projects;