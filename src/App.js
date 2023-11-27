// App.js

import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="menu-bar">
        <h1>EKIP IT SOLUTIONS EMPLOYEE DETAILS</h1>
        <p>Welcome to see the company details</p>
      </header>
      
      <nav className="nav-bar">
        <ul>
          <li id="btns" onClick={() => navigateTo('home')}>Home</li>
          <li id="btns" onClick={() => navigateTo('about')}>About</li>
          <li id="btns" onClick={() => navigateTo('contact')}>Contact</li>
        </ul>
      </nav>

      <main className="content">
        {loggedIn ? (
          <div>
            <h2>Welcome, Lets go through the Details </h2>
            <button id="signs" onClick={handleSignOut}>Click to hide details</button>
            {renderPage()}
          </div>
        ) : (
          <div>
            <h2>Please Sign In to see the Company Details</h2>
            <button id="signs" onClick={handleSignIn}>Click to show Details</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
