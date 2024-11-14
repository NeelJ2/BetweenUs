import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import '../assests/Address.css';

function Address({ setMyAddress, setFriendsAddress }) {
    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        if (process.env.REACT_APP_GOOGLE) {
            setApiLoaded(true);
        }
    }, []);

    return (
        <div className='Address'>
            <div className='Input_container'>
                <p>Your Address</p>
                {apiLoaded ? (
                    <Autocomplete
                        apiKey={process.env.REACT_APP_GOOGLE}
                        style={{ width: "50%" }}
                        onPlaceSelected={(place1) => {
                            setMyAddress(place1); // Save selected address in state
                        }}
                        options={{
                            types: ['address'],
                            componentRestrictions: { country: "us" },
                        }}
                    />
                ) : (
                    <p>Loading address input...</p>
                )}
            </div>
            <div className='Input_container'>
                <p>Friend's Address</p>
                {apiLoaded ? (
                    <Autocomplete
                        apiKey={process.env.REACT_APP_GOOGLE}
                        style={{ width: "50%" }}
                        onPlaceSelected={(place2) => {
                            setFriendsAddress(place2); // Save selected address in state
                        }}
                        options={{
                            types: ['address'],
                            componentRestrictions: { country: "us" },
                        }}
                    />
                ) : (
                    <p>Loading address input...</p>
                )}
            </div>
        </div>
    );
}

export default Address;
