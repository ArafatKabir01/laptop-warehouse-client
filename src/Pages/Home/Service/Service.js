import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {img , name,text,price,quantity,supplier} = service;
    const navigate =  useNavigate()
    const handleBooking = () => {
        navigate('/booking')
    }
    return (
        <div className='service-card'>
            <img src={img}></img>
            <h4 className='ms-2 mb-3'>{name}</h4>
            <p className='mt-4 mb-3 ms-3'>{text}</p>
            <p className='ms-3 mb-0'>${price}</p>
            <p className='ms-3 mb-0'>Quantity: {quantity}</p>
            <p className='ms-3 mb-0'>Supplier: {supplier}</p>
            <Button onClick={handleBooking} className='ms-3'>Stock Update</Button>
        </div>
    );
};

export default Service;