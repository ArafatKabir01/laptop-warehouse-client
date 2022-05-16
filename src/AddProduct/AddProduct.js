import { jsonEval } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(result => console.log(result))
    };
    return (
        <div>
            <h2 className='text-center'>Added Product</h2><br/>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register("name")} placeholder='Porduct Name' required/><br/><br/>
      <input type="number" {...register("price")} placeholder='Price' required /><br/><br/>
      <input type="number" {...register("quantity")} placeholder='Product Quantity' required /><br/><br/>
      <input {...register("supplier")} placeholder='Supplier Name' required/><br/><br/>
      <input {...register("img")} placeholder='img url' required/><br/><br/>
      <textarea {...register("text")} placeholder='Product Description' required/><br/><br/>
      <input type="submit" />
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        </div>


    );
};

export default AddProduct;