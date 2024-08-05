import React from 'react';
import '../assests/Address.css'

function Address() {
    return (
        <div className='Address'>
            <div className='Input_container'>
                <p>Your Address</p>
                <input></input>
            </div>
            <div className='Input_container'>
                <p>Friend's Address</p>
                <input></input>
            </div>
        </div>
    );
}

export default Address;