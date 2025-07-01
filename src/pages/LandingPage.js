import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import cloud2 from '../assets/clouds/cloud2.png';
import cloud3 from '../assets/clouds/cloud3.png';
import cloud4 from '../assets/clouds/cloud4.png';
import cloud5 from '../assets/clouds/cloud5.png';

const cloudImages = [cloud2, cloud3, cloud4, cloud5];

const LandingPage = () => {
  const cloudRefs = useRef([]);
  const navigate = useNavigate();

  // Handle parallax cloud movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    cloudRefs.current.forEach((cloud, index) => {
      if (cloud) {
        const moveX = ((clientX - window.innerWidth / 2) / window.innerWidth) * 10;
        const moveY = ((clientY - window.innerHeight / 2) / window.innerHeight) * 10;
        cloud.style.transform = `translate(${moveX * (index + 1)}px, ${moveY * (index + 1)}px)`;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    
    <div
      className="relative w-full h-screen bg-[#1C5D99] overflow-hidden font-jersey"
      style={{ cursor: 'url(/src/assets/cursors/retro_cursor.png), auto' }}
    >
      
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
                style={{ bottom: '1%', left: '55%', width: '800px'}}
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
                className="absolute bottom-50 right-5 animate-bounce-cloud"
                style={{ width: '200px' }}
            />
            <img
                src={cloud5}
                alt="cloud"
                className="absolute top-12 left-2 animate-bounce-smaller"
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


      {/* Welcome Speech Bubble */}
      <div className="absolute top-[30vh] left-[30vw] animate-bounce-slow z-50">
        <div className="relative bg-white border-2 border-black px-10 py-5 text-4xl shadow-md inline-block rounded-lg">
          WELCOME
          <div className="absolute -bottom-2 right-4 w-3 h-3 bg-white border-r-2 border-b-2 border-black rotate-[45deg]" />
        </div>
      </div>

      {/* App Window */}
      <div className="relative z-10 w-[80vw] max-w-md h-[70vh] max-h-[400px] mx-auto mt-32 rounded-lg border border-black shadow-[8px_8px_0px_#240026] bg-white overflow-hidden">
        {/* Browser Header */}
        <div className="flex items-center justify-end px-2 py-1 bg-[#fcf6df] border-b border-black">
          <div className="w-4 h-4 border border-black rounded-full mr-2"></div>
          <div className="w-4 h-4 border border-black rounded-full mr-2"></div>
          <div className="w-4 h-4 border border-black rounded-full flex items-center justify-center text-xs font-bold">
            X
          </div>
        </div>

        {/* App Content */}
        <div className="bg-[#ade6ff] p-8 h-full flex flex-col justify-between">
          {/* Avatar */}
          <div className="w-40 h-40 mx-auto bg-[#fcf6df] border border-black rounded-full flex items-center justify-center text-7xl mt-4">
            QI
          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate('/home')}
            className="mt-8 block mx-auto px-8 py-2 rounded-full bg-[#274dbd] text-white text-4xl tracking-widest border border-black shadow hover:bg-[#1f3ca0] transition-all"
          >
            LOGIN
          </button>

          {/* Info Text */}
          <p className="text-black text-center mt-4 text-sm">
            click login to get started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

