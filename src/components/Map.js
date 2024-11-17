import React, { useEffect } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import '../assests/Map.css';

function MapBox({ center, setResultsRadius }) {
    useEffect(() => {
        console.log("New center Map")
    }, [center]);
    
    const updateResultsRadius = async () => {
        setResultsRadius(document.getElementById("Search_Radius").value)
    }

    window.updateResultsRadius = updateResultsRadius
    return (
        <div className='Map'>
            <div className='Map_Header'>
                <p className='Colored_Text'>Search Radius</p>
                <select name='Search_Radius'
                        id='Search_Radius'
                        onChange={updateResultsRadius}>
                    <option value="1609">1 mile</option>
                    <option value="4828">3 miles</option>
                    <option value="8046">5 miles</option>
                </select>
            </div>
            <div className='Map_Box'>
                <APIProvider apiKey={process.env.REACT_APP_GOOGLE}>
                    <Map
                        center={center.location}
                        zoom={center.zoom}
                        ></Map>
                </APIProvider>
            </div>
        </div>
    );
}

export default MapBox;