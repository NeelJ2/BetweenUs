import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import '../assests/Address.css';

function Address() {
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
        <div className='Address'>
            <div className='Input_container'>
                <p>Your Address</p>
                <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE}
                    style={{width: "50%"}}
                    onPlaceSelected={(place1) => {
                        setMyAddress(place1); // Save selected address in state
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
