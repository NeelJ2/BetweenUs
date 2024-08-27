import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import '../assests/Address.css'

function Address() {
    return (
        <div className='Address'>
            <div className='Input_container'>
                <p>Your Address</p>
                <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE}
                    style={{width: "50%"}}
                    onPlaceSelected={(place1) => 
                    {console.log(place1)}
                    }
                    options={{
                        types: ['address'],
                        componentRestrictions: { country: "us"}
                    }}
                />
            </div>
            <div className='Input_container'>
                <p>Friend's Address</p>
                <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE}
                    style={{width: "50%"}}
                    onPlaceSelected={(place2) => 
                    {console.log(place2)}
                    }
                    options={{
                        types: ['address'],
                        componentRestrictions: { country: "us"}
                    }}
                />
            </div>
        </div>
    );
}

export default Address;