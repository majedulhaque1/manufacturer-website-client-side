import React from 'react';
import image from '../../Assets/Images/Group 33091.png';

const Review = ({review}) => {
    const {_id,image, name, rating, description} = review;
    console.log(review);
    return (
        <div className='w-72'>
            <div className='flex justify-between'>
                <img className='w-32' src={image} alt="" />
                <p className='text-4xl'>,,</p>
            </div>
                <p className='text-2xl'>{name}</p>
                <p className='text-2xl'>Rating: <small>{rating}</small></p>
            <p className='text-secondary mt-5'>
                {description}
            </p>
        </div>
    );
};

export default Review;