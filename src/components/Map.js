import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../assests/Map.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map({ center }) {
    console.log("Render of map");
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