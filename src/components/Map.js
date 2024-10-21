import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../assests/Map.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    const defaultProps = { // TODO: Defaulting to white house for now. Would like to make this dynamic to local user
        center: {
          lat: 38.8975562,
          lng: -77.0364539
        },
        zoom: 11
      };
    
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
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    {/* <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                        /> */}
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;