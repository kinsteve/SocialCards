import React from 'react';
import './Location.css';
const Location = ({location}) => {
    return (
        <div className='location'>
            <p>{location.street.number} , {location.street.name}</p>
            <p>{location.street.city}</p>
            <p>{location.state}</p>
            <p>{location.postcode}</p>
            <p>{location.country}</p>
        </div>
     );
};

export default Location;