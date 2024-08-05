import React from 'react';
import '../assests/Results.css'

function Results() {
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
                <textarea
                    id='Results_List'
                    placeholder='Results List'
                ></textarea>
            </div>
        </div>
    );
}

export default Results;