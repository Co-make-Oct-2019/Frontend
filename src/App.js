import React from 'react';
import logo from './logo.svg';
import './App.css';

// TODO: CREATE ROUTES TO RENDER THE COMPONENTS
// * COMPONENT IMPORTS
import DashBoard from './components/DashBoard/DashBoard';
import Profile from './components/Profile/Profile';
import Issues from './components/Issues/Issues';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/*  // TODO: CREATE ROUTES TO RENDER THE COMPONENTS
      */}
      <DashBoard />
      <Profile />
      <Issues />
      <Login />
    </div>
  );
}

export default App;
