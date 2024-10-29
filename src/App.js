import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Header from './components/Header';
import NavBar from './components/Nav_bar';
// import About from './components/About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
