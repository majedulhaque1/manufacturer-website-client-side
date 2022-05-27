import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import image from '../../Assets/Images/Group 33091.png';

const Banner = () => {
    return (
        <>
        <div className='w-full h-screen flex justify-center items-center'>
            <div>

            <h1 className='text-white capitalize mb-8 text-3xl lg:text-6xl text-center'>
                <p className='my-5'>We provide best quality product</p>
                <p>And provide best price</p>
            </h1>
            <div className='flex justify-center items-center'>
                <button className='btn btn-accent rounded-3xl text-white'>About Us</button>
                <button className='btn btn-outline text-white border-2 ml-5 rounded-3xl border-accent test-white'>Learn More</button>
            </div>
            </div>
        </div>
        </>
    );
};

export default Banner;