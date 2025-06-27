import React from 'react';

function FolderButton({ children, onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${className}`}
    >
      {/* Folder Graphic */}
      <div className="relative">
        <div className="absolute -top-3 left-0 w-16 h-6 bg-[#FAEED3] rounded-t-lg border-l-2 border-t-2 border-r-2 border-yellow-200 shadow-sm group-hover:bg-yellow-200 transition-colors duration-300"></div>
        <div className="w-32 h-24 bg-[#FAF4D3] rounded-lg border-2 border-yellow-200 shadow-lg group-hover:bg-[#FFF0A0] group-hover:shadow-xl transition-all duration-300"></div>
      </div>

      {/* Label Below */}
      <span className="mt-2 text-sm text-white group-hover:text-yellow-100 font-jersey">
        {children}
      </span>
    </div>
  );
}

export default FolderButton;