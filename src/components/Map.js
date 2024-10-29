import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../assests/Map.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map({ myAddress, friendsAddress}) {
    const defaultCenter = { // TODO: Defaulting to white house for now. Would like to make this dynamic to local user
        location : {
            lat: 38.8975562,
            lng: -77.0364539
        },
        zoom: 11  
    };
    
    const center = myAddress && myAddress.geometry ? { // TODO: Make a math function that take in myAddress and friendsAddress to find center point
        location: {
            lat: myAddress.geometry.location.lat(),
            lng: myAddress.geometry.location.lng()
        },
        zoom: 15
    } : defaultCenter

    return (
        <div className='Map'>
            <div className='Map_Header'>
                <p>Search Radius</p>
                <select name='Search_Radius'>
                    <option value="5">5 miles</option>
                    <option value="10">10 miles</option>
                    <option value="15">15 miles</option>
                    <option value="20">20 miles</option>
                    <option value="25">25 miles</option>
                </select>
            </div>
            <div className='Map_Box'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE}}
                    center={center.location}
                    zoom={center.zoom}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;