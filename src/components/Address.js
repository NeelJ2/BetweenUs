import React, { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import '../assests/Address.css';

function Address() {
    // Declare state variables for storing addresses
    const [myAddress, setMyAddress] = useState(null);
    const [friendsAddress, setFriendsAddress] = useState(null);

    return (
        <div className='Address'>
            <div className='Input_container'>
                <p>Your Address</p>
                <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE}
                    style={{width: "50%"}}
                    onPlaceSelected={(place1) => {
                        setMyAddress(place1); // Save selected address in state
                        console.log(myAddress);
                    }}
                    options={{
                        types: ['address'],
                        componentRestrictions: { country: "us" }
                    }}
                />
            </div>
            <div className='Input_container'>
                <p>Friend's Address</p>
                <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE}
                    style={{width: "50%"}}
                    onPlaceSelected={(place2) => {
                        setFriendsAddress(place2); // Save selected address in state
                        // console.log(friendsAddress.geometry.location.lat());
                        // console.log(friendsAddress.geometry.location.long());
                        console.log(friendsAddress) // TODO: Why is this giving NULL error now???
                        console.log(place2.geometry.location.lat());
                        console.log(place2.geometry.location.lng());
                    }}
                    options={{
                        types: ['address'],
                        componentRestrictions: { country: "us" }
                    }}
                />
            </div>

        </div>
    );
}

export default Address;
