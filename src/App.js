import React from 'react';
import Header from './Components/Header';
import routes from './router'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}

      {/* <Landing /> */}
    </div>
  ); 
}

export default App;
