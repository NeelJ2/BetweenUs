import React from 'react';
import '../assests/Map.css'

function Map() {
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
            <div className='Map'>
                <textarea
                    id='Map'
                    placeholder='Map'
                ></textarea>
            </div>
        </div>
    );
}

export default Map;