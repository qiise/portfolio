
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path ="/home" element = {<Home />} />
        <Route path ="/home/About" element = { <AboutMe/> } />
        <Route path ="/home/ContactInfo" element = { <ContactMe/> } />
        <Route path ="/home/Experience" element = { <Experience/> } />
        <Route path ="/home/Projects" element = { <Projects/> } />
        <Route path ="/home/Projects/Blog" element = { <Blog/> } />
      </Routes>
    </Router>
  );
}

export default App;
