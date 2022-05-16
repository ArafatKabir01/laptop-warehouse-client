import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageProducts from '../ManageProducts/ManageProducts';

const ManageProduct = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure?')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url , {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })

        }
    }
 
return (
  <Table striped bordered hover size="sm">
   <thead>
    <tr>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
   </thead>
  {  
      products.map(product => <tbody key={product._id}>
            
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.quantity} <button onClick={()=>handleDelete(product._id)} className='ms-4'>Delete</button></td>
        </tr> 
        </tbody>
      )   
  }
  </Table> 
);  
};

export default ManageProduct;