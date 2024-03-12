import React from 'react';
import './App.css';
import logo from './logo.svg'; 
import SideMenu from './component/Sidemenu';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideMenu/>
      </div>
      <div className="content">
        <img src={logo} alt="React Logo" style={{ height: '40px' }} />
      </div>
    </div>
  );
}

export default App;