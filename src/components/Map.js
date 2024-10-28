import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../assests/Map.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map({ myAddress, friendsAddress}) {
    const defaultCenter = { // TODO: Defaulting to white house for now. Would like to make this dynamic to local user
          lat: 38.8975562,
          lng: -77.0364539
    };
    
    const center = myAddress && myAddress.geometry ? {
        location: {
            lat: myAddress.geometry.location.lat(),
            lng: myAddress.geometry.location.lng()
        }
    } : defaultCenter
    
    const zoom = 11;

    console.log("Map Center:", center);
    console.log("Map Key:", myAddress ? `myAddress` : 'default-map');

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
                    center={center?.location ?? defaultCenter }
                    zoom={zoom}
                    //key={myAddress ? `${myAddress.geometry.location.lat()}-${myAddress.geometry.location.lng()}` : 'default-map'}
                >
                    {/* <AnyReactComponent
                        lat={39.2134855}
                        lng={-76.8825009}
                        text="My Marker"
                        /> */}
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;