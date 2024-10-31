import React, { useEffect, useState } from 'react';
import '../assests/Results.css'

function Results({ myAddress, friendsAddress}) {

    const [places, setPlaces] = useState([]); // State to store fetched places

    useEffect(() => {
        if (myAddress) {
            const map = new window.google.maps.Map(document.createElement('div'));
            const service = new window.google.maps.places.PlacesService(map);

            const request = {
                location: new window.google.maps.LatLng(myAddress.geometry.location.lat(), myAddress.geometry.location.lng()),
                radius: '8046', // 8046 meters = 5 Miles
                type: ['restaurant']
            };

            service.nearbySearch(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setPlaces(results.slice(0, 10))
                    console.log(results);
                } else {
                    alert('Error fetching places');
                    console.log(status)
                }
            });
        }
    }, [myAddress]);
    
    return (
        <div className='Results'>
            <div className='Results_Header'>
                <p>Cuisine</p>
                <select name='Restaurant_Cuisine'>
                    <option value="Americian">Americian</option>
                    <option value="Barbecue">Barbecue</option>
                    <option value="Chinese">Chinese</option>
                    <option value="French">French</option>
                    <option value="Hamburger">Hamburger</option>
                    <option value="Indian">Indian</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Steak">Steak</option>
                    <option value="Sushi">Sushi</option>
                    <option value="Thai">Thai</option>
                </select>
            </div>
            <div className='Results_List'>
                {/* <textarea
                    id='Results_List'
                ></textarea> */}
                <ul>
                    {places.map((place, index) => (
                        <li key={index}>
                            <h4>{place.name}</h4>
                            <p>Rating: {place.rating || 'N/A'}</p>
                            <p>Address: {place.vicinity}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Results;