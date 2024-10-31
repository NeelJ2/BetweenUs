import React, { useState }  from 'react';
import Address from './components/Address';
import Results from './components/Results';
import Map from './components/Map';
import './App.css';

function App() {
  // Declare state variables for storing addresses
  const [myAddress, setMyAddress] = useState(null);
  const [friendsAddress, setFriendsAddress] = useState(null);

  return (
    <div className="App">
      <header className="BetweenUs_Header">
        <h1>BetweenUs</h1>
      </header>
      <Address 
        setMyAddress={setMyAddress}
        setFriendsAddress={setFriendsAddress}
        ></Address>
      <div className='App_Results'>
        <Map
          myAddress={myAddress}
          friendsAddress={friendsAddress}
          ></Map>
        <Results
        myAddress={myAddress}
        friendsAddress={friendsAddress}
        ></Results>
      </div>
    </div>
  );
}

export default App;
