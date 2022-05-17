import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate  = useNavigate()
    const {productid} = useParams()
    const[detailsProduct , setDtailsProduct] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/booking/${productid}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDtailsProduct(data))
    },[]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product/${productid}`
        fetch(url,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            window.location.reload()
        });
    };

const hadleDelivered = quantity => {
    const newQuantity = parseFloat(quantity) - 1;
    console.log(newQuantity)
        const url1 = `http://localhost:5000/deliveredproduct/${productid}`
        fetch(url1,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({newQuantity})

        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            window.location.reload()
        });
    };
    const manageInventory = ()=>{
        navigate('/manageproduct')
        
    }
   

    return (
        <div>
            <div className='service-card container mt-3'>
            <img src={detailsProduct.img}></img>
            <h4 className='ms-2 mb-3'>{detailsProduct.name}</h4>
            <p className='mt-4 mb-3 ms-3'>{detailsProduct.text}</p>
            <p className='ms-3 mb-0'>${detailsProduct.price}</p>
            <p className='ms-3 mb-0'>Quantity: {detailsProduct.quantity}</p>
            <p className='ms-3 mb-0'>Supplier: {detailsProduct.supplier}</p>
            <Button onClick={()=>hadleDelivered(detailsProduct.quantity)}  className='ms-3'>Delivered</Button>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
      <input type="number" {...register("quantity")} placeholder='Product Quantity' required /><br/><br/>
      <input type="submit" value={'Update Quantity'} />
      <Button onClick={manageInventory}  className='ms-3'>ManageInventory</Button>
    </form><br/>
          
        </div>
      
        </div>
    );
};

export default Booking;