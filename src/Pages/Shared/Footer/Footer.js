import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='text-center h-50 p-5 bg-dark text-danger bottom-0 '>
            <p>Copy Right Ⓒ{year}</p>
        </div>
    );
};

export default Footer;