import './Nav_bar.css';
import { Link } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <li id='name'>SAKTHI-STARK</li>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link >Github</Link></li> 
          <li><Link>Linkedin</Link></li>
          <li><Link>View Work</Link></li>
          <li><Link to="/About.js">About</Link></li>
           <li><Link>Contact</Link></li> 
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/About.js" element={<About />} />
      </Routes>
    
    </div>
  );
};

export default NavBar;