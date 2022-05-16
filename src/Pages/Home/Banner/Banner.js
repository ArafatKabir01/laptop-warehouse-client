import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container d-md-flex align-content-center justify-content-center d-sm-block'>
            <div className='benner-info'>
                <h2 className='fs-1 mt-5'>Choose your dream laptop</h2>
                <h4>laptop Warehouse</h4>
                <p className='mt-4'>
                Buy It Direct Ltd is a limited company registered in England. Registered number 04171412. Registered office: Unit A Trident Business Park, Leeds Road, Huddersfield, West Yorkshire, HD2 1UA.
                    
                </p>
                <Button>See More</Button>
            </div>
            <img className='banner-img' src='https://static-media.laptopoutlet.co.uk/catalog/product/4/P/4P3C7ESABU-main_1_1.jpg?width=560&height=560&store=default&image-type=image'></img>
        </div>
    );
};

export default Banner;