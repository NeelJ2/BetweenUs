import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import '../assests/Map.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map({ center, setResultsRadius }) {
    useEffect(() => { // Used for map rerender. Is there a better way?? This is not consistent 
        console.log("New center Map")
    }, [center]);
    
    const updateResultsRadius = async () => {
        setResultsRadius(document.getElementById("Search_Radius").value)
    }

    window.updateResultsRadius = updateResultsRadius
    return (
        <div className='Map'>
            <div className='Map_Header'>
                <p>Search Radius</p>
                <select name='Search_Radius'
                        id='Search_Radius'
                        onChange={updateResultsRadius}>
                    <option value="1609">1 mile</option>
                    <option value="4828">3 miles</option>
                    <option value="8046">5 miles</option>
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