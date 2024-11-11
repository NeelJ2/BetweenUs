import React, { useState }  from 'react';
import Address from './components/Address';
import Results from './components/Results';
import Map from './components/Map';
import FindCenter from './components/Math';
import './App.css';

function App() {
  // Declare state variables for storing addresses
  const [myAddress, setMyAddress] = useState(null);
  const [friendsAddress, setFriendsAddress] = useState(null);
  const [center, setCenter] = useState({
    location : {
        lat: 38.8975562,
        lng: -77.0364539
    },
    zoom: 11,
    default: true    
  });

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
        <FindCenter
          myAddress={myAddress}
          friendsAddress={friendsAddress}
          setCenter={setCenter}
        />
        <Map
          center={center}
          ></Map>
        <Results
          center={center}
          ></Results>
      </div>
    </div>
  );
}

export default App;
