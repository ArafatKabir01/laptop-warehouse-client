import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'

const Services = () => {

    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('https://hidden-tundra-48655.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setServices(data.slice(4)))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center mt-4 mb-4' >Products</h2>
            <div className='d-flex justify-content-center flex-wrap '>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;