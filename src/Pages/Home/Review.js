import React from 'react';
import image from '../../Assets/Images/Group 33091.png';

const Review = () => {
    return (
        <div className='w-72'>
            <div className='flex justify-between'>
                <img className='w-32' src={image} alt="" />
                <p className='text-4xl'>,,</p>
            </div>
            <p className='text-secondary mt-5'>
                I really happy to buy. Your service is awesome. You provice best price.And Your Product Quaility is really good.
            </p>
        </div>
    );
};

export default Review;