import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import '../assests/Address.css';

function Address({ setMyAddress, setFriendsAddress}) {

    return (
        <div className='Address'>
            <div className='Input_container'>
                <p className='Colored_Text'>Your Address</p>
                <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE}
                    style={{width: "50%",
                        borderRadius: "10px"
                    }}
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
                <p className='Colored_Text'>Friend's Address</p>
                <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE}
                    style={{width: "50%",
                        borderRadius: "10px"
                    }}
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
