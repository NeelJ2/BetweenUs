import React, { useState, useEffect }  from 'react';
import Address from './components/Address';
import Results from './components/Results';
import Map from './components/Map';
import './App.css';

function App() {
  // Declare state variables for storing addresses
  const [myAddress, setMyAddress] = useState(null);
  const [friendsAddress, setFriendsAddress] = useState(null);

  // Use useEffect to log the updated value of myAddress
  useEffect(() => {
    if (myAddress) {
        console.log(myAddress);
        console.log(myAddress.geometry.location.lat());
        console.log(myAddress.geometry.location.lng());
    }
  }, [myAddress]);

  // Use useEffect to log the updated value of friendsAddress
  useEffect(() => {
      if (friendsAddress) {
          console.log(friendsAddress);
          console.log(friendsAddress.geometry.location.lat());
          console.log(friendsAddress.geometry.location.lng());
      }
  }, [friendsAddress]);

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
          MyAddress={myAddress}
          FriendsAddress={friendsAddress}
          ></Map>
        <Results></Results>
      </div>
    </div>
  );
}

export default App;
