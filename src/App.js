import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alco from './container/Alco'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alco/>
      </header>
    </div>
  );
}

export default App;
