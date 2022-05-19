
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ManageProducts from '../ManageProducts/ManageProducts';

const ManageProduct = () => {
    const [products , setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://hidden-tundra-48655.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure?')
        if(proceed){
            const url = `https://hidden-tundra-48655.herokuapp.com/product/${id}`
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
    const addproduct = ()=>{
      navigate("/addproduct")
    }
 
return (
<div>
  
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
  <button onClick={addproduct} className='ms-5 mb-4 mt-4'>Add Product</button>
</div>
);  
};

export default ManageProduct;