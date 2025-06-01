import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    return(
        <div>
            <button onClick = {() => navigate('/home/About')}> About Me </button>
            <button onClick = {() => navigate('/home/ContactInfo')}> Contact Me </button>
            <button onClick = {() => navigate('/home/Experience')}> Experience </button>
            <button onClick = {() => navigate('/home/Projects')}> Projects </button>
        </div>
    )
}

export default Home;