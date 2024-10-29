import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/Nav_bar';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  if (location.pathname === '/View_work.js') {
    return <NavBar/>;
  }
  return (
    <>
   <NavBar/>;
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
      </header>
    </div>
    </>
  );
}

export default App;
