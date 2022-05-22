import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {Navigation, Pagination} from 'swiper';
import image from '../../Assets/Images/Group 33091.png';

const Banner = () => {
    return (
        <>
        <div className='w-4/5 h-screen mx-auto mt-5 bg-yellow-400'>
        <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        >
            <SwiperSlide>
                <div className='flex justify-center items-center'>
                    <h2 className='text-4xl text-secondary'>
                        <span>We Provide Best Quality</span>
                        <span>And with Best Price</span>
                    </h2>
                    <img className='w-48' src={image} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center'>
                    <h2 className='text-4xl text-secondary'>
                        <span>We Provide Best Quality</span>
                        <span>And with Best Price</span>
                    </h2>
                    <img className='w-48' src={image} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center'>
                    <h2 className='text-4xl text-secondary'>
                        <span>We Provide Best Quality</span>
                        <span>And with Best Price</span>
                    </h2>
                    <img className='w-48' src={image} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        </>
    );
};

export default Banner;