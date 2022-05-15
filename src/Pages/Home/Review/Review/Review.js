import { Button } from 'bootstrap';
import React from 'react';

const Review = ({review}) => {
    const {img , name , text} = review
    return (
        <div>
            <div className='service-card'>
            <img src={img}></img>
            <h4 className='ms-2 mb-3'>{name}</h4>
            <p className='mt-4 ms-3'>{text}</p>
        </div>
            
        </div>
    );
};

export default Review;