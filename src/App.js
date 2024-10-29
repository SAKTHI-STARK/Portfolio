import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/Nav_bar';

function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
      </header>
    </div>
    </>
  );
}

export default App;
