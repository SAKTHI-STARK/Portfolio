import './Nav_bar.css';
import { Link } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Contact from './Contact';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <li id='name'>SAKTHI-STARK</li>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="https://github.com/SAKTHI-STARK" >Github</Link></li> 
          <li><Link to="https://www.linkedin.com/in/sakthivel-m-441522280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Link></li>
          <li><Link>View Work</Link></li>
          <li><Link to="/About.js">About</Link></li>
           <li><Link to="/Contact.js">Contact</Link></li> 
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/About.js" element={<About />} />
        <Route path="/Contact.js" element={<Contact />} />
      </Routes>
    
    </div>
  );
};

export default NavBar;