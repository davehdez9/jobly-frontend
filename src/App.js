import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';

import NavigationBar from './NavigationBar'
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
