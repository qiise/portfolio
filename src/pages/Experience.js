import React from 'react';

const experiences = [
  {
    company: 'Columbia Daily Spectator Publishing Company',
    location: 'New York, NY',
    role: 'Engineering Associate',
    dates: 'Sept 2024 – Present',
    details: [
      'Led full-stack development of Columbia’s professor review platform using Node.js, SQL, and React.',
      'Designed Android/iOS mobile app with React Native and launched the iOS version in the app store with 1.3K+ downloads in under 4 months.',
      'Oversaw and contributed to website optimization and rollouts, supporting 1,000+ student users, and collaborating across divisions.'
    ],
  },
  {
    company: 'nala',
    location: 'Remote',
    role: 'AI/ML Intern',
    dates: 'May 2025 – July 2025',
    details: [
      'Worked on developing a computer vision model to help enhance care for pets',
      'Utilied Hugging Face, PyTorch, and TensorFlow for the model and built full frontend and backend integration into the current web app using React and Next.js',
      'Collaborated with nala team members through weekly stand-ups and sprints.'
    ],
  },
  {
    company: 'Anote',
    location: 'Remote',
    role: 'AI Engineering Intern',
    dates: 'May 2025 – August 2025',
    details: [
      'Worked on Autonomous Intelligence project providing a novel tool that enhances LLM query resolution using an intelligent orchestrator with React frontend and Next.js backend.',
      'Developed guest access functionality to provided limited chatbot services to anonymous users and collaborated with team members to integrate playbook sharing between chat users',
      'Collaborated with other product teams to ensure cross-functionality and integration through weekly sprints.'
    ],
  },
  {
    company: 'CRIS Lab @ Columbia University',
    location: 'New York, NY',
    role: 'Software Development Intern',
    dates: 'Jan 2025 – Present',
    details: [
      'Built ML models with Python and scikit-learn to derive mechanism-based equations for modeling chemical mechanisms',
      'Expanding the project to model stochastic systems, which has implications for financial forecasting and trading strategies',
      'Developed agent-based simulations using game theoretical approaches to reduce costs and increase efficiency in industrial metal rod production.',
      'Research submitted to AIChE 2025; advised by Prof. Venkatasubramanian and Kyungil Kim.'
    ],
  },
  {
    company: 'PreMedCheatSheet',
    location: 'Remote',
    role: 'Lead Software Developer',
    dates: 'Feb 2025 – May 2025',
    details: [
      'Generated $10K+ in revenue by providing educational resources for premed students navigating medical school applications.',
      'Built MVP in 24 hours at Columbia DevFest Hackathon (premedcheatsheet.com).',
      'Tech stack: React, TypeScript, Tailwind CSS (frontend), Firebase (backend).'
    ],
  },
];

function Experience() {
  return (
    <div className="min-h-screen bg-[#1C5D99] p-8 flex flex-col items-center">
      <h1 className="text-white text-5xl font-jersey mb-12">These are my experiences!</h1>
      <div className="w-full max-w-5xl space-y-10">
        {experiences.map(({ company, location, role, dates, details }, index) => (
          <div key={index} className="bg-white bg-opacity-20 rounded-xl p-6 shadow-md backdrop-blur-md text-white">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">{role}</h2>
              <span className="italic text-sm opacity-70">{dates}</span>
            </div>
            <h3 className="text-lg font-semibold mb-4">
              {company} <span className="opacity-70">- {location}</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              {details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
