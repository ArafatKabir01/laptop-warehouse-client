import React from 'react';

const ManageProducts = ({product}) => {
    const {name, price,quantity} = product
    const handleDelete = id =>{
        const proceed = window.confirm('are you sure?')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url , {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => console.log(data))

        }
    }
    return (
        <tbody key={product._id}>
        <tr>
          <td>{name}</td>
          <td>{price}</td>
          <td>{quantity} <button onClick={()=>handleDelete(product._id)} className='ms-4'>Delete</button></td>
        </tr> 
        </tbody>
    );
};

export default ManageProducts;