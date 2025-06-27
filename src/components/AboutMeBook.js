import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookComponent = ({ onNavigate }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      navigate('/home/About');
    }, 800);
  };

  const coverClass = isOpening ? 'rotate-y-neg-160' : 'group-hover:rotate-y-neg-5';
  const pointerClass = isOpening ? 'pointer-events-none' : '';
  const navigate = useNavigate()
  return (
    
    <div className={`relative ${pointerClass}`}>
      <button
        onClick={handleClick}
        className="group relative transition-all duration-300 hover:scale-105"
        disabled={isOpening}
      >
        <div className="flex flex-col relative perspective-1000">
          <div className="w-64 h-80 bg-[#FAF4D3] rounded-lg border-2 border-yellow-200 shadow-lg"></div>
          <div className={`absolute top-0 left-0 w-64 h-80 bg-[#FAF4D3] rounded-lg border-2 border-yellow-200 shadow-lg transition-all duration-1000 transform-gpu origin-left ${coverClass}`}>
    
          </div>

          <div className="h-full flex items-end justify-center pb-4">
              <span className="mt-2 text-xl text-white group-hover:text-white transition-colors duration-300 font-jersey">
                About Me
              </span>
            </div>
        </div>
      </button>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-neg-5 {
          transform: rotateY(-5deg);
        }
        .rotate-y-neg-160 {
          transform: rotateY(-160deg);
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
        .origin-left {
          transform-origin: left center;
        }
      `}</style>
    </div>
  );
};

export default BookComponent;