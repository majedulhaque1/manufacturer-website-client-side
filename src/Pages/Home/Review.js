import React from 'react';
import image from '../../Assets/Images/Group 33091.png';

const Review = ({review}) => {
    const {_id,image, name, rating, description} = review;
    return (
        <div className='shadow-2xl rounded-lg w-96 p-5'>
            <div className='flex justify-between'>
                <img className='w-32 h-32 rounded-full p-2 border-2 border-accent' src={image} alt="" />
                <p className='text-6xl'>,,</p>
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