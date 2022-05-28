import React from 'react';

const Offer = () => {
    return (
        <div className='flex justify-evenly items-center flex-wrap py-24 p-12 rounded-lg mx-auto w-4/5 h-auto bg-accent'>
            <div className='w-2/4'>
                <h2 className='text-6xl capitalize my-8 text-white'>Buy bundle package and get discount</h2>
                <button className='btn btn-white text-accent rounded-3xl'>Buy Now</button>
            </div>
            <div className='w-2/4'>
                <h2 className='text-8xl text-center'>40%</h2>
            </div>
        </div>
    );
};

export default Offer;