import React, { useEffect, useState } from 'react';
import '../assests/Results.css'

function Results({ center, resultsRadius }) {

    const [places, setPlaces] = useState([]); // State to store fetched places

    const getResults = async () => {
        const map = new window.google.maps.Map(document.createElement('div'));
        const service = new window.google.maps.places.PlacesService(map);

        const request = {
            location: new window.google.maps.LatLng(center.location.lat, center.location.lng),
            radius: resultsRadius,
            type: ['restaurant'],
            keyword: document.getElementById("Restaurant_Cuisine").value
        };

        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setPlaces(results.slice(0, 10))
                console.log(results[0]);
            } else {
                alert('Error fetching places');
                console.log(status)
            }
        });
    }

    useEffect(() => {
        if (!center.default) {
            console.log("New center Results");
            getResults();
        }
    }, [center, resultsRadius]);
    
    return (
        <div className='Results'>
            <div className='Results_Header'>
                <p className='Colored_Text'>Cuisine</p>
                <select name='Restaurant_Cuisine'
                        id='Restaurant_Cuisine'
                        onChange={getResults}>
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