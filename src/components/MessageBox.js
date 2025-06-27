import React from 'react';

const InstructionsPanel = () => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl text-white shadow-lg max-w-md">
      <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
      <ul className="list-disc pl-8 space-y-5 text-sm leading-relaxed">
        <li> Here, you can explore a collection of my past experiences, projects I have worked on, and more about me.</li>
        <li>Click on the folder icons to navigate around.</li>
        
      </ul>
    </div>
  );
};

export default InstructionsPanel;