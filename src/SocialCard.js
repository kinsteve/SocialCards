import React from 'react';
import './SocialCard.css';
import Location from './Location';
import PhoneNumber from './PhoneNumber';
const SocialCard = ({data}) => {
    return (
        <div className='card'>
            <div className='card_title'>
                {data.name.first} {data.name.last}
            </div>
            <div className='card_body'>
                <Location location={data.location}/>
                <PhoneNumber type="Home" number={data.phone}/>
                <PhoneNumber type="Mobile" number={data.cell} />
                <div className="card_image">
                    <img src={data.picture.medium} alt=""/>
                </div>
            </div>            
        </div>
    );
};

export default SocialCard;