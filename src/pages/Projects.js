import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects(){

    const navigate = useNavigate()
    return(
        <div className = "min-h-screen bg-[#1C5D99] p-8 flex items-center justify-center">
           <h1> This is the projects page! </h1>
           <button onClick = {() => navigate('/home/Projects/Blog')}> Blog </button>
        </div>
        
    )
}

export default Projects;