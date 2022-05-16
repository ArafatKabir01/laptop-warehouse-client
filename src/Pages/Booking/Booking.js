import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const Booking = () => {
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
            console.log(result)
            const remaining = detailsProduct;
            setDtailsProduct(remaining);
        })
    };
   

    return (
        <div>
            <div className='service-card container'>
            <img src={detailsProduct.img}></img>
            <h4 className='ms-2 mb-3'>{detailsProduct.name}</h4>
            <p className='mt-4 mb-3 ms-3'>{detailsProduct.text}</p>
            <p className='ms-3 mb-0'>${detailsProduct.price}</p>
            <p className='ms-3 mb-0'>Quantity: {detailsProduct.quantity}</p>
            <p className='ms-3 mb-0'>Supplier: {detailsProduct.supplier}</p>
            <Button className='ms-3'></Button>
        </div>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
      {/* <input type='text' {...register("name")} placeholder='Porduct Name' required/><br/><br/>
      <input type="number" {...register("price")} placeholder='Price' required /><br/><br/> */}
      <input type="number" {...register("quantity")} placeholder='Product Quantity' required /><br/><br/>
      {/* <input {...register("supplier")} placeholder='Supplier Name' required/><br/><br/> */}
      {/* <input {...register("img")} placeholder='img url' required/><br/><br/>
      <textarea {...register("text")} placeholder='Product Description' required/><br/><br/> */}
      <input type="submit" value={'Update Quantity'} />
    </form><br/>
        </div>
    );
};

export default Booking;