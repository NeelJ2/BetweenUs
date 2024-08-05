import React from 'react';
import Address from './components/Address';
import Results from './components/Results';
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="BetweenUs_Header">
        <h1>BetweenUs</h1>
      </header>
      <Address></Address>
      <div className='App_Results'>
        <Map></Map>
        <Results></Results>
      </div>
    </div>
  );
}

export default App;
